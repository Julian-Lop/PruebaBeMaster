import React, { useState } from 'react'

// * React-router
import { Outlet } from 'react-router-dom'

// * Componets
import { Header } from '../home/Header'
import { ProfileBar } from '../home/ProfileBar'
import { NavbarMobile } from '../home/NavbarMobile'

export const Layout = () => {

  const [activeOptMenu, setActiveOptMenu] = useState(false)

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
