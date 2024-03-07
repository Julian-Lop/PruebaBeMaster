import React, { useEffect, useRef, useState } from 'react'

// * React-router
import { useNavigate } from 'react-router-dom';

export const CardCategory = ({ image, vid, category }) => {
  
  const naviagte = useNavigate()

  const videoRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  },[isHovered])

  return (
    <div
      className='CardCategory'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => naviagte('/category/'+category)}
    >
      <img src={image} alt='disneyimage' className='Card-category-image' />
      <video
        src={vid}
        muted
        loop
        className='Card-category-video'
        ref={videoRef}
      ></video>
    </div>
  )
}
