import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { ScrollProps } from './types'
import { ScrollWrapper } from './style'
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
import PullDown from '@better-scroll/pull-down'
import Indicators from '@better-scroll/indicators'

BScroll.use(PullUp)
BScroll.use(ObserveDOM)
BScroll.use(PullDown)
BScroll.use(Indicators)

const Scroll = forwardRef((props: Partial<ScrollProps>, ref) => {
  const [bScroll, setBScroll] = useState<any>(null)

  const scrollContainerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current as HTMLElement, {
      probeType: 3,
      specifiedIndexAsContent: 1
    })
    setBScroll(scroll as any)

    return () => {
      setBScroll(null)
    }
  }, [])

  useEffect(() => {})

  useEffect(() => {
    bScroll.on('contentChanged', (content: any) => {
      console.log('--- newContent ---')
      console.log(
        '🚀 ~ file: index.tsx ~ line 64 ~ useEffect ~ content',
        content
      )
    })
    bScroll.on('scroll', (scroll: () => void) => {})
    return () => {
      bScroll.des('scroll')
    }
  }, [bScroll])

  useEffect(() => {
    bScroll.on('scrollEnd', () => {})
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])

  useEffect(() => {
    bScroll.on('touchEnd', (pos: any) => {})
    return () => {
      bScroll.off('touchEnd')
    }
  }, [bScroll])

  // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle(ref, () => ({
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    }
  }))

  return (
    <ScrollWrapper ref={scrollContainerRef as any}>
      {props.children}
    </ScrollWrapper>
  )
})

export default Scroll
