// import { IconStyle } from '@/assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import routes from '@/router'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/layout/index'
import Rank from './views/rank'
import Page404 from './views/error/Page404'
import Recommend from './views/recommend'
import Singer from './views/singer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* {routes} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="rank" element={<Rank />} />
          <Route path="singer" element={<Singer />} />
          <Route path="recommend" element={<Recommend />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
