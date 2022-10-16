import { useAppDispatch, useAppSelector } from '@/store'
import { changePlayStatus } from '@/store/slice/player'
import React, { FC } from 'react'

interface PlayBarProps {
  bottom: string
}

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

const PlayBar = ({ bottom }: PlayBarProps) => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.player)

  const changeStatus = () => {
    dispatch(changePlayStatus())
  }

  return (
    <div
      flex
      justify-between
      items-center
      gap-1
      p-5
      rounded-1
      fixed
      left-0
      right-0
      h-50px
      bg-gray-6
      style={{ bottom }}
    >
      <div relative>
        <i i-ri-album-fill></i>
        <img absolute w-full h-full object-cover src="" alt="" />
      </div>
      <div flex items-center gap-1 w-full text-ellipsis text-white>
        <span
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-white
          text-sm
        >
          千年泪
        </span>
        <span>-</span>
        <span
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-white
          text-sm
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
