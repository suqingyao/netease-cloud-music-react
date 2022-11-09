import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import PullDown from '@better-scroll/pull-down'
import PullUp from '@better-scroll/pull-up'
import React, {
  FC,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { createBScroll } from '@better-scroll/core'
import { debounce } from '@/utils'

BScroll.use(ObserveDOM)
BScroll.use(PullUp)
BScroll.use(PullDown)

export interface ScrollProps {
  wrapHeight?: string
  wrapWidth?: string
  direction: 'vertical' | 'horizontal'
  prop?: any
  onScroll?: Function
  onPullUp?: Function
  onPullDown?: Function
  children?: ReactNode
}

const Scroll: FC<ScrollProps> = forwardRef(
  (
    {
      wrapHeight,
      wrapWidth,
      prop,
      onScroll,
      onPullUp,
      onPullDown,
      direction,
      children
    },
    ref
  ) => {
    const wrapRef = useRef<HTMLDivElement>(null)

    const initRef = useRef(false)

    const [bs, setBs] = useState<any>()

    useEffect(() => {
      initBetterScroll()
      return () => {
        bs?.destroy()
      }
    }, [])

    const scroll = () => {
      onScroll && debounce(onScroll, 1000)()
    }

    const pullDown = async () => {
      onPullDown && (await onPullDown())

      setTimeout(() => {
        bs?.finishPullDown()
        bs?.refresh()
      }, 500)
    }

    //  上拉加载
    const pullUp = async () => {
      onPullUp && (await onPullUp())
      setTimeout(() => {
        bs?.finishPullUp()
        bs?.refresh()
      }, 500)
    }

    useEffect(() => {
      if (initRef.current === true) {
        bs?.off('pullingDown')
        bs?.once('pullingDown', pullDown)

        bs?.off('pullingUp')
        bs?.once('pullingUp', pullUp)

        bs?.on('scroll', scroll)
      } else {
        initRef.current = true
      }
    }, [prop])

    const initBetterScroll = () => {
      setBs(
        createBScroll(wrapRef.current as HTMLDivElement, {
          probeType: 3,
          click: true,
          observeDOM: true,
          scrollY: direction === 'vertical',
          scrollX: direction === 'horizontal',
          useTransition: true,
          pullDownRefresh: {
            threshold: 70,
            stop: 0
          },
          pullUpLoad: {
            threshold: 90,
            stop: 0
          }
        })
      )
    }

    return (
      <div
        ref={wrapRef}
        style={{
          height: wrapHeight,
          width: wrapWidth
          // display: direction === 'horizontal' ? 'inline-block' : ''
        }}
      >
        <div
          style={direction === 'horizontal' ? { display: 'inline-block' } : {}}
        >
          {children}
        </div>
      </div>
    )
  }
)

export default Scroll
