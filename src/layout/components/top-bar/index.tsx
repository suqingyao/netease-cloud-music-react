import React, { ReactNode, FC } from 'react'
import { useNavigate } from 'react-router-dom'

export interface TopBarProps {
  leftSlot?: ReactNode
  centerSlot?: ReactNode
  rightSlot?: ReactNode
}

const TopBar = ({ leftSlot, centerSlot, rightSlot }: TopBarProps) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className="flex justify-between items-center h10 px-2 text-white fixed top-0 lef-0 right-0 bg-red-5 w-full z-10">
      <div>
        {leftSlot ?? (
          <i className="i-ri-arrow-left-s-line" onClick={handleClick}></i>
        )}
      </div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </div>
  )
}

export default React.memo(TopBar)
