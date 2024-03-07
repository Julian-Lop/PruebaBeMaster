import React, { useEffect } from 'react'

// * Redux
import { useDispatch } from 'react-redux'
// * Actions
import { getAllMovies, getMoviesByCategory } from '../app/features/movies/asyncThunks'
import { SliderHome } from '../components/home/SliderHome'
import { CardCategory } from '../components/home/CardCategory'
import { SliderCardMovie } from '../components/home/SliderCardMovie'

const srcCategories = [
  {
    name: 'originals',
    image:'/images/disney.webp',
    vid:'/videos/disney.mp4'
  },
  {
    name: 'pixar',
    image:'/images/pixar.webp',
    vid:'/videos/pixar.mp4'
  },
  {
    name: 'marvel',
    image:'/images/marvel.webp',
    vid:'/videos/marvel.mp4'
  },
  {
    name: 'start-wars',
    image:'/images/star-wars.webp',
    vid:'/videos/star-war.mp4'
  },
  {
    name: 'national-geographic',
    image:'/images/geographic.webp',
    vid:'/videos/geographic.mp4'
  },
]

export const HomePage = () => {

  // ? Dispatch action for get movies
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesByCategory('marvel'))
  },[])

  return (
    <div className='HomePage'>
      <SliderHome />
      <section className='Cards-category-container'>
        {srcCategories.map((category,i) => (
          <CardCategory image={category.image} vid={category.vid} category={category.name} key={i+'cardcategory'} />
        ))}
      </section>
      <section className='Recommended'>
        <h1>Recomendados para ti</h1>
        <SliderCardMovie/>
      </section>
    </div>
  )
}
