import React from 'react'
import {  Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainProvider from './contexts/mainContext.js'
const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
   
  )
}

export default Layout