import Back from '@/assets/back.svg'
import BlackLogo from '@/assets/netease-logo-back.svg'
import Logo from '@/assets/wangyiyun.svg'
import Sina from '@/assets/sina.svg'
import Wechat from '@/assets/wechat.svg'
import WhiteLogo from '@/assets/netease-logo-white.svg'
import { PlayBarWrapper } from './style'
import { PlayStatus } from './types'
import { useState } from 'react'

function PlayBar() {
  const [playStatus, setPlayStatus] = useState(PlayStatus.PAUSE)

  // 播放
  function play() {
    console.log('🚀 ~ file: index.tsx ~ line 18 ~ play ~ play', play)
    setPlayStatus(PlayStatus.PAUSE)
  }
  // 暂停
  function pause() {
    console.log('🚀 ~ file: index.tsx ~ line 21 ~ pause ~ pause', pause)
    setPlayStatus(PlayStatus.PLAY)
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
        {playStatus === PlayStatus.PAUSE ? (
          <i className="ri-play-circle-line" onClick={play}></i>
        ) : (
          <i className="ri-pause-circle-line" onClick={pause}></i>
        )}
      </div>
      <i className="ri-play-list-2-fill"></i>
    </PlayBarWrapper>
  )
}

export default PlayBar
