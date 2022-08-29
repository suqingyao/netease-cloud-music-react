/*
 * @Author: cully fung
 * @Date: 2022-08-16 23:35:32
 * @LastEditTime: 2022-08-29 23:45:47
 * @LastEditors: cully fung
 * @Description:
 */
import { BrowserRouter, Outlet } from 'react-router-dom'
import { GlobalStyle } from './style'
import Views from '@/router'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Views />
    </BrowserRouter>
  )
}

export default App
