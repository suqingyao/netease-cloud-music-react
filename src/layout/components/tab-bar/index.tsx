/*
 * @Author: cully fung
 * @Date: 2022-08-20 12:09:39
 * @LastEditTime: 2022-08-26 08:34:05
 * @LastEditors: cully fung
 * @Description:
 */
import PlayBar from '@/components/play-bar'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TabBarContainer } from './style'

interface IProp {
  tabList: ITabItem[]
}

export interface ITabItem {
  icon: string
  label: string
  path: string
}

function TabBar({ tabList }: IProp) {
  const { pathname } = useLocation()

  return (
    <TabBarContainer>
      <PlayBar />
      {tabList.map(tab => {
        const isActive = pathname.includes(tab.path)

        return (
          <Link
            to={tab.path}
            className={isActive ? 'tab-item tab-item-active' : 'tab-item'}
          >
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </Link>
        )
      })}
    </TabBarContainer>
  )
}

export default TabBar
