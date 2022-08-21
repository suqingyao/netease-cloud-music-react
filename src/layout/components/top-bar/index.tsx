import { TopBarContainer } from './style'

interface Props {
  title: string
}

function TopBar(props: Props) {
  const { title } = props
  return (
    <TopBarContainer>
      <div></div>
      <div>{title}</div>
      <div></div>
    </TopBarContainer>
  )
}

export default TopBar
