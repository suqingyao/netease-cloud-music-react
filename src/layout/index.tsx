import AppMain from './components/app-main'
import PlayBar from '@/components/play-bar'
import React, { useEffect, useState } from 'react'
import SearchBar from './components/search-bar'
import TabBar from './components/tab-bar'
import TopBar from './components/top-bar'
import { Wrapper } from './style'
import { TabItemProps } from './components/tab-bar/types'

function Layout() {
  const [tabList, setTabList] = useState<Array<TabItemProps>>([])

  useEffect(() => {
    setTabList([
      {
        default: 'ri-netease-cloud-music-line',
        active: 'ri-netease-cloud-music-fill',
        label: '推荐',
        path: '/recommend'
      },
      {
        default: 'ri-bar-chart-line',
        active: 'ri-bar-chart-fill',
        label: '排行榜',
        path: '/rank'
      },
      {
        default: 'ri-user-3-line',
        active: 'ri-user-3-fill',
        label: '歌手',
        path: '/singer'
      }
    ])
  }, [])

  return (
    <Wrapper>
      <TopBar
        leftSlot={<i className="ri-menu-line" />}
        centerSlot={<h1>WebApp</h1>}
        rightSlot={<i className="ri-search-line" />}
      />
      {/* <SearchBar /> */}
      <AppMain />
      <PlayBar />
      <TabBar tabList={tabList} />
    </Wrapper>
  )
}

export default Layout
