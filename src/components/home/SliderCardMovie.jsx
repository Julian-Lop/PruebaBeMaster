import React, { useEffect, useState } from 'react'

// * React router
import { Link } from 'react-router-dom';

// * Redux
import { useDispatch, useSelector } from 'react-redux';
// * Actions
import { addToWatchList, getWatchList, removeFromWatchList } from '../../app/features/movies/asyncThunks';

// * React slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlide(props) {
  const { index, movie, ...otherProps } = props;

  const ids = useSelector(state => state.movies.indexwatchlist)
  
  const dispatch = useDispatch()

  const addWathclist = () => {
    dispatch(addToWatchList(movie.id))
  }

  const removeWatchlist = () => {
    dispatch(removeFromWatchList(movie.id))
  }

  return (
    <div {...otherProps} >
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt='image'
        className='Card-movie-image'
        loading='lazy'
      />
      <div className='Info-card-movie-container'>
        <h2>
          {movie.original_title}
        </h2>
        <h4>
          {movie.overview}
        </h4>
        <div className='Buttons-container'>
          <button className='Btn-two' onClick={ !ids[movie.id] ? addWathclist : removeWatchlist } >
            {!ids[movie.id] && <i className='icon icon-add'></i>}
            {ids[movie.id] && <i className='icon icon-cancel'></i>}
            <p>{!ids[movie.id] ? 'Añadir' : 'Quitar'} a Lista</p>
          </button>
          <Link to={'/movie/'+movie.id} className='Btn-two'>
            Ver
          </Link>
        </div>
      </div>
    </div>
  );
}

export const SliderCardMovie = ({category = 'marvel', page = 1}) => {

  const movies = useSelector(state => state.movies[category == 'watchlist' ? 'watchlist' : category+'movies'])

  const [current, setCurrent] = useState([])

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: current.length < 4 && current.length > 1 ? current.length : 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      {
        breakpoint: 300,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0
        }
      }
    ]
  };

  useEffect(() => {
    setCurrent(movies)
  },[movies])

  return (
    <div className="Slider-Card-Movie-container">
      {current.length && <Slider {...settings}>
        {
          current?.map((movie, i) => (
            ((i >= ((page-1)*12) )) && (( i < (12*page) )) && <CustomSlide index={1} movie={movie} className='CardMovie' key={i+'slidemovie'} />
          ))
        }
      </Slider>}
    </div>
  )
}
