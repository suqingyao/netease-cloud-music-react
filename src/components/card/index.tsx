/*
 * @Author: cully fung
 * @Date: 2022-08-23 22:33:14
 * @LastEditTime: 2022-08-28 18:05:23
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
      <h2 className="card__header">{title}</h2>
      <div className="card__body">{children}</div>
    </CardContainer>
  )
}

export default Card
