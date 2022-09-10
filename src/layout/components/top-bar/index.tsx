import { Wrapper } from './style'
import { TopBarProps } from './types'

function TopBar(props: TopBarProps) {
  const { leftSlot, centerSlot, rightSlot } = props
  return (
    <Wrapper>
      {/* <i className="ri-menu-line"></i> */}
      <div className="topbar-left">{leftSlot}</div>
      <div className="topbar-center">{centerSlot}</div>
      <div className="topbar-right">{rightSlot}</div>
    </Wrapper>
  )
}

export default TopBar
