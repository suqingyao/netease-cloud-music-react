import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Banner, BannerList } from './type'
import { CarouselContainer } from './style'
import { useEffect, useState } from 'react'

function Carousel(props: SwiperProps & BannerList) {
  const { banners } = props

  const [bannerList, setBannerList] = useState<Array<Banner>>([])

  useEffect(() => {
    setBannerList(banners)
  }, [banners])

  return (
    <CarouselContainer>
      <Swiper {...props}>
        {banners?.map(banner => (
          <SwiperSlide key={banner.targetId}>
            <img
              src={banner.imageUrl}
              alt={banner.typeTitle}
              className="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
