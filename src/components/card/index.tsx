import React from 'react'
import { CardContainer } from './style'

interface Props {
  title: string
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
