import React from 'react'

// * React slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

export const SliderHome = () => {

  const movies = useSelector(state => state.movies.marvelmovies) 

  function CustomSlide(props) {
    const { index, movie, ...otherProps } = props;
    return (
      <div {...otherProps} key={index} >
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='image' />
        <div className='Mask'></div>
        <div className='Info-container'>
          <h2>
            {movie.original_title}
          </h2>
          <p>
            {movie.overview}
          </p>
        </div>
      </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="Slider-container">
      <Slider {...settings}>
        {
          movies.map((movie, i) => (
            i < 5 && <CustomSlide index={1} movie={movie} className='CardSlider' />
          ))
        }
      </Slider>
    </div>
  )
}
