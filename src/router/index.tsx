import Layout from '@/layout/index'
import Page404 from '@/views/error/Page404'
import Playlist from '@/views/playlist'
import Rank from '@/views/rank'
import React from 'react'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Login from '@/views/login'

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

const Views = () => useRoutes(routeList)

export default Views
