/*
 * @Author: cully fung
 * @Date: 2022-08-23 22:20:47
 * @LastEditTime: 2022-08-27 01:17:33
 * @LastEditors: cully fung
 * @Description:
 */
import React, { FC, PropsWithChildren } from 'react'
import { AlbumContainer } from './style'

interface Prop extends React.HTMLAttributes<HTMLDivElement> {
  img: string
  title: string
  children?: React.ReactNode
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
