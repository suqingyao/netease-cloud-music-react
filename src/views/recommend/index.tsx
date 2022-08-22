import Carousel from '@/components/carousel'
import { Banner, BannerList } from '@/components/carousel/type'
import { getBannerList } from '@/service'
import { isSuccessResponse } from '@/utils/is'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { RecommendContainer } from './style'

function Recommend() {
  const [bannerList, setBannerList] = useState<Array<Banner>>([])

  useEffect(() => {
    getBannerList().then(res => {
      const data = res.parseBody as BannerList
      if (!isSuccessResponse(data)) {
        console.log('error')
      }

      const banners = data.banners
      setBannerList(banners)
    })
  }, [])

  return (
    <RecommendContainer>
      <Carousel banners={bannerList}></Carousel>
    </RecommendContainer>
  )
}

export default Recommend
