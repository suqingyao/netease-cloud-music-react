import { Outlet } from 'react-router-dom'

function AppMain() {
  return (
    <div
      className="
      fixed
      w-full
      top-50px
      bottom-100px
      overflow-hidden"
      style={{ height: 'calc(100vh - 150px)' }}
    >
      <Outlet />
    </div>
  )
}

export default AppMain
