import React, { useState } from 'react'
import image from '../../assets/logo-BfNap0Pe.png'

export default function NavBar() {
  const [show, setShow] = useState(null)

  function ShowNavBar(){
    if(show == null){
      setShow('block')
    }else{
      setShow(null)
    }
  }
  function CloseNavBar(){
    if(show == 'block'){
      setShow(null)
    }
  }
    
  return (
    <>
    <button onClick={ShowNavBar} className='toggel'><i class="fa-solid fa-bars"></i></button>
    <aside className={`${show}`}>
      <button onClick={CloseNavBar}><i class="fa-solid fa-x"></i></button>
      <img src={image} alt="Logo" />
      <ul>
        <li><i class="fa-solid fa-utensils"></i><span>Meals</span></li>
        <li><i class="fa-solid fa-utensils"></i><span>Ingredients</span></li>
        <li><i class="fa-solid fa-utensils"></i><span>Area</span></li>
      </ul>
      </aside>
    </>
  )
}
