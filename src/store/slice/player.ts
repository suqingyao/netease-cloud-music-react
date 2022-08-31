import { PlayMode } from '@/components/play-bar/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const player = createSlice({
  name: 'player',
  initialState: {
    playMode: PlayMode.SEQUENTIAL
  },
  reducers: {
    switchMode(state, action: PayloadAction<PlayMode>) {
      state.playMode = action.payload
    }
  }
})

export const { switchMode } = player.actions

export default player.reducer
