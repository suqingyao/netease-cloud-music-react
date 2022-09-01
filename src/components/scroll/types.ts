import { ReactNode } from 'react'
export interface ScrollProps {
  direction: 'vertical' | 'horizontal'
  click: boolean
  refresh: boolean
  onScroll: () => void
  pullUpLoading: boolean
  pullDownLoading: boolean
  pullUp: () => void
  pullDown: () => void
  bounceTop: boolean
  bounceBottom: boolean
  children: ReactNode
}
