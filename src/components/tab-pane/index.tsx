import { TabPaneWrapper } from './style'
import { TabPaneProps } from './types'

function TabPane({ key, tab, children }: TabPaneProps) {
  return (
    <TabPaneWrapper>
      <span className="tab-pane__header">{tab}</span>
      <div className="tab-pane__body">{children}</div>
    </TabPaneWrapper>
  )
}

export default TabPane
