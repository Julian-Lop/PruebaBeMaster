import  { createBrowserRouter, redirect } from "react-router-dom"

// * Pages
import { CategoryPage, HomePage, LoginPage, NotFoundPage, RegisterPage } from "../pages"

// * Components
import { AuthLayout } from "../components"
import { Layout } from "../components/layouts/Layout";
import { MoviePage } from "../pages/MoviePage";

// * Action
import { isAuthenticated } from "../app/features/auth/asyncThunks";

// * Routes
const router = createBrowserRouter(
  [
    // ? Private Routes 
    {
      path: '/',
      loader: async () => {
        const res = await isAuthenticated()
        if (res) return true
        else throw redirect('/auth/login')
      },
      element: <Layout/>  ,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: '',
          loader: async () => {
            const res = await isAuthenticated()
            if (res) return true
            else throw redirect('/auth/login')
          },
          element: <HomePage />
        },
        {
          path: '/category/:id',
          loader: async () => {
            const res = await isAuthenticated()
            if (res) return true
            else throw redirect('/auth/login')
          },
          element: <CategoryPage />
        },
        {
          path: '/movie/:id',
          loader: async () => {
            const res = await isAuthenticated()
            if (res) return true
            else throw redirect('/auth/login')
          },
          element: <MoviePage />
        },
      ]
    },

    // ? Public Routes
    {
      path: '/auth',
      loader: async () => {
        const res = await isAuthenticated()
        if (!res) return true
        else throw redirect('/')
      },
      element: <AuthLayout/>,
      children: [
        {
          path: '/auth/login',
          element: <LoginPage/>
        },
        {
          path: '/auth/register',
          element: <RegisterPage/>
        }
      ]
    }
  ]
)

export {router}