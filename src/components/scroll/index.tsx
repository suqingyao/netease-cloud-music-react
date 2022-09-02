import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { ScrollProps } from './types'
import { ScrollContent, ScrollWrapper } from './style'
import BScroll from 'better-scroll'

const Scroll = forwardRef((props: Partial<ScrollProps>, ref) => {
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounce } =
    props
  const { pullUp, pullDown, onScroll } = props
  const [bScroll, setBScroll] = useState<any>()

  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new BScroll(scrollRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click || true,
      bounce: bounce || { top: true, bottom: true }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
  }, [])

  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', (scroll: any) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  useEffect(() => {
    if (!bScroll || !pullUp) return
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp()
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])

  useEffect(() => {
    if (!bScroll || !pullDown) return
    bScroll.on('touchEnd', (pos: any) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])

  useEffect(() => {
    if (refresh && bScroll) {
      console.log(
        '🚀 ~ file: index.tsx ~ line 72 ~ useEffect ~ refresh',
        refresh
      )
      bScroll.refresh()
    }
  })

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getInstance() {
      if (bScroll) {
        return bScroll
      }
    }
  }))

  return (
    <ScrollWrapper
      ref={scrollRef}
      className={direction === 'horizontal' ? 'nowrap' : ''}
    >
      <ScrollContent className={direction === 'horizontal' ? 'horizontal' : ''}>
        {props.children}
      </ScrollContent>
    </ScrollWrapper>
  )
})

export default Scroll
