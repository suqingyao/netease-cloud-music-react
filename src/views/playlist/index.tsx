/*
 * @Author: cully fung
 * @Date: 2022-08-27 00:43:39
 * @LastEditTime: 2022-08-27 00:45:05
 * @LastEditors: cully fung
 * @Description:
 */
import React from 'react'
import { useLocation } from 'react-router-dom'

function Playlist() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx ~ line 13 ~ Playlist ~ location', location)

  return <div>Playlist</div>
}

export default Playlist
