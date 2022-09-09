import { getPlaylistTrackAll } from '@/api/playlist'
import { isSuccessResponse } from '@/utils/is'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Wrapper } from './style'

function Playlist() {
  const [playlistId, setPlaylistId] = useState('')
  const param = useParams()
  const [showStatus, setShowStatus] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setPlaylistId(param.id || '')
    getPlaylistTrackAll({ id: playlistId }).then((res: any) => {
      if (!isSuccessResponse(res)) {
        return
      }
    })
  }, [])

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      className="fly"
      appear={true}
      unmountOnExit
      onExited={() => {
        navigate(-1)
      }}
    >
      <Wrapper></Wrapper>
    </CSSTransition>
  )
}

export default React.memo(Playlist)
