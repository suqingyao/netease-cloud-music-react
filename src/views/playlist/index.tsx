import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Playlist() {
  const location = useLocation()
  console.log('🚀 ~ file: index.tsx ~ line 13 ~ Playlist ~ location', location)

  const param = useParams()
  console.log('🚀 ~ file: index.tsx ~ line 16 ~ Playlist ~ param', param)

  useEffect(() => {}, [])

  return <div>Playlist</div>
}

export default Playlist
