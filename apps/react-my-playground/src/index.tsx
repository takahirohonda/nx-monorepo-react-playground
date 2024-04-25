import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { worker } from './mock/browser'
import { routeConfig } from './pages/routes/roots'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const router = createBrowserRouter([...routeConfig], {
  // Need better logic to set basename for github page
  // basename: '/react-my-playground',
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
