import { configureStore } from '@reduxjs/toolkit'
import playbar from './modules/playbar'

export const store = configureStore({
  reducer: playbar
})
