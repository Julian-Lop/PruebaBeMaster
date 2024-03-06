import  { createBrowserRouter, redirect } from "react-router-dom"

// * Pages
import { CategoryPage, HomePage, LoginPage, NotFoundPage, RegisterPage } from "../pages"

// * Components
import { AuthLayout } from "../components"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Layout } from "../components/layouts/Layout";


// ? Middleware for private routes with Firebase Authentication
export function isAuthenticated() {
  return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        unsubscribe();
          resolve(user);
      }, error => {
          unsubscribe();
          reject(error);
      });
  });
}

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