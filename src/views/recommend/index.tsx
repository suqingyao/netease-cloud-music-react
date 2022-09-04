import Album from './components/Album'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import Loading from '@/components/loading'
import React from 'react'
import Scroll from '@/components/scroll'
import { Banner } from '@/components/carousel/type'
import { forceCheck } from 'react-lazyload'
import { getBannerList } from '@/api'
import { getPersonalized } from '@/api/playlist'
import { isSuccessResponse } from '@/utils/is'
import { List, RecommendWrapper } from './style'
import { PlayList } from './types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Recommend() {
  const [bannerList, setBannerList] = useState<Array<Banner>>([])
  const [playlists, setPlaylists] = useState<Array<PlayList>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getBannerList({
      type: 2
    })
      .then((res: any) => {
        if (!isSuccessResponse(res)) {
          return
        }
        setBannerList(res.banners)
      })
      .catch(err => {
        console.log(err)
      })

    getPersonalized()
      .then((res: any) => {
        if (!isSuccessResponse(res)) {
          return
        }
        setPlaylists(res.result)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // 监听数据是否加载完成，显示loading
  useEffect(() => {
    if (!playlists.length) {
      setLoadingVisible(true)
    } else {
      setLoadingVisible(false)
    }
  }, [playlists])

  const goPlaylist = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`, { replace: false })
  }

  return (
    <RecommendWrapper>
      <Scroll direction="vertical" wrapHeight="calc(100vh - 150px)">
        <Carousel banners={bannerList} />
        <Card title="推荐歌单">
          <List>
            {playlists.map(item => (
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
