import { NavLink } from 'react-router-dom'
import { TabBarProps } from './types'
import { TabItem, Tabs } from './style'
import React from 'react'

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

export default React.memo(TabBar)
