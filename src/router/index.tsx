import Layout from '@/layout/index'
import Page404 from '@/pages/error/Page404'
import Login from '@/pages/login'
import PlayList from '@/pages/playlist'
import Rank from '@/pages/rank'
import Recommend from '@/pages/recommend'
import Singer from '@/pages/singer'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

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
    element: <PlayList />
  },
  {
    path: '*',
    element: <Page404 />
  }
]

export default () => useRoutes(routeList)
