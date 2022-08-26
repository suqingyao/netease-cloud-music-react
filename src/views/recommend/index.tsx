/*
 * @Author: cully fung
 * @Date: 2022-08-21 10:53:26
 * @LastEditTime: 2022-08-26 16:26:19
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

function Recommend() {
  const [bannerList, setBannerList] = useState<Array<Banner>>([])
  const [playlists, setPlaylists] = useState<Array<PlayList>>([])

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

  return (
    <RecommendContainer>
      <Carousel banners={bannerList} />
      <Card title="推荐歌单">
        <div className="wrapper">
          {playlists.map(item => (
            <Album key={item.id} img={item.coverImgUrl} title={item.name} />
          ))}
        </div>
      </Card>
    </RecommendContainer>
  )
}

export default Recommend
