import React, { useEffect, useState } from 'react'

// * React-router
import { Outlet } from 'react-router-dom'

// * Redux
import { useDispatch } from 'react-redux'
// * Actions
import { getWatchList } from '../../app/features/movies/asyncThunks'

// * Componets
import { Header } from '../home/Header'
import { ProfileBar } from '../home/ProfileBar'
import { NavbarMobile } from '../home/NavbarMobile'


export const Layout = () => {

  const dispatch = useDispatch()

  const [activeOptMenu, setActiveOptMenu] = useState(false)

  useEffect(() => {
    dispatch(getWatchList())
  },[])

  return (
    <div className='Layout'>
      <Header />
      <ProfileBar activeMobile={activeOptMenu} />
      <main>
        <Outlet/>
      </main>
      <NavbarMobile activeOptMenu={() => setActiveOptMenu(!activeOptMenu)} />
    </div>
  )
}
