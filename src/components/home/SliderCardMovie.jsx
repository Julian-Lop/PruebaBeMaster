import React from 'react'

// * React slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CustomSlide(props) {
  const { index, movie, ...otherProps } = props;
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
          <button className='Btn-two'>
            <i className='icon icon-add'></i>
            Añadir a Lista
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

  const movies = useSelector(state => state.movies[category+'movies'])

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  return (
    <div className="Slider-Card-Movie-container">
      <Slider {...settings}>
        {
          movies.map((movie, i) => (
            ((i >= ((page-1)*12) )) && (( i < (12*page) )) && <CustomSlide index={1} movie={movie} className='CardMovie' key={i+'slidemovie'} />
          ))
        }
      </Slider>
    </div>
  )
}
