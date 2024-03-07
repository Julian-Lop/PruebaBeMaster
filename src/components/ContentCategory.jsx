import React from 'react'

import { SliderCardMovie } from '../components/home/SliderCardMovie'

export const ContentCategory = ({id}) => {
  return (
    <section className='Content-category'>
      <h1>
        {id}
      </h1>
      <SliderCardMovie category={id} />
      <SliderCardMovie category={id} page={2} />
    </section>
  )
}
