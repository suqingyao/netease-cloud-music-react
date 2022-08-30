import { TabsWrapper } from './style'
import { TabsProps } from './types'

function Tabs(props: TabsProps) {
  return (
    <TabsWrapper>
      <nav></nav>
      {props.children}
    </TabsWrapper>
  )
}

export default Tabs
