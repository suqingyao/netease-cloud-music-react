import { PlayMode } from '@/components/play-bar/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const playbarSlice = createSlice({
  name: 'playbar',
  initialState: {
    playMode: PlayMode.SEQUENTIAL
  },
  reducers: {
    switchMode(state, action: PayloadAction<PlayMode>) {
      state.playMode = action.payload
    }
  }
})

export const { switchMode } = playbarSlice.actions

export default playbarSlice.reducer
