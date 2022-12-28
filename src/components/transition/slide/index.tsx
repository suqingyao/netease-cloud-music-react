import { FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.scss'

interface SlideProps {
  visible: boolean
  direction: 'up' | 'down' | 'left' | 'right'
  children?: ReactNode
}

const Slide: FC<SlideProps> = ({ visible, direction, children }) => {
  return (
    <div className="component-transition-slide">
      <CSSTransition
        in={visible}
        timeout={300}
        classNames={`slide-${direction}`}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </div>
  )
}

export default Slide
