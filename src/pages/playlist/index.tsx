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
            <div
              className="i-ri-arrow-left-s-line text-2xl"
              onClick={handleClick}
            />
          }
          centerSlot={<span className="text-lg">歌单</span>}
        />
        <div className="w-full h-full px-2">
          <Scroll
            direction={'vertical'}
            wrapHeight="calc(100vh - 5rem)"
            onScroll={handleScroll}
          >
            <div className="" style={{ backgroundImage: playList.coverImgUrl }}>
              <div className="flex gap-2 py-2">
                <div className="relative w-30 h-30">
                  <img
                    src={playList?.coverImgUrl}
                    alt="cover"
                    className="w-full h-full object-cover rounded-2"
                  />
                  <div className="flex items-center text-gray-9 text-xs absolute right-1 top-1">
                    <div className="i-ri-play-fill" />
                    {getCount(playList?.playCount)}
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-gray-1">{playList?.name}</span>
                  <div className="flex items-center gap-1 text-gray-1 text-sm">
                    <div className="w-10 h-10">
                      <img
                        src={playList?.creator?.avatarUrl}
                        alt="avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <span className="">{playList?.creator?.nickname}</span>
                  </div>
                  <p
                    className="line-clamp-2 text-xs text-gray-2"
                    title={playList.description}
                  >
                    {playList?.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-neutral-8 w-50 rounded-full text-xs text-white px-2 py-2 gap-2 mx-auto my-1">
                <div className="flex items-center">
                  <div className="i-ri-heart-add-fill text-xl" />
                  {getCount(playList?.subscribedCount)}
                </div>
                <div className="flex items-center">
                  <div className="i-ri-message-3-line text-xl" />
                  {getCount(playList?.commentCount)}
                </div>
                <div className="flex items-center">
                  <div className="i-ri-share-circle-line text-xl" />
                  {getCount(playList?.shareCount)}
                </div>
              </div>
            </div>
            <div>
              {playList.tracks &&
                playList.tracks.map((item, index) => {
                  return (
                    <div key={item.id} className="flex items-center">
                      <span className="px-3 text-gray-3 w-8 h-8 flex justify-center items-center">
                        {index + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-white text-sm">{item.name}</span>
                        <span className="text-gray-2 text-xs line-clamp-1">
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
