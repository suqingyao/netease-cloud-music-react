import { TabsWrapper } from './style'

interface Props {
  defaultActiveKey?: string
  activeKey?: string
  children?: any
}

function Tabs(props: Props) {
  return (
    <TabsWrapper>
      <nav></nav>
      {props.children}
    </TabsWrapper>
  )
}

export default Tabs
