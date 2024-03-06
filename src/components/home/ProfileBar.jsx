import React, { useEffect, useState } from 'react'

// * React-router
import { useNavigate } from 'react-router-dom'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
// * Actions
import { signoutUser } from '../../app/features/auth/asyncThunks'

const profiles = [
  {
    avatar: '/images/spiderman.jpg',
    name: 'User2'
  },
  {
    avatar: '/images/spiderman.jpg',
    name: 'User2'
  },
]

export const ProfileBar = ({activeMobile}) => {
  // ? User state
  const auth = useSelector(state => state.auth)

  const [user, setUser] = useState('')

  // ? For redirect
  const navigate = useNavigate()

  // ? Dispatch actions
  const dispatch = useDispatch()

  // ? Singout from Firebsae Authentication
  const signOut = () => {
    dispatch(signoutUser())
    navigate('/auth/login')
  }

  useEffect(() => {
    if (auth.email) {
      setUser(auth.email)
    }
  },[auth])

  return (
    <div className={activeMobile ? 'Profile mobile' : 'Profile'}>
      
      <div className='Profile-selected'>
        <label>{user}</label>
        <img src="/images/spiderman.jpg" alt="Avatar" className='Avatar' />
      </div>

      <nav className='Profile-nav'>

        <ul className='Profile-nav-profiles'>
          {profiles.map((profile) => (
            <li key={profile.name}>
              <img src={profile.avatar} alt="Avatar" className='Avatar' />
              <label>{profile.name}</label>
            </li>
          ))}
          <li>
            <img src="/images/spiderman.jpg" alt="Avatar" className='Avatar' />
            <label>Crear Perfil</label>
          </li>
        </ul>

        <ul className='Profile-nav-options'>
          <li>
            <label>
              Editar perfiles
            </label>
          </li>
          <li>
            <label>
              Ajustes de la aplicación
            </label>
          </li>
          <li>
            <label>
              Cuenta
            </label>
          </li>
          <li>
            <label>
              Ayuda
            </label>
          </li>
          <li onClick={signOut}>
            <label>
              Cerrar sesión
            </label>
          </li>
            
        </ul>

      </nav>

    </div>
  )
}
