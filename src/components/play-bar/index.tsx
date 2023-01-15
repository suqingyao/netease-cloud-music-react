import { useCurrentPlay, usePlayerActions, usePlaying } from '@/store'
import { isEmpty } from '@/utils/is'
import classNames from 'classnames'
import { memo, useRef } from 'react'
import { useAudio, useMount, useUpdateEffect } from 'react-use'
import {
  PauseCircleIcon,
  PlayCircleIcon,
  Bars4Icon
} from '@heroicons/react/24/outline'
import AlbumSVG from '@/assets/album.svg'

export enum PlayMode {
  RANDOM,
  LOOP,
  SEQUENTIAL,
  BECKONING
}

const PlayBar = () => {
  const playing = usePlaying()
  const { setPlaying } = usePlayerActions()
  const currentPlay = useCurrentPlay()
  const [audio, state, controls, ref] = useAudio({
    src: currentPlay.src,
    autoPlay: true
  })

  useUpdateEffect(() => {
    setPlaying(state.playing)
  }, [state.playing])

  return (
    <div className="flex justify-between items-center px-1 gap-1 rounded-tl-sm rounded-tr-sm h-10 bg-red-500 text-3xl">
      <div className="w-8 h-8 flex justify-center items-center">
        {currentPlay?.cover ? (
          <img
            src={currentPlay.cover}
            alt="cover"
            className={classNames(
              'object-cover rounded-full',
              playing ? 'animate-spin-slow' : ''
            )}
          />
        ) : (
          <img
            src={AlbumSVG}
            alt="album"
            className="w-full h-full rounded-full"
          />
        )}
      </div>
      {!isEmpty(currentPlay) ? null : (
        <div className="flex-1 flex items-center gap-1 text-white line-clamp-1 text-sm">
          <span>{currentPlay.name || null}</span>
          {currentPlay.name ? <span className="text-sm">-</span> : null}
          <span>{currentPlay.author || null}</span>
        </div>
      )}

      <div className="justify-end flex items-center text-white w-1/4">
        <div className="w-6 h-6">
          {playing ? (
            <PauseCircleIcon onClick={controls.pause} />
          ) : (
            <PlayCircleIcon onClick={controls.play} />
          )}
        </div>
        <Bars4Icon className="w-6 h-6" />
      </div>
      <audio ref={ref} className="hidden" />
      {audio}
    </div>
  )
}

export default memo(PlayBar)
