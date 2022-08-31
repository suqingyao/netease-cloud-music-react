import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state, action) {
      state.count += action.payload
    },

    decrement(state, { payload }) {
      state.count -= payload
    },
    asyncIncrement() {}
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
