/*
 * @Author: cully fung
 * @Date: 2022-08-21 10:53:26
 * @LastEditTime: 2022-08-27 11:25:36
 * @LastEditors: cully fung
 * @Description:
 */

import Album from '@/components/album'
import Card from '@/components/card'
import Carousel from '@/components/carousel'
import { Banner, BannerList } from '@/components/carousel/type'
import { getBannerList } from '@/service'
import { getTopPlaylist } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import { PlayList } from './types'
import { RecommendContainer } from './style'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '@/components/loading'

function Recommend() {
  const [bannerList, setBannerList] = useState<Array<Banner>>([])
  const [playlists, setPlaylists] = useState<Array<PlayList>>([])
  const [loadingVisible, setLoadingVisible] = useState(false)

  useEffect(() => {
    getBannerList().then(res => {
      const data = res.parseBody as BannerList
      if (!isSuccessResponse(data)) {
        console.log('error')
      }
      setBannerList(data.banners)
    })

    getTopPlaylist()
      .then(res => {
        const data = res.parseBody as any
        if (!isSuccessResponse(data)) {
          console.log('error')
        }
        setPlaylists(data.playlists)
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
  }, [playlists, bannerList])

  const goPlaylist = (playlistId: string) => {
    console.log(111)

    const navigate = useNavigate()
    console.log(
      '🚀 ~ file: index.tsx ~ line 50 ~ goPlaylist ~ navigate',
      navigate
    )
    navigate(`/playlist/${playlistId}`, { replace: false })
  }

  return (
    <RecommendContainer>
      <Carousel banners={bannerList} />
      <Card title="推荐歌单">
        <div className="wrapper">
          {playlists.map(item => (
            <Album
              key={item.id}
              img={item.coverImgUrl}
              title={item.name}
              onClick={() => goPlaylist(item.id)}
            />
          ))}
        </div>
      </Card>
      <Loading visible={loadingVisible} />
    </RecommendContainer>
  )
}

export default Recommend
