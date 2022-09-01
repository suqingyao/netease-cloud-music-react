import { Outlet } from 'react-router-dom'
import { AppMainWrapper } from './style'

function AppMain() {
  return (
    <AppMainWrapper>
      <Outlet />
    </AppMainWrapper>
  )
}

export default AppMain
