import React, { useEffect, useRef, useState } from 'react'

export const CardCategory = ({image,vid}) => {

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
    >
      <img src={image} alt='disneyimage' className='Card-category-image' />
      <video
        src={vid}
        mute loop
        className='Card-category-video'
        ref={videoRef}
      ></video>
    </div>
  )
}
