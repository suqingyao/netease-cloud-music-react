import LazyLoad from 'react-lazyload'
import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { getCount } from '@/utils'

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  .cover {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    background-color: #fff;
  }
  .title {
    color: #fff;
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .count {
    font-size: 12px;
    position: absolute;
    right: 5px;
    top: 5px;
    display: flex;
    gap: 2px;
  }
`

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
          <img
            width="100%"
            height="100%"
            src="https://s4.music.126.net/style/web2/img/default/default_album.jpg"
          />
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
