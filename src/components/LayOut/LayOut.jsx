import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function LayOut() {
    
  return (
    <>
    <NavBar/>
    <div className="container">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
