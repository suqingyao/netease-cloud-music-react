import { login } from '@/service/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {}
  },
  reducers: {
    login(state, { payload }) {},
    logout(state, { payload }) {}
  }
})

createAsyncThunk('auth/login', async () => {
  const result = await login({})
})
