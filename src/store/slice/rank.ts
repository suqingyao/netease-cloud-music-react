import { getToplistDetail } from '@/api/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getRankListData = createAsyncThunk('rank/list', async () => {
  const result = await getToplistDetail()
  return result
})

export const rank = createSlice({
  name: 'rank',
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRankListData.fulfilled, (state, { payload }) => {
      // @ts-ignore
      state.list = payload.list
    })
  }
})

export const {} = rank.actions

export default rank.reducer
