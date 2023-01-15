import React, { ReactNode, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

export interface TopBarProps {
  leftSlot?: ReactNode
  centerSlot?: ReactNode
  rightSlot?: ReactNode
}

const TopBar: FC<TopBarProps> = ({ leftSlot, centerSlot, rightSlot }) => {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className="flex justify-between items-center h-10 px-2 text-white fixed top-0 left-0 right-0 bg-red-500 w-full z-10">
      <div>
        {leftSlot ?? (
          <ChevronLeftIcon
            className="w-6 h-6 text-white"
            onClick={handleClick}
          />
        )}
      </div>
      <div>{centerSlot}</div>
      <div>{rightSlot}</div>
    </div>
  )
}

export default React.memo(TopBar)
