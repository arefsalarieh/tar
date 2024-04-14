import React from 'react'
import {Routes , Route , Navigate , useRouteError , createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet, Link } from 'react-router-dom'


const Aboute = () => {
  return (
    <div>
        <h2>Aboute</h2>
        <Outlet/>
        <Link to='tab1'>tab1</Link>
        <Link to='tab2'>tab2</Link>
    </div>
  )
}

export default Aboute