import PlayBar from '@/components/play-bar'
import AppMain from './components/app-main'
import TabBar from './components/tab-bar'
import TopBar from './components/top-bar'

const Layout = () => {
  return (
    <div
      className="
      w-screen
      h-screen
      flex
      flex-col
      relative
      bg-gradient-to-r
      from-violet-500
      to-fuchsia-500
      text-white"
    >
      <TopBar
        leftSlot={<i className="i-ri-menu-line" />}
        centerSlot={<h1>WebApp</h1>}
        rightSlot={<i className="i-ri-search-line" />}
      />
      {/* <SearchBar /> */}
      <AppMain />
      <PlayBar />
      <TabBar />
    </div>
  )
}

export default Layout
