/*
 * @Author: cully fung
 * @Date: 2022-08-23 22:33:14
 * @LastEditTime: 2022-08-26 16:21:07
 * @LastEditors: cully fung
 * @Description: 
 */
import React from 'react'
import { CardContainer } from './style'

interface Props {
  title?: string
  children?: any
}

function Card({ title, children }: Props) {
  return (
    <CardContainer>
      <span className="card__header">{title}</span>
      <div className="card__body">{children}</div>
    </CardContainer>
  )
}

export default Card
