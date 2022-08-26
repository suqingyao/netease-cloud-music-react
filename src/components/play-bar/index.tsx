/*
 * @Author: cully fung
 * @Date: 2022-08-26 07:18:16
 * @LastEditTime: 2022-08-26 16:18:37
 * @LastEditors: cully fung
 * @Description: 播放栏
 */
import { PlayBarWrapper } from './style'
import Back from '@/assets/back.svg'
import BlackLogo from '@/assets/netease-logo-back.svg'
import WhiteLogo from '@/assets/netease-logo-white.svg'
import Sina from '@/assets/sina.svg'
import Logo from '@/assets/wangyiyun.svg'
import Wechat from '@/assets/wechat.svg'

function PlayBar() {
  return (
    <PlayBarWrapper>
      <i className="bi bi-play-circle"></i>
      <div className="phonograph">
        <img src="" alt="" />
      </div>
    </PlayBarWrapper>
  )
}

export default PlayBar
