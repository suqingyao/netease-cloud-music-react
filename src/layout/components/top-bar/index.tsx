import React, { ReactNode, FC } from 'react'

export interface TopBarProps {
  leftSlot?: ReactNode
  centerSlot?: ReactNode
  rightSlot?: ReactNode
}

const TopBar = ({ leftSlot, centerSlot, rightSlot }: TopBarProps) => {
  return (
    <div
      className="
      flex
      justify-between
      items-center
      text-2xl
      h10
      px-2
      text-white
      "
    >
      <div>{leftSlot}</div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </div>
  )
}

export default React.memo(TopBar)
