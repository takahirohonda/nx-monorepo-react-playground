import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { worker } from './mock/browser'
import { routeConfig } from './pages/routes/roots'
import { ApolloProviderReact } from '@libs/utils-apollo-provider'
import { TestPersistCacheApolloProvider } from './pages/Shop/TestPersistCacheApolloProvider'

// For mock service worker
// if (process.env.NODE_ENV === 'development') {
//   worker.start()
// }

const router = createBrowserRouter([...routeConfig], {
  // Need better logic to set basename for github page
  // basename: '/react-my-playground',
})

const GRAPHQL_URI = import.meta.env.VITE_BIGCOMMERCE_GRAPHQL_URI
const API_TOKEN = import.meta.env.VITE_API_TOKEN

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// This seems to create 2 apollo clients, but seems to work...
root.render(
  <React.StrictMode>
    <ApolloProviderReact uri={GRAPHQL_URI} token={API_TOKEN}>
      <RouterProvider router={router} />
    </ApolloProviderReact>
  </React.StrictMode>
)

// This works with local storage sync because there is only one client instance
// root.render(
//   <React.StrictMode>
//     <TestPersistCacheApolloProvider>
//       <RouterProvider router={router} />
//     </TestPersistCacheApolloProvider>
//   </React.StrictMode>
// )
