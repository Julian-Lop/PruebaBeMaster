import React from 'react'
import ReactDOM from 'react-dom/client'

// * React-router
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'

// * Css
import './assets/styles/main.scss'
import { Provider } from 'react-redux'

// * Store
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
