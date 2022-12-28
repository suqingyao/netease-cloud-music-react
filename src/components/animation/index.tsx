import classNames from 'classnames'
import { cloneElement, CSSProperties, FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

interface AnimationProps {
  visible: boolean
  className?: string
  timeout?: number
  onEntered?: () => void
  onExited?: () => void
  style?: CSSProperties
  children?: ReactNode
}

const Animation: FC<AnimationProps> = ({
  visible,
  className = '',
  timeout = 300,
  style,
  onEntered,
  onExited,
  children
}) => {
  return (
    <CSSTransition
      in={visible}
      timeout={timeout}
      onEntered={onEntered}
      onExited={onExited}
      mountOnEnter
      unmountOnExit
      classNames={classNames('animated', className)}
    >
      {cloneElement(children, {
        className: `animated ${className}`,
        style: {
          ...style
        }
      })}
    </CSSTransition>
  )
}

export default Animation
