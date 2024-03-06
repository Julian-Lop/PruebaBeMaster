import React from 'react'

export const InputForm = ({props}) => {

  const { id, type, text, inputOpt  } = props

  return (
    <div className='InputForm'>
      <input
        type={type}
        name={id}
        id={id}
        className='Input'
        placeholder='a'
        {...inputOpt}
      />
      <label
        htmlFor={id}
        className='Label'
      >{text}</label>
    </div>
  )
}
