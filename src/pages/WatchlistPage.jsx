import React, { useEffect } from 'react'

// * Redux
import { useDispatch } from 'react-redux'
// * Actions
import { getWatchList } from '../app/features/movies/asyncThunks'

// * Components
import { SliderCardMovie } from '../components/home/SliderCardMovie'

export const WatchlistPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchList())
  },[])

  return (
    <div className='Category'>
      <section className='Content-category'>
        <h1>
          Mi Lista
        </h1>
        <SliderCardMovie category='watchlist' />
      </section>
    </div>
  )
}
