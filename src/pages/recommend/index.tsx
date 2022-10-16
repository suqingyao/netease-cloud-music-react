import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Loading from '@/components/loading'
import Scroll from '@/components/scroll'
import { useRecommend } from '@/hooks'
import React, { useState } from 'react'
import { forceCheck } from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import Album from './components/Album'
import { List, RecommendWrapper } from './style'

function Recommend() {
  const [loadingVisible, setLoadingVisible] = useState(false)
  const navigate = useNavigate()
  const { banners, recommendList } = useRecommend()

  const goPlaylist = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`, { replace: false })
  }

  return (
    <RecommendWrapper>
      <Scroll
        direction="vertical"
        wrapHeight="calc(100vh - 150px)"
        onScroll={forceCheck}
      >
        <Carousel banners={banners} />
        <Card title="推荐歌单">
          <List>
            {recommendList.map((item: any) => (
              <Album
                key={item.id}
                img={item.picUrl}
                title={item.name}
                count={item.playCount}
                onClick={() => goPlaylist(item.id)}
              />
            ))}
          </List>
        </Card>
        <Loading visible={loadingVisible} />
      </Scroll>
    </RecommendWrapper>
  )
}

export default React.memo(Recommend)
