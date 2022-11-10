import PlayBar from '@/components/play-bar'
import React from 'react'
import Scroll from '@/components/scroll'
import TopBar from '@/layout/components/top-bar'
import { CSSTransition } from 'react-transition-group'
import { getCount } from '@/utils'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Playlist } from './types'
import { usePlayListDetail } from '@/hooks'
import Loading from '@/components/loading'

function PlayList() {
  const navigate = useNavigate()
  const param = useParams()
  const [showStatus, setShowStatus] = useState(true)

  const { data: playList, isLoading } = usePlayListDetail({
    id: param.id ?? ''
  })

  const handleClick = () => {
    setShowStatus(false)
  }

  const handleScroll = () => {
    console.log('🚀 ~ file: index.tsx ~ line 49 ~ handleScroll')
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      unmountOnExit
      onExited={() => {
        navigate(-1)
      }}
    >
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10 h-screen">
        <TopBar
          leftSlot={
            <i className="i-ri-arrow-left-s-line" onClick={handleClick} />
          }
          centerSlot={<span className="text-lg">歌单</span>}
        />
        <div className="w-full h-full">
          <Scroll
            direction={'vertical'}
            wrapHeight="calc(100vh - 100px)"
            onScroll={handleScroll}
          >
            <div style={{ backgroundImage: playList.coverImgUrl }}>
              <div className="filter"></div>
              <div className="cover">
                <img src={playList?.coverImgUrl} alt="cover" />
                <span>
                  <i className="ri-play-fill"></i>
                  {getCount(playList?.playCount)}
                </span>
              </div>
              <div className="info">
                <h2 className="title">{playList?.name}</h2>
                <div className="user">
                  <div className="avatar">
                    <img src={playList?.creator?.avatarUrl} alt="avatar" />
                  </div>
                  <span className="nickname">
                    {playList?.creator?.nickname}
                  </span>
                </div>
                <p className="desc">{playList?.description}</p>
              </div>
              <div className="comment">
                <span>
                  <i className="ri-heart-add-fill"></i>
                  {getCount(playList?.subscribedCount)}
                </span>
                <span>
                  <i className="ri-message-3-line"></i>
                  {getCount(playList?.commentCount)}
                </span>
                <span>
                  <i className="ri-share-circle-line"></i>
                  {getCount(playList?.shareCount)}
                </span>
              </div>
            </div>
            <div>
              {playList.tracks &&
                playList.tracks.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <span className="no">{index + 1}</span>
                      <div className="song-info">
                        <span className="name">{item.name}</span>
                        <span className="creator">
                          {item?.al?.name}-
                          {item?.ar?.map(v => v.name)?.join('/')}
                        </span>
                      </div>
                    </div>
                  )
                })}
            </div>
          </Scroll>
        </div>
        <div className="fixed bottom-0 w-full">
          <PlayBar />
        </div>
      </div>
    </CSSTransition>
  )
}

export default React.memo(PlayList)
