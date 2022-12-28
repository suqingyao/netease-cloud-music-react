import { cloneElement, CSSProperties, FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.scss'

interface Props {
  visible: boolean
  timeout?: number
  style?: CSSProperties
  onEntered?: () => void
  onExited?: () => void
  children?: ReactNode
}

const Fade: FC<Props> = ({
  visible,
  timeout = 300,
  style,
  onEntered,
  onExited,
  children
}) => {
  return (
    <div className="component-transition-fade">
      <CSSTransition
        in={visible}
        timeout={timeout}
        classNames="fade"
        mountOnEnter
        unmountOnExit
        onEntered={onEntered}
        onExited={onExited}
      >
        {cloneElement(children, {
          style: {
            ...style
          }
        })}
      </CSSTransition>
    </div>
  )
}

export default Fade
