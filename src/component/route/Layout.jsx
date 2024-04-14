import React from 'react'
import {Routes , Route , Navigate , useRouteError , createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet, Link } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <div className="text-3xl font-bold underline bg-red-400">Header</div>
        <Outlet/>
        <div>Footer</div>
    </div>
  )
}

export default Layout