import { getPlaylistTrackAll } from '@/api/playlist'
import { isSuccessResponse } from '@/utils/is'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Playlist() {
  const [playlistId, setPlaylistId] = useState('')
  const param = useParams()

  useEffect(() => {
    setPlaylistId(param.id || '')
    getPlaylistTrackAll({ id: playlistId }).then((res: any) => {
      if (!isSuccessResponse(res)) {
        return
      }
    })
  }, [])

  return <div>Playlist</div>
}

export default Playlist
