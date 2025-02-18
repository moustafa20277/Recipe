import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    
  return (
    <div className='not'>
      <h1>404</h1>
      <h2>page not found</h2>
      <Link to={'/'}>Go To Home</Link>
    </div>
  )
}
