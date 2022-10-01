import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Loading from '@/components/loading'
import Scroll from '@/components/scroll'
import { useMount } from '@/hooks'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  getBannerListData,
  getRecommendListData
} from '@/store/slice/recommend'
import React, { useState } from 'react'
import { forceCheck } from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import Album from './components/Album'
import { List, RecommendWrapper } from './style'

function Recommend() {
  const [loadingVisible, setLoadingVisible] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.recommend)

  useMount(() => {
    dispatch(getBannerListData())
    dispatch(getRecommendListData())
  })

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
        <Carousel banners={selector.banners} />
        <Card title="推荐歌单">
          <List>
            {selector.recommendList.map((item: any) => (
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
