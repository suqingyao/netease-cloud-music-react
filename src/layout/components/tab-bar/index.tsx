import { Link } from 'react-router-dom'
import { TabBarContainer } from './style'

interface IProp {
  tabList: ITabItem[]
}

export interface ITabItem {
  icon: string
  label: string
  path: string
}

function TabBar({ tabList }: IProp) {
  return (
    <TabBarContainer>
      {tabList.map(tab => {
        return (
          <Link to={tab.path} className="tab-item">
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </Link>
        )
      })}
    </TabBarContainer>
  )
}

export default TabBar
