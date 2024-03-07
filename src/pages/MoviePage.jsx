import React, { useEffect, useState } from 'react'

// * React router
import { useParams } from 'react-router-dom'

// * Components
import { ContentDetails } from '../components/ContentDetails'

// * Actions
import { getMovieById } from '../app/features/movies/asyncThunks'

export const MoviePage = () => {

  const [currentMovie, setCurrentMovie] = useState(false)

  const { id } = useParams()

  const getMovie = async () => {
    const movie = await getMovieById(id)
    setCurrentMovie(movie)
  }

  useEffect(() => {
    getMovie()
  },[])

  return (
    <div className='MoviePage'>
      {currentMovie ? <ContentDetails movie={currentMovie} /> : null}
    </div>
  )
}
