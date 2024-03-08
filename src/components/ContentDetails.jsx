import React from 'react'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
// * Actions
import { addToWatchList, removeFromWatchList } from '../app/features/movies/asyncThunks'

export const ContentDetails = ({ movie }) => {

  const ids = useSelector(state => state.movies.indexwatchlist)

  const dispatch = useDispatch()

  const addWatchlist = () => {
    dispatch(addToWatchList(movie.id))
  }

  const removeWatchlist = () => {
    dispatch(removeFromWatchList(movie.id))
  }

  return (
    <section className='Content-details'>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={'Image ' + movie.original_title}
        className='Content-details-image'
      />
      <div className='Content-details-info'>
        <h1>{movie.original_title}</h1>
        
        <div className='Content-releasedata-and-runtime'>
          <span className='Item-release-runtime'>{movie.release_date.slice(0, 4)}</span>
          <span className='Item-release-runtime'>{movie.runtime}m</span>
        </div>

        <div className='Content-genres'>
          <ul>
            {
              movie.genres?.map((genre,i) => (
                <li key={genre.id} >{genre.name}{i < movie.genres.length-1 && ','}</li>
              ))
            }
          </ul>
        </div>

        <div className='Content-buttons-details'>
          <button className='Btn-three'>
            <i className='icon icon-play'></i>
            Play
          </button>
          <div className='Buttons-opts'>
            <button className='Btn-opt' onClick={!ids[movie.id] ? addWatchlist : removeWatchlist}>
              {!ids[movie.id] && <i className='icon icon-add' ></i>}
              {ids[movie.id] && <i className='icon icon-cancel' ></i>}
              Lista
            </button>
            <button className='Btn-opt'>
              <i className='icon icon-film'></i>
              Trailer
            </button>
            <button className='Btn-opt'>
              <i className='icon icon-download'></i>
              Descargar
            </button>
          </div>
        </div>
        
        <p>
          {movie.overview}
        </p>
      </div>
    </section>
  )
}
