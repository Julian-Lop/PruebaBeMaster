import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbApi } from "../../../api/tmdbApi";

// ? Url by category
const urlByCategory = 'discover/movie?'
// ? Url by id
const urlById = 'movie'
// ? Url watchlist
const urlWatchlist = 'account/21064880/watchlist'

// ? Id categories
const categories = {
  originals: 3166,
  pixar: 3,
  marvel: 420,
  starwars: 1,
  natgeo: 7521
}

// * Async functions (async ations)
export const getAllMovies = createAsyncThunk('getallmovies', async () => {
 
  const movie =  await tmdbApi.get(`${urlByCategory}with_companies=3166&page=${1}&api_key=${import.meta.env.VITE_APY_KEY_TMDB}`)

  if (movie.data) {
    return movie.data
  }

  return false
})

export const getMoviesByCategory = createAsyncThunk('getbycategory', async (category) => {
 
  if(!categories[category]) return false


  const movies =  await tmdbApi.get(`${urlByCategory}with_companies=${categories[category]}&page=${1}&api_key=${import.meta.env.VITE_APY_KEY_TMDB}`)

  if (movies.data) {
    return {movies:movies.data.results,category:category+'movies'}
  }
  return false
})

export const getWatchList = createAsyncThunk('getwatchlist', async () => {

  const headers = {
    'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
  };

  const watchlist = await tmdbApi.
    get(`${urlWatchlist}/movies?api_key=${import.meta.env.VITE_APY_KEY_TMDB}`, { headers })

  if (watchlist.data.results.length) {
    return {watchlist:watchlist.data.results}
  }

  return false

})

export const addToWatchList = createAsyncThunk('addtowatchlist', async (idMovie) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
  };

  const data = {
    media_type: 'movie',
    media_id: idMovie,
    watchlist: true 
  }

  const watchlist = await tmdbApi.post(`${urlWatchlist}?api_key=${import.meta.env.VITE_APY_KEY_TMDB}`,data,{headers})

  if (watchlist.data.success) {
    return {idMovie}
  }

  return false

})

export const removeFromWatchList = createAsyncThunk('removetowatchlist', async (idMovie) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
  };

  const data = {
    media_type: 'movie',
    media_id: idMovie,
    watchlist: false
  }

  const watchlist = await tmdbApi.post(`${urlWatchlist}?api_key=${import.meta.env.VITE_APY_KEY_TMDB}`,data,{headers})

  if (watchlist.data.success) {
    return {idMovie}
  }

  return false

})


export const getMovieById = async (id) => {
  
  const movie = await tmdbApi.get(`${urlById}/${id}?api_key=${import.meta.env.VITE_APY_KEY_TMDB}`)

  if (movie.data) {
    return movie.data
  }

  return false
}