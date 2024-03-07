import React from 'react'

// * React slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

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
        <button className='Btn-two'> <i className='icon icon-add'></i> Agregar a la Lista</button>
      </div>
    </div>
  );
}

export const SliderCardMovie = () => {

  const movies = useSelector(state => state.movies.marvelmovies)

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
            i < 15 && <CustomSlide index={1} movie={movie} className='CardMovie' key={i+'slidemovie'} />
          ))
        }
      </Slider>
    </div>
  )
}
