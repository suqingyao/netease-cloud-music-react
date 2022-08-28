/*
 * @Author: cully fung
 * @Date: 2022-08-19 23:32:04
 * @LastEditTime: 2022-08-28 10:44:10
 * @LastEditors: cully fung
 * @Description:
 */
import PlayBar from '@/components/play-bar'
import React, { useEffect, useState } from 'react'
import AppMain from './components/app-main'
import SearchBar from './components/search-bar'
import TabBar from './components/tab-bar'
import { TabItemProps } from './components/tab-bar/types'
import TopBar from './components/top-bar'
import { LayoutContainer } from './style'

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
