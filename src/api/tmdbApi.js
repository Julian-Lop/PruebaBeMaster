import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_URL_API_TMDB
})