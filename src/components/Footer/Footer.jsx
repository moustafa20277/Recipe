import React from 'react'
import image from '../../assets/logo-BfNap0Pe.png'
import { Link } from 'react-router-dom'


export default function Footer() {

  return (
    <footer>
      <div>
        <figure>
          <img src={image} alt="" />
          <Link to={'/'}>Recipe</Link>
        </figure>
        <figcaption>
          <span>Route</span>
        </figcaption>
      </div>
      <p>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </footer>
  )
}
