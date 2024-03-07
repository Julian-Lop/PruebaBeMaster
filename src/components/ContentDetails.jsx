import React from 'react'

export const ContentDetails = ({ movie }) => {
  
  if(!movie) return <>'Loading...'</>

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
            <button className='Btn-opt'>
              <i className='icon icon-add' ></i>
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
