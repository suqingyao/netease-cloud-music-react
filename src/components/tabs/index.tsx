import { TabsWrapper } from './style'
import { TabsProps } from './types'

function Tabs({ children }: TabsProps) {
  return (
    <TabsWrapper>
      <nav></nav>
      {children}
    </TabsWrapper>
  )
}

export default Tabs
