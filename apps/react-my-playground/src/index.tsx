import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import { worker } from './mock/browser'
import { routeConfig } from './pages/routes/roots'
import { ApolloProviderReact } from '@libs/utils-apollo-provider'

// if (process.env.NODE_ENV === 'development') {
//   worker.start()
// }

const router = createBrowserRouter([...routeConfig], {
  // Need better logic to set basename for github page
  // basename: '/react-my-playground',
})

export const BIGCOMMERCE_API_URL = import.meta.env.VITE_BIGCOMMERCE_API_URL ?? 'https://api.bigcommerce.com';
export const BIGCOMMERCE_CANONICAL_STORE_DOMAIN =
import.meta.env.VITE_BIGCOMMERCE_CANONICAL_STORE_DOMAIN
export const BIGCOMMERCE_GRAPHQL_API_ENDPOINT = `${BIGCOMMERCE_CANONICAL_STORE_DOMAIN}/graphql`;

const channelIdSegment =
  parseInt(import.meta.env.VITE_BIGCOMMERCE_CHANNEL_ID!) !== 1
    ? `-${import.meta.env.VITE_BIGCOMMERCE_CHANNEL_ID}`
    : '';
const domain = `https://store-${import.meta.env.VITE_BIGCOMMERCE_STORE_HASH!}${channelIdSegment}`;
const endpoint = `${domain}.${BIGCOMMERCE_GRAPHQL_API_ENDPOINT}`;

const GRAPHQL_URI = endpoint
const API_TOKEN = import.meta.env.VITE_API_TOKEN

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ApolloProviderReact uri={GRAPHQL_URI} token={API_TOKEN}>
    <RouterProvider router={router} />
    </ApolloProviderReact>
  </React.StrictMode>
)
