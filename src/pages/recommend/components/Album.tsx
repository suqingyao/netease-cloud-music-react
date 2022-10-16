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
    <div flex flex-col gap-2 relative>
      <LazyLoad placeholder={<img width="100%" height="100%" src={Logo} />}>
        <img src={img + '?param=300*300'} alt={title} bg-white object-cover />
      </LazyLoad>
      <span text-white text-sm line-clamp-2>
        {title}
      </span>
      <span flex absolute t-1 r-1 text-sm gap-1>
        <div className="i-ri-headphone-fill"></div>
        {getCount(count)}
      </span>
    </div>
  )
}

export default Album
