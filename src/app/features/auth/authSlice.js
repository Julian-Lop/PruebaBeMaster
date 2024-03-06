import { createSlice } from "@reduxjs/toolkit";

// * Async thunks
import { loginUser, registerUser, signoutUser } from "./asyncThunks";

// ? Request Status
// status: 'idle' | 'loading' | 'succeeded' | 'failed',

// * Initial State
const initialState = {
  email: false,
  status: 'idle',
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      const { payload } = action
      state.isAuth = payload
    }
    ,
    logout: (state) => {
      state.email = false
      state.token = false
      localStorage.removeItem('token')
    }
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { email } = action.payload

        state.status = 'succeeded'
        state.email = email
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed'
      })
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { email } = action.payload

        state.status = 'succeeded'
        state.email = email
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
      })
    builder
      .addCase(signoutUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.status = 'idle'
      })
      .addCase(signoutUser.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export const { logout, authUser } = authSlice.actions

export default authSlice.reducer