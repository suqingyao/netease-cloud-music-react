import { CardContainer } from './style'
import { CardProps } from './types'

function Card({ title, children }: CardProps) {
  return (
    <CardContainer>
      <h2 className="card__header">{title}</h2>
      <div className="card__body">{children}</div>
    </CardContainer>
  )
}

export default Card
