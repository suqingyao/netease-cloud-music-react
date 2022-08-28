/*
 * @Author: cully fung
 * @Date: 2022-08-20 12:09:39
 * @LastEditTime: 2022-08-27 11:05:04
 * @LastEditors: cully fung
 * @Description:
 */
import { Link, useLocation } from 'react-router-dom'
import { TabBarContainer } from './style'
import { TabBarProps } from './types'

function TabBar({ tabList }: TabBarProps) {
  const { pathname } = useLocation()

  return (
    <TabBarContainer>
      {tabList.map(tab => {
        const isActive = pathname.includes(tab.path)

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={isActive ? 'tab-item tab-item-active' : 'tab-item'}
          >
            <span className="icon">
              <i className={tab.icon}></i>
            </span>
            <span className="label">{tab.label}</span>
          </Link>
        )
      })}
    </TabBarContainer>
  )
}

export default TabBar
