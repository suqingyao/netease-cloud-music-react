import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  default: string
  active: string
  label: string
  path: string
}

const TabBar: FC = () => {
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
  return (
    <div
      fixed
      flex
      right-0
      left-0
      justify-around
      items-center
      text-gray-2
      className="active:text-red-6"
    >
      {tabList.map(tab => (
        <NavLink key={tab.path} to={tab.path}>
          <div flex-1 flex flex-col justify-center items-center>
            <i className={tab.default}></i>
            <span>{tab.label}</span>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default React.memo(TabBar)
