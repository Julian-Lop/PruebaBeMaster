import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getMoviesByCategory } from "./asyncThunks";

// * Async thunks

// ? Request Status
// status: 'idle' | 'loading' | 'succeeded' | 'failed',

// * Initial State
const initialState = {
  status: 'idle',
  allmovies: [],
  originalsmovies: [],
  pixarmovies: [],
  marvelmovies: [],
  starwarsmovies: [],
  natgeomovies: [],
  watchlist: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getAllMovies.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        const { results } = action.payload
        state.status = 'succeeded'
        state.allmovies = results
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.status = 'failed'
      })
    builder
      .addCase(getMoviesByCategory.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getMoviesByCategory.fulfilled, (state, action) => {
        const { movies, category } = action.payload
        state.status = 'succeeded'
        state[category] = movies
      })
      .addCase(getMoviesByCategory.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})


// export const { } = moviesSlice.actions

export default moviesSlice.reducer