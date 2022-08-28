/*
 * @Author: cully fung
 * @Date: 2022-08-20 12:10:05
 * @LastEditTime: 2022-08-28 17:39:44
 * @LastEditors: cully fung
 * @Description:
 */
import { TopBarContainer } from './style'

interface Props {
  title: string
}

function TopBar(props: Props) {
  const { title } = props
  return (
    <TopBarContainer>
      <i className=""></i>
      <h1>{title}</h1>
      <i className=""></i>
    </TopBarContainer>
  )
}

export default TopBar
