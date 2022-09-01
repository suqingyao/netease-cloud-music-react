import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

let reducer: any = {}
const files: Record<string, any> = import.meta.glob('@/store/slice/*.ts', {
  eager: true
})
Object.keys(files).forEach(fileName => {
  const name = fileName.replace(/([a-z]{0,}\/)|(\.[^\.]+$)/g, '')
  reducer[name] = files[fileName].default
})

export const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
