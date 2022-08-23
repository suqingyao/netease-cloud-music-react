import Card from '@/components/card'
import Carousel from '@/components/carousel'
import { Banner, BannerList } from '@/components/carousel/type'
import { getBannerList } from '@/service'
import { isSuccessResponse } from '@/utils/is'
import { useEffect, useState } from 'react'
import { RecommendContainer } from './style'
import { getTopPlaylist } from '@/service/playlist'
import Album from '@/components/album'

function Recommend() {
  const [bannerList, setBannerList] = useState<Array<Banner>>([])
  const [playlists, setPlaylists] = useState<Array<any>>([])

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
            <Album img={item!.coverImgUrl} title={item!.name} />
          ))}
        </div>
      </Card>
    </RecommendContainer>
  )
}

export default Recommend
