import Back from '@/assets/back.svg'
import BlackLogo from '@/assets/netease-logo-back.svg'
import Logo from '@/assets/wangyiyun.svg'
import Sina from '@/assets/sina.svg'
import Wechat from '@/assets/wechat.svg'
import WhiteLogo from '@/assets/netease-logo-white.svg'
import { PlayBarWrapper } from './style'
import { PlayStatus } from './types'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { changePlayStatus } from '@/store/slice/player'

function PlayBar() {
  const dispatch = useAppDispatch()
  console.log('🚀 ~ file: index.tsx ~ line 15 ~ PlayBar ~ dispatch', dispatch)
  const selector = useAppSelector(state => state.player)
  console.log('🚀 ~ file: index.tsx ~ line 17 ~ PlayBar ~ selector', selector)

  const changeStatus = () => {
    dispatch(changePlayStatus())
  }

  return (
    <PlayBarWrapper>
      <div className="cover">
        <i className="ri-album-fill"></i>
        <img src="" alt="" />
      </div>
      <div className="song-info">
        <span className="song-info__title">千年泪</span>-
        <span className="song-info__singer">TANK</span>
      </div>
      <div className="action">
        {!selector.playStatus ? (
          <i className="ri-play-circle-line" onClick={changeStatus}></i>
        ) : (
          <i className="ri-pause-circle-line" onClick={changeStatus}></i>
        )}
      </div>
      <i className="ri-play-list-2-fill"></i>
    </PlayBarWrapper>
  )
}

export default PlayBar
