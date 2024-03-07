import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarMobile = ({activeOptMenu }) => {
  

  return (
    <nav className='NavbarMobile'>
      <ul>
        <li>
          <NavLink to="/">
            <i className='icon icon-home'></i>
          </NavLink>
          </li>
        <li>
          <NavLink to="/category/1">
            <i className='icon icon-search'></i>
          </NavLink>
          </li>
        <li>
          <NavLink to="/category/2">
            <i className='icon icon-download'></i>
          </NavLink>
          </li>
        <li onClick={activeOptMenu}>
          <img src="/images/spiderman.webp" alt='profile' className='Avatar' />
        </li>
      </ul>
    </nav>
  )
}
