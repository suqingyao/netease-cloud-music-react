import Logo from '@/assets/default_album.jpg'
import { getCount } from '@/utils'
import { FC } from 'react'
import LazyLoad from 'react-lazyload'
interface AlbumProp {
  img: string
  title: string
  count: number
  onClick: () => void
}

const Album = ({ img, title, count }: AlbumProp) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <LazyLoad placeholder={<img src={Logo} className="w-full h-full" />}>
        <img
          src={img + '?param=300*300'}
          alt={title}
          className="bg-white object-cover"
        />
      </LazyLoad>
      <span className="text-white text-sm line-clamp-2">{title}</span>
      <span className="flex absolute top-1 right-1 text-sm gap-1">
        <div className="i-ri-headphone-fill"></div>
        {getCount(count)}
      </span>
    </div>
  )
}

export default Album
