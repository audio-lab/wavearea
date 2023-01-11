// dict of operations on waveform/audio supported by waveplay
// acts on list of buffers

import { decodeAudio, fetchAudio, sliceAudio, deleteAudio, b2o, SAMPLE_RATE, BLOCK_SIZE } from './audio-util.js'

// load file from url
export const src =  async (buffers, url) => {
  // try loading persisted audio, if any
  let arrayBuffer = await fetchAudio(url);

  // decode data from src
  let buffer = await decodeAudio(arrayBuffer);

  return [buffer]
}

// normalize audio
export const norm = (buffers) => {
  // remove static - calculate avg and subtract
  let sum = 0, total = 0
  for (let buffer of buffers) {
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      let channelData = buffer.getChannelData(c);
      total += channelData.length
      for (let i = 0; i < channelData.length; i++)
        sum += channelData[i]
    }
  }
  let avg = sum / total
  for (let buffer of buffers) {
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      let channelData = buffer.getChannelData(c);
      total += channelData.length
      for (let i = 0; i < channelData.length; i++)
        channelData[i] -= avg
    }
  }

  // amplify max to meet 1
  let max = 0
  for (let buffer of buffers) {
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      let channelData = buffer.getChannelData(c);
      for (let i = 0; i < channelData.length; i++)
        max = Math.max(Math.abs(channelData[i]), max)
    }
  }

  let amp = Math.max(1 / max, 1);

  for (let buffer of buffers) {
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      let channelData = buffer.getChannelData(c);
      for (let i = 0; i < channelData.length; i++)
        channelData[i] = Math.min(1, Math.max(-1, channelData[i] * amp));
    }
  }
  return buffers
}

// insert breaks / split
export const br = (buffers, ...offsets) => {
  for (let offset of offsets) {
    let [bufIdx, bufOffset] = bufferOffset(buffers, b2o(offset));
    let buf = buffers[bufIdx]

    if (bufOffset > 0 && bufOffset < buf.length) {
      let left = sliceAudio(buf, 0, bufOffset)
      let right = sliceAudio(buf, bufOffset)

      buffers.splice(bufIdx, 1,
        left, right
      )
    }
  }

  return buffers
}

export function del (buffers, offset, count) {
  if (!count) return buffers

  let start = bufferOffset(buffers, b2o(offset))
  let end = bufferOffset(buffers, b2o(offset + count))

  // correct tail: pointing to head of the next buffer unnecessarily joins buffers in result
  // but we may want to preserve segmentation
  if (!end[1] && end[0]) end[0] -= 1, end[1] = buffers[end[0]].length

  // FIXME: account for conditions:
  // end buffer === start buffer
  // start buffer is 0
  // start buffer is full length
  // end buffer is 0
  // end buffer is full length

  let startBuffer = buffers[start[0]]
  let endBuffer = buffers[end[0]]

  let outBuffer = new AudioBuffer({
    length: start[1] + (endBuffer.length - end[1]),
    sampleRate: SAMPLE_RATE,
    numberOfChannels: startBuffer.numberOfChannels
  })

  for (let c = 0; c < startBuffer.numberOfChannels; c++) {
    let i = 0,
      outData = outBuffer.getChannelData(c),
      startData = startBuffer.getChannelData(c),
      endData = endBuffer.getChannelData(c)

    // transfer remaining head samples
    for (i = 0; i < start[1]; i++) outData[i] = startData[i]
    // transfer remaining tail samples
    for (let j = end[1]; j < endData.length; j++) outData[i] = endData[j], i++
  }

  buffers.splice(start[0], end[0]-start[0]+1, outBuffer)

  return buffers
}

export function mute (len, channels=2) {
  let data = Array.from({length:channels}, ()=>new Float32Array(len))
  return create(data)
}

// clip to indicated fragment
export const clip = (buffers, from, to) => {

}


// either add external URL or silence (count)
export const add = (buffers, offset, src) => {

}

// copy offset/cout to another position (rewrites data underneath)
export const cp = (buffers, offset, count, to) => {

}

export function insert (buffer, start, newBuffer) {
  var data = [], arr;
  for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
    data.push(arr = new Float32Array(buffer.length + newBuffer.length))
    var channelData = buffer.getChannelData(channel)
    arr.set(channelData.subarray(0, start), 0);
    arr.set(newBuffer.getChannelData(channel), start)
    arr.set(channelData.subarray(start), start + newBuffer.length);
  }

  return create(data)
}

// return [bufIdx, bufOffset] from absolute offset
const bufferOffset = (buffers, offset) => {
  if (offset === 0) return [ 0, 0 ]
  var start = 0, end
  for (let i = 0; i < buffers.length; i++) {
    end = start + buffers[i].length
    if (offset < end) return [ i, offset - start ]
    start = end
  }

  // that's special case of last buffer: we return index pointing at non-existing item
  // but that's useful for obtaining end of the range
  // eg. getSelection() API also returns offset index _after_ last item.
  return [buffers.length - 1, buffers[buffers.length - 1].length]
}