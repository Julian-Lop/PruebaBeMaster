import { configureStore } from "@reduxjs/toolkit";

// * Reducers
import authReducer from './features/auth/authSlice'
import moviesReducer from "./features/movies/moviesSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer
  }
})