import React from 'react'

// * Components
import { FormAuth } from '../../components/Auth/FormAuth'

export const RegisterPage = () => {
  return (
    <div className='Login'>
      <i className='icon icon-logo-disney'></i>
      <FormAuth typeForm='register' />
    </div>
  )
}

