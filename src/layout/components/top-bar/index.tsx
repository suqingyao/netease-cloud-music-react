import { TopBarContainer } from './style'
import { TopBarProps } from './types'

function TopBar(props: TopBarProps) {
  const { title } = props
  return (
    <TopBarContainer>
      <i className="ri-menu-line"></i>
      <h1>{title}</h1>
      <i className="ri-search-line"></i>
    </TopBarContainer>
  )
}

export default TopBar
