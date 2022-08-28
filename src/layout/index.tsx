/*
 * @Author: cully fung
 * @Date: 2022-08-19 23:32:04
 * @LastEditTime: 2022-08-27 10:46:26
 * @LastEditors: cully fung
 * @Description:
 */
import PlayBar from '@/components/play-bar'
import React, { useEffect, useState } from 'react'
import AppMain from './components/app-main'
import SearchBar from './components/search-bar'
import TabBar, { TabItemProps } from './components/tab-bar'
import TopBar from './components/top-bar'
import { LayoutContainer } from './style'

function Layout() {
  const [tabList, setTabList] = useState<TabItemProps[]>([])

  useEffect(() => {
    setTabList([
      {
        icon: 'ri-netease-cloud-music-fill',
        label: '推荐',
        path: '/recommend'
      },
      {
        icon: 'ri-bar-chart-fill',
        label: '排行榜',
        path: '/rank'
      },
      {
        icon: 'ri-user-3-line',
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
      <PlayBar />
      <TabBar tabList={tabList} />
    </LayoutContainer>
  )
}

export default Layout
