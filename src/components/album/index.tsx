import React, { FC, PropsWithChildren } from 'react'
import { AlbumContainer } from './style'
interface Prop extends React.HTMLAttributes<HTMLDivElement> {
  img: string
  title: string
  children?: React.ReactNode
}

function Album({ img, title, ...reset }: Prop) {
  return (
    <AlbumContainer {...reset}>
      <img src={img} alt={title} className="cover" />
      <span className="title">{title}</span>
    </AlbumContainer>
  )
}

export default Album
