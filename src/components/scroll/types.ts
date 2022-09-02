import { ReactNode } from 'react'
export interface ScrollProps {
  direction: 'vertical' | 'horizontal'
  click: boolean
  refresh: boolean
  onScroll: (func?: () => void) => void
  pullUpLoading: boolean
  pullDownLoading: boolean
  pullUp: (func?: () => void) => void
  pullDown: (func?: () => void) => void
  bounce: Bounce
  children: ReactNode
}

interface Bounce {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
}

export type ProbeType = 1 | 2 | 3
