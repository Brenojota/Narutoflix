import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import TelaPerfil from './components/TelaPerfil'
import PaginaPadrao from './pages/PaginaPadrao'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <TelaPerfil />
  },
  {
    path: '/perfil/naruto',
    element: <PaginaPadrao id={1} />
  },
  {
    path: '/perfil/sasuke',
    element: <PaginaPadrao id={2} />
  },
  {
    path: '/perfil/kakashi',
    element: <PaginaPadrao id={3} />
  },
  {
    path: '/perfil/sakura',
    element: <PaginaPadrao id={4} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
)
