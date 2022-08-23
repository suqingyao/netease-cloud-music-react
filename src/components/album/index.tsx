import React from 'react'
import { AlbumContainer } from './style'

interface Prop {
  img: string
  title: string
}

function Album({ img, title }: Prop) {
  return (
    <AlbumContainer>
      <img src={img} alt={title} className="cover" />
      <span className="title">{title}</span>
    </AlbumContainer>
  )
}

export default Album
