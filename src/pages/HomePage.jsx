import React, { useEffect } from 'react'

// * Redux
import { useDispatch } from 'react-redux'
// * Actions
import { getAllMovies, getMoviesByCategory } from '../app/features/movies/asyncThunks'
import { SliderHome } from '../components/home/SliderHome'

export const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesByCategory('marvel'))
  },[])

  return (
    <div className='HomePage'>
      <SliderHome/>
    </div>
  )
}
