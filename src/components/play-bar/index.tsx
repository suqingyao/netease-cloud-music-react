import { useAppDispatch, useAppSelector } from '@/store'
import { changePlayStatus } from '@/store/slice/player'
import React from 'react'

export enum PlayMode {
  RANDOM,
  LOOP,
  SEQUENTIAL,
  BECKONING
}

export enum PlayStatus {
  PLAY,
  PAUSE
}

const PlayBar = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.player)

  const changeStatus = () => {
    dispatch(changePlayStatus())
  }

  return (
    <div
      className="
      flex
      justify-between
      items-center
      w-full
      px-2
      gap-1
      rounded-tl-1
      rounded-tr-1
      fixed
      bottom-10
      h-10
      bg-red
      "
    >
      <div className="relative">
        <i className="i-ri-album-fill"></i>
        <img src="" alt="" className="absolute w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-1 w-full text-ellipsis text-white">
        <span
          className="
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-white
          text-sm"
        >
          千年泪
        </span>
        <span>-</span>
        <span
          className="
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-white
          text-sm"
        >
          TANK
        </span>
      </div>
      <div className="action">
        <i
          className={`i-ri-${
            selector.playStatus ? 'pause' : 'play'
          }-circle-line`}
          onClick={changeStatus}
        ></i>
      </div>
      <i className="i-ri-play-list-2-fill"></i>
    </div>
  )
}

export default React.memo(PlayBar)
