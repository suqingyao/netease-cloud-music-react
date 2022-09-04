import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import PullDown from '@better-scroll/pull-down'
import PullUp from '@better-scroll/pull-up'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { BScrollInstance, createBScroll } from '@better-scroll/core'
import { ScrollContent, ScrollWrapper } from './style'

BScroll.use(ObserveDOM)
BScroll.use(PullUp)
BScroll.use(PullDown)

export interface BetterScrollProps {
  wrapHeight: string
  direction: 'vertical' | 'horizontal'
  prop?: any
  onPullUp?: Function
  onPullDown?: Function
  children?: ReactNode
}

const BetterScroll: FC<BetterScrollProps> = ({
  wrapHeight,
  prop,
  onPullUp,
  onPullDown,
  direction,
  children
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)

  const initRef = useRef(false)

  const [betterScroll, setBetterScroll] = useState<any>()

  useEffect(() => {
    initBetterScroll()
    return () => {
      betterScroll?.destroy()
    }
  }, [])

  const pullDown = async () => {
    onPullDown && (await onPullDown())

    setTimeout(() => {
      betterScroll?.finishPullDown()
      betterScroll?.refresh()
    }, 500)
  }

  //  上拉加载
  const pullUp = async () => {
    onPullUp && (await onPullUp())
    setTimeout(() => {
      betterScroll?.finishPullUp()
      betterScroll?.refresh()
    }, 500)
  }

  useEffect(() => {
    if (initRef.current === true) {
      betterScroll?.off('pullingDown')
      betterScroll?.once('pullingDown', pullDown)

      betterScroll?.off('pullingUp')
      betterScroll?.once('pullingUp', pullUp)
    } else {
      initRef.current = true
    }
  }, [prop])

  const initBetterScroll = () => {
    setBetterScroll(
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
    <ScrollWrapper ref={wrapRef} style={{ height: wrapHeight }}>
      <ScrollContent>{children}</ScrollContent>
    </ScrollWrapper>
  )
}

export default BetterScroll
