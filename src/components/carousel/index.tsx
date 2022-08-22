import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { Banner, BannerList } from './type'
import { CarouselContainer } from './style'

function Carousel(props: SwiperProps & BannerList) {
  const { banners } = props

  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
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
