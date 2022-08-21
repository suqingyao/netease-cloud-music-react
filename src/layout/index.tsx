import React, { useEffect, useState } from 'react'
import AppMain from './components/app-main'
import SearchBar from './components/search-bar'
import TabBar, { ITabItem } from './components/tab-bar'
import TopBar from './components/top-bar'
import { LayoutContainer } from './style'

function Layout() {
  const [tabList, setTabList] = useState<ITabItem[]>([])

  useEffect(() => {
    setTabList([
      {
        icon: 'ii',
        label: '推荐',
        path: '/recommend'
      },
      {
        icon: 'ii',
        label: '排行榜',
        path: '/rank'
      },
      {
        icon: 'ii',
        label: '歌手',
        path: '/singer'
      }
    ])
  }, [])

  return (
    <LayoutContainer>
      <TopBar title="云音乐" />
      {/* <SearchBar /> */}
      <AppMain />
      <TabBar tabList={tabList} />
    </LayoutContainer>
  )
}

export default Layout
