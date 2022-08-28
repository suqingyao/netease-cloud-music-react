/*
 * @Author: cully fung
 * @Date: 2022-08-20 12:09:39
 * @LastEditTime: 2022-08-28 17:38:48
 * @LastEditors: cully fung
 * @Description:
 */
import { NavLink } from 'react-router-dom'
import { TabItem, Tabs } from './style'
import { TabBarProps } from './types'

function TabBar({ tabList }: TabBarProps) {
  return (
    <Tabs>
      {tabList.map(tab => {
        return (
          <NavLink key={tab.path} to={tab.path}>
            <TabItem>
              <i className={tab.default}></i>
              <span>{tab.label}</span>
            </TabItem>
          </NavLink>
        )
      })}
    </Tabs>
  )
}

export default TabBar
