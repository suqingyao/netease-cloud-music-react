import { Outlet } from 'react-router-dom'

function AppMain() {
  return (
    <div
      className="
      flex-1
      w-full
      overflow-hidden
      py-10
      "
    >
      <Outlet />
    </div>
  )
}

export default AppMain
