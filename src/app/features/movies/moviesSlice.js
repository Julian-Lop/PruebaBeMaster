import { createSlice } from "@reduxjs/toolkit";
import { addToWatchList, getAllMovies, getMoviesByCategory, getWatchList, removeFromWatchList } from "./asyncThunks";

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
  watchlist: [],
  indexwatchlist: {}
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
    builder
      .addCase(getWatchList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getWatchList.fulfilled, (state, action) => {
        const { watchlist } = action.payload

        const idindexados = watchlist.map(({id}) => {return id})

        state.status = 'succeeded'
        state.watchlist = watchlist
        state.indexwatchlist = idindexados.reduce((acc, curr) => {
          acc[curr] = curr;
          return acc;
        }, {});
      })
      .addCase(getWatchList.rejected, (state, action) => {
        state.status = 'failed'
      })
    builder
      .addCase(addToWatchList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addToWatchList.fulfilled, (state, action) => {
        const { idMovie } = action.payload
        
        console.log({payload: action.payload})

        state.status = 'succeeded'
        state.indexwatchlist[idMovie] = idMovie
      })
      .addCase(addToWatchList.rejected, (state, action) => {
        state.status = 'failed'
      })
    builder
      .addCase(removeFromWatchList.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(removeFromWatchList.fulfilled, (state, action) => {
        const { idMovie } = action.payload

        state.status = 'succeeded'
        delete state.indexwatchlist[idMovie]
        let temp = state.watchlist.filter(movie => movie.id != idMovie )
        state.watchlist = temp
      })
      .addCase(removeFromWatchList.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})


// export const { } = moviesSlice.actions

export default moviesSlice.reducer