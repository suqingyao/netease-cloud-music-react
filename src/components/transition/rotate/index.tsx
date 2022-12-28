import { CSSProperties, FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.scss'

interface RotateProps {
  visible: boolean
  timeout?: number
  onEntered?: () => void
  onExited?: () => void
  style?: CSSProperties
  children?: ReactNode
}

const Rotate: FC<RotateProps> = ({
  visible,
  timeout = 300,
  onEntered,
  onExited,
  children
}) => {
  return (
    <div className="component-transition-rotate">
      <CSSTransition
        in={visible}
        timeout={timeout}
        onEntered={onEntered}
        onExited={onExited}
        mountOnEnter
        unmountOnExit
        classNames="rotate"
      >
        {children}
      </CSSTransition>
    </div>
  )
}

export default Rotate
