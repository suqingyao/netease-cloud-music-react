import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  default: string
  active: string
  label: string
  path: string
}

const TabBar = () => {
  const tabList: TabItemProps[] = [
    {
      default: 'i-ri-netease-cloud-music-line',
      active: 'i-ri-netease-cloud-music-fill',
      label: '推荐',
      path: '/recommend'
    },
    {
      default: 'i-ri-bar-chart-line',
      active: 'i-ri-bar-chart-fill',
      label: '排行榜',
      path: '/rank'
    },
    {
      default: 'i-ri-user-3-line',
      active: 'i-ri-user-3-fill',
      label: '歌手',
      path: '/singer'
    }
  ]
  const location = useLocation()
  return (
    <div
      className="
      flex
      h10
      fixed
      right-0
      left-0
      bottom-0
      justify-around
      items-center
      text-gray-2
      bg-red
      "
    >
      {tabList.map(tab => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={tab.path === location.pathname ? 'text-red-6' : ''}
        >
          <div className="flex-1 flex flex-col justify-center items-center">
            <i className={`${tab.default}`}></i>
            <span className="text-sm">{tab.label}</span>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default React.memo(TabBar)
