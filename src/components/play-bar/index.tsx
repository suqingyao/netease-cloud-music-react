import Back from '@/assets/back.svg'
import { PlayBarWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { changePlayStatus } from '@/store/slice/player'

interface PlayBarProps {
  bottom: string
}

function PlayBar(props: PlayBarProps) {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.player)

  const changeStatus = () => {
    dispatch(changePlayStatus())
  }

  return (
    <PlayBarWrapper bottom={props.bottom}>
      <div className="cover">
        <i className="ri-album-fill"></i>
        <img src="" alt="" />
      </div>
      <div className="song-info">
        <span className="song-info__title">千年泪</span>
        <span>-</span>
        <span className="song-info__singer">TANK</span>
      </div>
      <div className="action">
        <i
          className={`ri-${selector.playStatus ? 'pause' : 'play'}-circle-line`}
          onClick={changeStatus}
        ></i>
      </div>
      <i className="ri-play-list-2-fill"></i>
    </PlayBarWrapper>
  )
}

export default PlayBar
