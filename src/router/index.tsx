import { lazy } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
const Layout = lazy(() => import('@/layout'))
const Login = lazy(() => import('@/pages/login'))
const Recommend = lazy(() => import('@/pages/recommend'))
const Rank = lazy(() => import('@/pages/rank'))
const Singer = lazy(() => import('@/pages/singer'))
const Playlist = lazy(() => import('@/pages/playlist'))
const Page404 = lazy(() => import('@/pages/error/Page404'))

const routeList: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to="/recommend" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'rank',
        element: <Rank />
      },
      {
        path: 'singer',
        element: <Singer />
      }
    ]
  },
  {
    path: '/playlist/:id',
    element: <Playlist />
  },
  {
    path: '*',
    element: <Page404 />
  }
]

export default () => useRoutes(routeList)
