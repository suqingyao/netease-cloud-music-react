import React, { ReactNode } from 'react'
import { TabPaneWrapper } from './style'

interface TabPaneProps {
  key: string
  tab: ReactNode
  children?: any
}

function TabPane({ key, tab, children }: TabPaneProps) {
  return (
    <TabPaneWrapper>
      <span className="tab-pane__header">{tab}</span>
      <div className="tab-pane__body">{children}</div>
    </TabPaneWrapper>
  )
}

export default TabPane
