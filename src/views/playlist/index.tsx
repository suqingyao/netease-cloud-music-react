/*
 * @Author: cully fung
 * @Date: 2022-08-27 00:43:39
 * @LastEditTime: 2022-08-27 08:49:21
 * @LastEditors: cully fung
 * @Description:
 */
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Playlist() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx ~ line 13 ~ Playlist ~ location', location)

  const param = useParams()
  console.log('🚀 ~ file: index.tsx ~ line 16 ~ Playlist ~ param', param)

  return <div>Playlist</div>
}

export default Playlist
