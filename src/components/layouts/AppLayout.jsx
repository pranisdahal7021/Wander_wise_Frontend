import React from 'react'
import AppNavbar from '../common/AppNavbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <main>
        <AppNavbar/>
        <Outlet/>  
    </main>
  )
}

export default AppLayout