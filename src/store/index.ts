import counterSlice from './slice/counterSlice'
import playbarSlice from './slice/playbarSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    playbar: playbarSlice
  }
})
