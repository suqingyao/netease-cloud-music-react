import React, { ReactNode, FC } from 'react'

export interface TopBarProps {
  leftSlot?: ReactNode
  centerSlot?: ReactNode
  rightSlot?: ReactNode
}

const TopBar = ({ leftSlot, centerSlot, rightSlot }: TopBarProps) => {
  return (
    <div
      flex
      justify-between
      text-center
      text-xl
      px-2
      fixed
      z-1
      top-0
      left-0
      right-0
      h-48
      text-white
      bg-gray-5
    >
      <div>{leftSlot}</div>
      <div text-lg>{centerSlot}</div>
      <div>{rightSlot}</div>
    </div>
  )
}

export default React.memo(TopBar)
