import { Autoplay, Pagination, Scrollbar } from 'swiper'
import { Banner, BannerList } from './type'
import { CarouselContainer } from './style'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

function Carousel(props: SwiperProps & BannerList) {
  const { banners } = props

  return (
    <CarouselContainer>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {banners?.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.imageUrl}
              alt={banner.typeTitle}
              className="cover"
            />
            <span
              className="tag"
              style={{ backgroundColor: banner.titleColor }}
            >
              {banner.typeTitle}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
