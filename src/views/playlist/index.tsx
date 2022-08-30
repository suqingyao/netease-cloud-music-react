import { getPlaylistTrackAll } from '@/service/playlist'
import { isSuccessResponse } from '@/utils/is'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Playlist() {
  const [playlistId, setPlaylistId] = useState('')
  const param = useParams()

  useEffect(() => {
    setPlaylistId(param.id || '')
    getPlaylistTrackAll({ id: playlistId }).then(res => {
      if (!isSuccessResponse(res)) {
        return
      }
      const data = res.parseBody
      console.log(
        '🚀 ~ file: index.tsx ~ line 17 ~ getPlaylistTrackAll ~ data',
        data
      )
    })
  }, [])

  return <div>Playlist</div>
}

export default Playlist
