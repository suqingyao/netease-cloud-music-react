import { Autoplay, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.scss'
import { memo } from 'react'

const Carousel = ({ banners }: any) => {
  return (
    <div className="relative p-2">
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {banners?.map((banner: any, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={banner.pic}
              alt={banner.typeTitle}
              className="w-full h-full object-cover rounded-xl"
            />
            <span
              className="text-white text-sm p-1 absolute right-0 bottom-0 rounded-br-xl rounded-tl-xl"
              style={{ backgroundColor: banner.titleColor }}
            >
              {banner.typeTitle}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default memo(Carousel)
