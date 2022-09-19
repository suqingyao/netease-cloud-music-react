import { Banner } from '@/components/carousel/type'
import { getPersonalized } from '@/api/playlist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBannerList } from '@/api'

export const getBannerListData = createAsyncThunk(
  'recommend/banner',
  async () => {
    const result = await getBannerList({ type: 1 })
    return result
  }
)
export const getRecommendListData = createAsyncThunk(
  'recommend/recommendList',
  async () => {
    const result = await getPersonalized()
    return result
  }
)

export const banner = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
    recommendList: []
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBannerListData.fulfilled, (state, { payload }) => {
        state.banners = payload.banners ?? []
      })
      .addCase(getRecommendListData.fulfilled, (state, { payload }) => {
        state.recommendList = payload.result ?? []
      })
  }
})

export const {} = banner.actions

export default banner.reducer
