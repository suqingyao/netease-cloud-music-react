import { getCount } from '@/utils'
import React, { FC, PropsWithChildren } from 'react'
import { AlbumContainer } from './style'
import LazyLoad from 'react-lazyload'

interface AlbumProp extends React.HTMLAttributes<HTMLDivElement> {
  img: string
  title: string
  count: number
  children?: React.ReactNode
}

function Album({ img, title, count, ...reset }: AlbumProp) {
  return (
    <AlbumContainer {...reset}>
      <LazyLoad
        placeholder={
          <img width="100%" height="100%" src="../../assets/music.png" />
        }
      >
        <img src={img + '?param=300*300'} alt={title} className="cover" />
      </LazyLoad>
      <span className="title">{title}</span>
      <span className="count">
        <i className="ri-headphone-fill"></i>
        {getCount(count)}
      </span>
    </AlbumContainer>
  )
}

export default Album
