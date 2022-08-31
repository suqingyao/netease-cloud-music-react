import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { login } from '@/service/auth'
import { LoginParams } from '@/service/types/login-params'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (params: LoginParams) => {
    const result = await login(params)
    return result
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {}
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, state => {
        console.log(
          '🚀 ~ file: authSlice.ts ~ line 17 ~ extraReducers ~ 登陆中'
        )
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.userInfo = payload
      })
      .addCase(loginUser.rejected, (state, err) => {
        console.log(
          '🚀 ~ file: authSlice.ts ~ line 19 ~ extraReducers ~ err',
          err
        )
      })
  }
})

export default authSlice.reducer
