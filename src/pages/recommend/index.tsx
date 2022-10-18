import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Scroll from '@/components/scroll'
import { useRecommend } from '@/hooks'
import React from 'react'
import { forceCheck } from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import Album from './components/Album'

const Recommend = () => {
  const navigate = useNavigate()
  const { banners, recommendList } = useRecommend()

  const goPlaylist = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`, { replace: false })
  }

  return (
    <Scroll
      direction="vertical"
      wrapHeight="calc(100vh - 150px)"
      onScroll={forceCheck}
    >
      <Carousel banners={banners} />
      <Card title="推荐歌单">
        <div className="grid grid-cols-3 gap-10px">
          {recommendList.map((item: any) => (
            <Album
              key={item.id}
              img={item.picUrl}
              title={item.name}
              count={item.playCount}
              onClick={() => goPlaylist(item.id)}
            />
          ))}
        </div>
      </Card>
    </Scroll>
  )
}

export default React.memo(Recommend)
