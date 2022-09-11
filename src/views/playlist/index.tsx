import PlayBar from '@/components/play-bar'
import React, { useMemo, useRef } from 'react'
import Scroll from '@/components/scroll'
import TopBar from '@/layout/components/top-bar'
import { CSSTransition } from 'react-transition-group'
import { getCount } from '@/utils'
import { getPlaylistDetail, getSongDetail } from '@/api/playlist'
import { Header, List, ListItem, Wrapper } from './style'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Playlist() {
  const navigate = useNavigate()
  const param = useParams()
  const [showStatus, setShowStatus] = useState(true)
  const [playList, setPlayList] = useState({ trackIds: [] })

  useEffect(() => {
    getPlaylistDetail({
      id: param.id ?? ''
    }).then((res: any) => {
      setPlayList(res.playlist)
    })
  }, [])

  const handleClick = () => {
    setShowStatus(false)
  }

  const handleScroll = () => {
    console.log('🚀 ~ file: index.tsx ~ line 49 ~ handleScroll')
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
      <Wrapper>
        <TopBar
          leftSlot={
            <i className="ri-arrow-left-s-line" onClick={handleClick}></i>
          }
          centerSlot={<h1>歌单</h1>}
        />
        <Scroll
          direction={'vertical'}
          wrapHeight="calc(100vh - 100px)"
          onScroll={handleScroll}
        >
          <Header img={playList.coverImgUrl}>
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
                <span className="nickname">{playList?.creator?.nickname}</span>
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
          </Header>
          <List>
            {playList.tracks &&
              playList.tracks.map((item, index) => {
                return (
                  <ListItem key={item.id}>
                    <span className="no">{index + 1}</span>
                    <div className="song-info">
                      <span className="name">{item.name}</span>
                      <span className="creator">
                        {item?.al?.name}-{item?.ar?.map(v => v.name)?.join('/')}
                      </span>
                    </div>
                  </ListItem>
                )
              })}
          </List>
        </Scroll>
        <PlayBar bottom="0" />
      </Wrapper>
    </CSSTransition>
  )
}

export default React.memo(Playlist)
