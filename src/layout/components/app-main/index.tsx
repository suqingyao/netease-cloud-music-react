import { Outlet } from 'react-router-dom'

function AppMain() {
  return (
    <div
      className="
      flex-1
      w-full
      overflow-hidden
      "
    >
      <Outlet />
    </div>
  )
}

export default AppMain
