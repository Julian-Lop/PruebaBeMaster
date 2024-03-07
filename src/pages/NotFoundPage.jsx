import React, { useState } from 'react'

// * React router
import { useNavigate } from 'react-router-dom'


export const NotFoundPage = () => {

  const navigate = useNavigate()

  const [activeOptMenu, setActiveOptMenu] = useState(false)

  return (
    <div className='Layout'>
      <main className='Page-not-found'>
        <img src="/images/wazowski.webp" alt="404_page_not_found_image" />
        <div className='Page-not-found-info'>
          <h1>Oops! Página no econtrada.</h1>
          <div className='Page-not-found-btn-container'>
            <button
              className='Btn-one'
              onClick={() => navigate('/')}
            >Volver</button>
          </div>
        </div>
      </main>
    </div>
  )
}

