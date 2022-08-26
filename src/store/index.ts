/*
 * @Author: cully fung
 * @Date: 2022-08-26 08:35:58
 * @LastEditTime: 2022-08-26 09:27:04
 * @LastEditors: cully fung
 * @Description: redux
 */
import { configureStore } from '@reduxjs/toolkit'
import playbar from './modules/playbar'

export const store = configureStore({
  reducer: playbar
})
