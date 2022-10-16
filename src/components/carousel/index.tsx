import { Autoplay, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import React, { FC } from 'react'
import './style.module.css'

const Carousel = ({ banners }: any) => {
  return (
    <div relative px-2 py-3>
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
              block
              w-full
              h-full
              object-cover
              rounded-10
            />
            <span
              text-white
              text-sm
              p-1
              absolute
              right-0
              bottom-0
              rounded-1
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

export default React.memo(Carousel)
