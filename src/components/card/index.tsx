import { CardContainer } from './style'
import React from 'react'
export interface CardProps {
  title?: string
  children?: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div px-10px py-15px>
      <h2 text-20px>{title}</h2>
      <div pt-10px>{children}</div>
    </div>
  )
}

export default React.memo(Card)
