import React from 'react'
import { Wrapper } from './style'
import { TopBarProps } from './types'

function TopBar(props: TopBarProps) {
  const { leftSlot, centerSlot, rightSlot } = props
  return (
    <Wrapper>
      <div className="topbar-left">{leftSlot}</div>
      <div className="topbar-center">{centerSlot}</div>
      <div className="topbar-right">{rightSlot}</div>
    </Wrapper>
  )
}

export default React.memo(TopBar)
