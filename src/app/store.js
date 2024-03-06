import { configureStore } from "@reduxjs/toolkit";

// * Reducers
import authReducer from './features/auth/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})