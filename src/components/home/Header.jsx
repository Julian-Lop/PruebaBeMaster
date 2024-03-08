import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='Header'>
      <nav className='Navigation'>
        <ul>

          <div className='LogoHeader'>
            <i className='icon icon-logo-disney'></i>
          </div>

          <li>
            <Link to='/'>
              <p>Inicio</p>
            </Link>
          </li>

          <li>
            <Link to=''>
              <p>Busqueda</p>
            </Link>
          </li>

          <li>
            <Link to='/watchlist'>
              <p>Mi lista</p>
            </Link>
          </li>

          <li>
            <Link to='/category/originals'>
              <p>Originales</p>
            </Link>
          </li>

          <li>
            <Link to='/'>
              <p>Películas</p>
            </Link>
          </li>

          <li>
            <Link to='/'>
              <p>Series</p>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}
