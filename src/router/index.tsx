/*
 * @Author: cully fung
 * @Date: 2022-08-21 00:29:16
 * @LastEditTime: 2022-08-28 23:14:36
 * @LastEditors: cully fung
 * @Description:
 */
import React from 'react'
import Layout from '@/layout/index'
import Page404 from '@/views/error/Page404'
import Rank from '@/views/rank'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import { RouteObject, useRoutes } from 'react-router-dom'
import Playlist from '@/views/playlist'

const routeList: Array<RouteObject> = [
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
