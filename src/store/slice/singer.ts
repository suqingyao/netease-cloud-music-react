import { getArtistList, getTopArtists } from '@/api/artist'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface ApiTopArtists {
  limit?: number
  offset?: number
}

export const getTopArtistsData = createAsyncThunk(
  'singer/artists',
  async (payload?: ApiTopArtists) => {
    const result = await getTopArtists(payload)
    return result
  }
)

// export const getArtistListData = createAsyncThunk(
//   'singer/artists',
//   async (payload?: ApiTopArtists) => {
//     const result = await getTopArtists(payload)
//     await getArtistList()
//     return result
//   }
// )

export const singer = createSlice({
  name: 'singer',
  initialState: {
    artists: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTopArtistsData.fulfilled, (state, { payload }) => {
      state.artists = payload.artists
    })
  }
})

export const {} = singer.actions

export default singer.reducer
