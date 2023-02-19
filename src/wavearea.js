// UI part of wavearea
// handles user interactions and sends commands to worker
// all the data is stored and processed in worker
import sprae from 'sprae';
import { fileToArrayBuffer } from './audio-utils';
import playClip from './play-loop';

history.scrollRestoration = 'manual'

// CSS.paintWorklet.addModule(`./node_modules/css-houdini-squircle/squircle.min.js`);

// refs
const wavearea = document.querySelector('.wavearea')
const editarea = wavearea.querySelector('.w-editable')
const played = wavearea.querySelector('.w-played')
const timecodes = wavearea.querySelector('.w-timecodes')
const playButton = wavearea.querySelector('.w-play')
const caretLinePointer = wavearea.querySelector('.w-caret-line')
const audio = new Audio


// init backend - receives messages from worker with rendered audio & waveform
const worker = new Worker('./dist/worker.js', { type: "module" });
const audioCtx = new AudioContext()

// UI state
let state = sprae(wavearea, {
  // interaction state
  isMouseDown: false,

  // state
  loading: false,
  recording: false,
  playing: false,
  selecting: false,
  scrolling: false,

  // current playback start/end time
  clipStart: 0,
  loop: false,
  clipEnd: null,
  _startTimeOffset:0,

  volume: 1,

  // waveform segments
  segments: [],
  total: 0, // # segments
  duration: 0, // duration (received from backend)

  caretOffscreen: 0, // +1 if caret is below, -1 above viewport
  caretOffset: 0, // current caret offset, characters
  caretLine: 0,

  // chars per line (~5s with block==1024)
  // FIXME: make responsive
  cols: 216,

  // caret repositioned my mouse
  async handleCaret() {
    // we need to do that in order to capture only manual selection change, not as result of programmatic caret move
    let sel = selection()
    if (!sel) return
    state.caretOffset = sel.start;
    state.updateCaretLine()

    state.clipStart = state.caretOffset;
    if (!state.playing) {
      state.clipEnd = !sel.collapsed ? sel.end : state.total;
      state.loop = audio.loop = !sel.collapsed;
    }
    else {
      state._startTimeOffset = state.caretOffset
    }

    // audio.currentTime converts to float32 which may cause artifacts with caret jitter
    audio.currentTime = state.duration * state.caretOffset / state.total;
  },

  async handleBeforeInput(e) {
    let handler = inputHandlers[e.inputType];
    if (!handler) e.preventDefault(); else {
      handler.call(this, e);
    }
  },

  async handleDrop(e) {
    let files = e.dataTransfer.files
    let file = files[0]
    if (!file.type.startsWith('audio')) return false;
    // FIXME: save file to storage under the name

    // recode into wav
    state.loading = true;
    state.segments = [];

    let arrayBuf = await fileToArrayBuffer(file);
    let audioBuf = await decodeAudio(arrayBuf);
    let wavBuffer = await encodeAudio(audioBuf);
    let blob = new Blob([wavBuffer], {type:'audio/wav'});
    let url = URL.createObjectURL( blob );
    await applyOp(['src', url]);

    state.loading = false;

    return arrayBuf;
  },

  async handleFile(e) {
    // let url = URL.createObjectURL(e.target.files[0])
    // pushOp(['src', url])
    state.loading = 'Decoding'
    let file = e.target.files[0];
    let arrayBuf = await fileToArrayBuffer(file);
    let audioBuf = await audioCtx.decodeAudioData(arrayBuf);
    let channelData = Array.from({length: audioBuf.numberOfChannels}, (i)=> audioBuf.getChannelData(i))

    await pushOp(['file', {
      file,
      numberOfChannels: audioBuf.numberOfChannels,
      sampleRate: audioBuf.sampleRate,
      length: audioBuf.length,
      channelData
    }])
    state.loading = false
  },

  scrollIntoCaret() {
    if (state.caretOffscreen && !state.scrolling)
      caretLinePointer.scrollIntoView({ behavior: 'smooth', block: 'center'}),
      state.scrolling = true,
      setTimeout(() => state.scrolling = false, 500)
  },

  // start playback
  play (e) {
    state.playing = true;
    editarea.focus();

    // from the end to the beginning
    if (state.caretOffset === state.total) selection(state.caretOffset = state.clipStart = 0)

    state.scrollIntoCaret();

    let {clipStart, clipEnd, loop} = state;

    const toggleStop = () => playButton.click()

    // since audio.currentTime is inaccurate, esp. in Safari, we measure precise played time
    let startTime, animId
    state._startTimeOffset = state.caretOffset
    const init = () => {
      startTime = performance.now() * 0.001;
      cancelAnimationFrame(animId)
      syncCaret()
    }

    const syncCaret = () => {
      let playedTime = (performance.now() * 0.001 - startTime);
      let currentBlock = Math.min(state._startTimeOffset + Math.round(state.total * playedTime / state.duration), state.total)
      if (loop) currentBlock = Math.min(currentBlock, clipEnd)

      selection(state.caretOffset = currentBlock)

      state.updateCaretLine()
      state.scrollIntoCaret();

      animId = requestAnimationFrame(syncCaret)
    }

    // audio takes time to init before play on mobile, so we hold on caret
    audio.addEventListener('playing', init)

    // audio looped - reset caret
    audio.addEventListener('seeked', init)

    const stopAudio = playClip(audio, state.loop && {
      start: state.duration * state.clipStart / state.total,
      end: state.duration * state.clipEnd / state.total
    });
    // TODO: markLoopRange()

    audio.addEventListener('ended', toggleStop, {once: true});
    return () => {
      audio.removeEventListener('ended', toggleStop)
      audio.removeEventListener('seeked', init)
      audio.removeEventListener('playing', init)

      cancelAnimationFrame(animId), animId = null
      stopAudio();
      state.playing = false

      // return selection if there was any
      //TODO: unmarkLoopRange()
      if (state.loop) selection(clipStart, clipEnd)

      // adjust end caret position
      else if (audio.currentTime >= audio.duration) selection(state.total)

      editarea.focus()
    }
  },

  // navigate to history state
  async goto (params) {
    try {
      await renderAudio(params)
    }
    catch (e) {
      // failed to load audio means likely history is discontinuous:
      // try updating blob in history state by rebuilding audio
      await loadAudioFromURL()
    }
    selection(state.caretOffset)
  },

  // make sure play/caret line pointer is correct
  updateCaretLine() {
    let caretLine = Math.floor(state.caretOffset / state.cols);
    let sel = selection();

    // last of segment edge case
    if (!(state.caretOffset % state.cols) && sel.startNodeOffset === editarea.children[sel.startNode.dataset.id].textContent.length) caretLine--;

    if (state.caretLine !== caretLine) state.caretLine = caretLine;
  },

  // FIXME: this must be done by sprae ideally
  // but it needs to dynamically have access to children
  updateTimecodes() {
    timecodes.replaceChildren()
    if (!editarea.textContent) return
    let offset = 0
    for (let segNode of editarea.children) {
      let lines = Math.ceil(segNode.textContent.length / state.cols) || 1;
      for (let i = 0; i < lines; i++) {
        let a = document.createElement('a')
        let tc = timecode(i * (state.cols||0) + offset)
        a.href=`#${tc}`
        a.textContent = tc
        timecodes.appendChild(a)
      }
      offset += segNode.textContent.length
    }
  },

  timecode
});


const inputHandlers = {
  // insertText(){},
  // insertReplacementText(){},
  // insertLineBreak(){},
  // insertParagraph(){},
  insertFromDrop(e){
    console.log('insert from drop', e)
  },
  // insertFromPaste(){},
  // insertLink(){},
  // deleteWordBackward(){},
  // deleteWordForward(){},
  // deleteSoftLineBackward(){},
  // deleteSoftLineForward(){},
  // deleteEntireSoftLine(){},
  // deleteHardLineBackward(){},
  // deleteHardLineForward(){},
  // deleteByDrag(){},
  // deleteByCut(){},
  // deleteContent(){},
  async deleteContentBackward(e){
    let range = e.getTargetRanges()[0]
    let fromNode = range.startContainer.parentNode.closest('.w-segment'),
        toNode = range.endContainer.parentNode.closest('.w-segment'),
        fromId = Number(fromNode.dataset.id), toId = Number(toNode.dataset.id)
    let from = range.startOffset + state.segments.slice(0, fromId).reduce((off,seg)=>off+seg.length,0),
        to = range.endOffset + state.segments.slice(0, toId).reduce((off,seg)=>off+seg.length,0)

    // debounce push op to collect multiple deletes
    if (this._deleteTimeout) {
      clearTimeout(this._deleteTimeout)
      this._deleteOp[1]--
    }
    else this._deleteOp = ['del', from, to]

    const pushDeleteOp = () => {
      pushOp(this._deleteOp)
      this._deleteOp = this._deleteTimeout = null
    }
    this._deleteTimeout = setTimeout(pushDeleteOp, 280)
  },
  // deleteContentForward(){},
  // historyUndo(){},
  // historyRedo(){},

}


// get/set normalized selection
/**
 *
 * @param {number | Array} start – absolute offset (excluding modifier chars) or relative offset [node, offset]
 * @param {number | Array} end – absolute offset (excluding modifier chars) or relative offset [node, offset]
 * @returns {start, , end}
 */
const selection = (start, end) => {
  let s = window.getSelection()

  // set selection, if passed
  if (start != null) {
    if (Array.isArray(start)) start = absOffset(...start)
    if (Array.isArray(end)) end = absOffset(...end)

    // start/end must be within limits
    start = Math.max(0, start)
    if (end == null) end = start

    let range = s.rangeCount ? s.getRangeAt(0) : new Range()

    // find start/end nodes
    let [startNode, startNodeOffset] = relOffset(start)
    let [endNode, endNodeOffset] = relOffset(end)
    range.setStart(startNode, startNodeOffset)
    range.setEnd(endNode, endNodeOffset)
    s.addRange(range)

    return {
      start, startNode, end, endNode,
      startNodeOffset, endNodeOffset,
      collapsed: s.isCollapsed
    }
  }

  if (!s.anchorNode || !editarea.contains(s.anchorNode)) return

  // collect start/end offsets
  start = absOffset(s.anchorNode, s.anchorOffset), end = absOffset(s.focusNode, s.focusOffset)

  // swap selection direction
  let startNode = s.anchorNode.parentNode.closest('.w-segment'), startNodeOffset = s.anchorOffset,
      endNode = s.focusNode.parentNode.closest('.w-segment'), endNodeOffset = s.focusOffset;
  if (start > end) {
    [end, endNode, endNodeOffset, start, startNode, startNodeOffset] =
    [start, startNode, startNodeOffset, end, endNode, endNodeOffset]
  }

  return {
    start,
    startNode,
    startNodeOffset,
    end,
    endNode,
    endNodeOffset,
    collapsed: s.isCollapsed
  }
}

// calculate absolute offset from relative pair
function absOffset(node, relOffset) {
  let prevNode = node.parentNode.closest('.w-segment')
  let offset = cleanText(prevNode.textContent.slice(0, relOffset)).length
  while (prevNode = prevNode.previousSibling) offset += cleanText(prevNode.textContent).length
  return offset
}

// calculate node and relative offset from absolute offset
function relOffset(offset) {
  let node = editarea.firstChild, len
  // discount previous nodes
  while (offset > (len = cleanText(node.textContent).length)) {
    offset -= len, node = node.nextSibling
  }
  // convert current node to relative offset
  let skip = 0
  for (let content = node.textContent, i = 0; i < offset; i++) {
    while (content[i+skip] >= '\u0300') skip++
  }

  return [node.firstChild, offset + skip]
}

// produce display time from frames
function timecode (block, ms=0) {
  let time = ((block / state?.total)) * state?.duration || 0
  return `${Math.floor(time/60).toFixed(0)}:${(Math.floor(time)%60).toFixed(0).padStart(2,0)}${ms?`.${(time%1).toFixed(ms).slice(2).padStart(ms)}`:''}`
}

// create play button position observer
const caretObserver = new IntersectionObserver(([item]) => {
    state.caretOffscreen = item.isIntersecting ? 0 :
    (item.intersectionRect.top <= item.rootBounds.top ? 1 :
      item.intersectionRect.bottom >= item.rootBounds.bottom ? -1 :
      0);
  }, {
    // root: document,
    threshold: 0.999,
    rootMargin: '0px'
  });
caretObserver.observe(caretLinePointer);


// create line width observer
const resizeObserver = new ResizeObserver((entries) => {
  // let width = entries[0].contentRect.width
  state.cols = measureLines()
})
resizeObserver.observe(editarea);

// inspired by https://www.bennadel.com/blog/4310-detecting-rendered-line-breaks-in-a-text-node-in-javascript.htm
// measure number of characters per line
function measureLines() {
  let range = new Range();
  let textNode = editarea.firstChild.firstChild
  if (!textNode?.textContent) return
  let str = textNode.textContent

  range.setStart(textNode, 0), range.setEnd(textNode, 1)
  let y = range.getClientRects()[0].y
  for (var i = 0, offset = 0 ; i < str.length; offset++) {
    let skip = 1; while (str[i+skip] >= '\u0300') skip++;
    range.setStart(textNode, 0), range.setEnd(textNode, i=i+skip);
    // 2nd line means we counted chars per line
    let rects = range.getClientRects()
    if (rects[rects.length - 1].y > y) return offset
  }

  return str.length
}

// update history, post operation & schedule update
// NOTE: we imply that ops are applied once and not multiple times
// so that ops can be combined as del=0-10..20-30 instead of del=0-10&del=20-30
async function pushOp (...ops) {
  let url = new URL(location)

  for (let op of ops) {
    let [name, ...args] = op
    if (args[0].file) url.searchParams.set(name, args[0].file.name)
    else if (url.searchParams.has(name)) url.searchParams.set(name, `${url.searchParams.get(name)}..${args.join('-')}` )
    else url.searchParams.append(name, args.join('-'))
  }
  state.loading = 'Processing'
  let params = await runOp(...ops)
  history.pushState(params, '', decodeURI(url)); // decodeURI needed to avoid escaping `:`
  state.loading = false

  if (editarea.textContent) console.assert(params.segments.join('') === editarea.textContent, 'Rendered waveform is different from UI')

  return renderAudio(params)
}

// post op message and wait for update response
function runOp (...ops) {
  return new Promise(resolve => {
    // worker manages history, so id indicates which point in history we commit changes to
    worker.postMessage({id: history.state?.id || 0, ops})
    worker.addEventListener('message', e => {
      resolve(e.data)
    }, {once: true})
  })
}

// return clean from modifiers text
function cleanText(str) {
  return str.replace(/\u0300|\u0301/g,'')
}

// update audio url & assert waveform
function renderAudio ({url, segments, duration, offsets}) {
  // assert waveform same as current content (must be!)
  state.total = segments.reduce((total, seg) => total += cleanText(seg).length, 0);
  state.duration = duration
  state.segments = segments
  if (!state.cols) state.cols = measureLines()
  state.updateTimecodes()
  // URL.revokeObjectURL(audio.src) // can be persisted from history, so we keep it
  audio.src = url
  audio.load() // safari needs that explicitly
  return new Promise((ok, nok) => {
    audio.addEventListener('error', nok)
    audio.addEventListener('loadedmetadata',()=>{
      audio.currentTime = duration * state.caretOffset / state.total || 0
    }, {once: true});
  })
}

// reconstruct audio from url
async function loadAudioFromURL (url = new URL(location)) {
  state.loading = 'Fetching'
  let ops = []
  for (const [op, arg] of url.searchParams) ops.push(...arg.split('..').map(arg =>
    // skip https:// as single argument
    [op, ...(op==='src' || op==='file' ? [arg] : arg.split('-'))]
  ))
  let params = await runOp(...ops)
  history.replaceState(params, '', decodeURI(url))
  renderAudio(params)
  state.loading = false
}

// if URL has no operations - put random sample
// if (location.search.length < 2) {
//   const sampleSources = [
//     // 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Vivaldi_-_Magnificat_01_Magnificat.oga',
//     'https://upload.wikimedia.org/wikipedia/commons/c/cf/Caja_de_m%C3%BAsica_%28PianoConcerto5_Beethoven%29.ogg',
//     // 'https://upload.wikimedia.org/wikipedia/commons/9/96/Carcassi_Op_60_No_1.ogg',
//   ]
//   let src = sampleSources[Math.floor(Math.random() * sampleSources.length)];
//   location.search = `?src=${src}`
// }
// history.replaceState({segments:[]}, '', '/')

// apply operations from URL, like src=path/to/file&clip=from-to&br=a..b..c
if (location.search.length) {
  loadAudioFromURL()
}


