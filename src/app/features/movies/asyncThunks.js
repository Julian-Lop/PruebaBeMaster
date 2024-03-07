import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbApi } from "../../../api/tmdbApi";

// ? Url by category
const urlByCategory = 'discover/movie?'
// ? Url by id
const urlById = 'movie'

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


export const getMovieById = async (id) => {
  
  const movie = await tmdbApi.get(`${urlById}/${id}?api_key=${import.meta.env.VITE_APY_KEY_TMDB}`)

  if (movie.data) {
    return movie.data
  }

  return false
}