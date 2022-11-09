import Carousel from '@/components/carousel'
import Scroll from '@/components/scroll'
import { useRecommend } from '@/hooks'
import React, { useState } from 'react'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import Logo from '@/assets/default_album.jpg'
import { getCount } from '@/utils'
import { Loading } from '@/components/loading'

const Recommend = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useRecommend()

  const goPlaylist = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`, { replace: false })
  }

  if (isLoading) {
    return <Loading />
  }

  const [recommendData, bannersData] = data

  return (
    <Scroll
      direction="vertical"
      wrapHeight="calc(100vh - 7.5rem)"
      onScroll={forceCheck}
    >
      <Carousel banners={bannersData?.banners} />
      <div className="px-2">
        <div className="text-lg">推荐歌单</div>
        <div className="grid grid-cols-3 gap-10px">
          {recommendData?.result?.map((item: any) => (
            <div
              key={item.id}
              onClick={() => goPlaylist(item.id)}
              className="flex flex-col relative"
            >
              <LazyLoad
                placeholder={
                  <img src={Logo} className="w-full h-full rounded-2" />
                }
              >
                <img
                  src={item.picUrl + '?param=300*300'}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2"
                />
              </LazyLoad>
              <span className="text-white text-xs line-clamp-2">
                {item.name}
              </span>
              <span className="flex items-center absolute top-1 right-1 text-xs gap-1">
                <div className="i-ri-headphone-fill"></div>
                {getCount(item.playCount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Scroll>
  )
}

export default React.memo(Recommend)
