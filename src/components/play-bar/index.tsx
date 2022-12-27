import usePlayerStore from '@/store'
import { isEmpty } from '@/utils/is'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useAudio, useUpdateEffect } from 'react-use'

export enum PlayMode {
  RANDOM,
  LOOP,
  SEQUENTIAL,
  BECKONING
}

const PlayBar = () => {
  const playing = usePlayerStore(state => state.playing)
  const toggle = usePlayerStore(state => state.toggle)
  const currentPlay = usePlayerStore(state => state.currentPlay)
  const [audio, state, controls, ref] = useAudio({
    src: currentPlay.src,
    autoPlay: true
  })

  useUpdateEffect(() => {
    if (playing) {
      controls.play()
    } else {
      controls.pause()
    }
  }, [playing])

  return (
    <div className="flex justify-between items-center w-full px-2 gap-1 rounded-tl-1 rounded-tr-1 h-10 bg-red-5 text-3xl">
      <div className="w-10">
        {currentPlay?.cover ? (
          <img
            src={currentPlay.cover}
            alt="cover"
            className={classNames(
              'w-full h-full object-cover rounded-full',
              playing ? 'animate-spin' : ''
            )}
          />
        ) : (
          <div className="i-ri-album-fill" />
        )}
      </div>
      {!isEmpty(currentPlay) ? null : (
        <div className="flex items-center gap-1 w-full text-ellipsis text-white">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-white text-sm">
            {currentPlay.name || null}
          </span>
          {currentPlay.name ? <span className="text-sm">-</span> : null}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-white text-sm">
            {currentPlay.author || null}
          </span>
        </div>
      )}

      <div onClick={toggle}>
        {playing ? (
          <div className="i-ri:pause-circle-line" />
        ) : (
          <div className="i-ri:play-circle-line" />
        )}
      </div>
      <div className="i-ri-play-list-2-fill" />
      {audio}
    </div>
  )
}

export default React.memo(PlayBar)
