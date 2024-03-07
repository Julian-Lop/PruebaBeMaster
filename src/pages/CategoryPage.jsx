import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// * React router
import { useParams } from 'react-router-dom'
import { getMoviesByCategory } from '../app/features/movies/asyncThunks'

import { ContentCategory } from '../components/ContentCategory'

export const CategoryPage = () => {

  const movies = useSelector(state => state.movies)

  const [currentMovies, setCurrentMovies] = useState([])

  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    if (id && !movies[id+'movies'].length) {
      dispatch(getMoviesByCategory(id))
    }
  }, [])
  
  useEffect(() => {
    if (movies.status == "succeeded") {
      setCurrentMovies(movies[id+'movies'])
    }
  },[movies])

  return (
    <div className='Category'>
      <ContentCategory id={id} />
    </div>
  )
}

