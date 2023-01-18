import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  MusicalNoteIcon,
  Bars3BottomLeftIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  icon: JSX.Element
  title: string
  path: string
}

const TabBar = () => {
  const tabList: TabItemProps[] = [
    {
      icon: <MusicalNoteIcon className="w-5 h-5" />,
      title: '推荐',
      path: '/recommend'
    },
    {
      icon: <Bars3BottomLeftIcon className="w-5 h-5 -rotate-90" />,
      title: '排行榜',
      path: '/rank'
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: '歌手',
      path: '/singer'
    }
  ]
  const location = useLocation()
  return (
    <div className="flex h-10 fixed right-0 left-0 bottom-0 justify-around items-center text-black bg-red-500">
      {tabList.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={tab.path === location.pathname ? 'text-white' : ''}
        >
          <div className="flex-1 flex flex-col justify-center items-center">
            {tab.icon}
            <span className="text-xs">{tab.title}</span>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default React.memo(TabBar)
