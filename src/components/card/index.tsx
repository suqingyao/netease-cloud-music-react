import React from 'react'
export interface CardProps {
  title?: string
  children?: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="px-10px py-15px">
      <h2 className="text-20px">{title}</h2>
      <div className="pt-10px">{children}</div>
    </div>
  )
}

export default React.memo(Card)
