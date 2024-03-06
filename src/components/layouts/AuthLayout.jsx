import React, { useEffect } from 'react'

// * React-router
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {

  return (
    <div className='AuthLayout'>
      <Outlet/>
    </div>
  )
}
