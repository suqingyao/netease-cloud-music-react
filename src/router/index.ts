import React from 'react'
import Layout from '@/layout/index'
import Page404 from '@/views/error/Page404'
import Rank from '@/views/rank'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import { RouteObject, useRoutes } from 'react-router-dom'

const routeList: RouteObject[] = [
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
    path: '*',
    element: <Page404 />
  }
]

const routes = () => useRoutes(routeList)

export default routes
