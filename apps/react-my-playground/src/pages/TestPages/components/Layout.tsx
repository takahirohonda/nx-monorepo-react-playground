import { Outlet } from 'react-router-dom'

import { Header } from './Header'

export const Layout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  )
}
