import { getPlaylistDetail } from '@/api/playlist'
import TopBar from '@/layout/components/top-bar'
import { getCount } from '@/utils'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Header, List, ListItem, Wrapper } from './style'

function Playlist() {
  const [playlistId, setPlaylistId] = useState('')
  const param = useParams()
  const [showStatus, setShowStatus] = useState(true)
  const navigate = useNavigate()
  const [playList, setPlayList] = useState({})

  useEffect(() => {
    setPlaylistId(param.id ?? '')
    getPlaylistDetail({
      id: playlistId
    }).then((res: any) => {
      setPlayList(res.playlist)
    })
  }, [playlistId])

  const handleClick = () => {
    setShowStatus(false)
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
        ></TopBar>

        <Header>
          <div className="cover">
            <img src={playList.coverImgUrl} alt="" />
            <span>
              <i className="ri-play-fill"></i>
              {getCount(playList.playCount)}
            </span>
          </div>
          <div className="info">
            <h2 className="title">{playList.name}</h2>
            <div className="user">
              <div className="avatar">
                <img src={playList.creator.avatarUrl} alt="" />
              </div>
              <span className="nickname">{playList.creator.nickname}</span>
            </div>
            <p className="desc">{playList.description}</p>
          </div>
          <div className="comment">
            <span>
              <i className="ri-heart-add-fill"></i>
              {getCount(playList.subscribedCount)}
            </span>
            <span>
              <i className="ri-message-3-line"></i>
              {getCount(playList.commentCount)}
            </span>
            <span>
              <i className="ri-share-circle-line"></i>
              {getCount(playList.shareCount)}
            </span>
          </div>
        </Header>
        <List>
          <ListItem></ListItem>
        </List>
      </Wrapper>
    </CSSTransition>
  )
}

export default React.memo(Playlist)
