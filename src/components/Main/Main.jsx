import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Main() {
  const navigate = useNavigate()

  function sayHi(event){
    const page = event.target.value
    if (page == 'All') {
      navigate('/')
    }else{
      navigate('/' + page)
    }
  }
  
  
  
  return (
    <nav>
      <h1>Learn, Cook, Eat Your Food</h1>
      <ul>
      <li><NavLink to={'/'}>All</NavLink></li>
      <li><NavLink to={'/Beef'}>Beef</NavLink></li>
      <li><NavLink to={'/Breakfast'}>Breakfast</NavLink></li>
      <li><NavLink to={'/Chicken'}>chicken</NavLink></li>
      <li><NavLink to={'/Dessert'}>Dessert</NavLink></li>
      <li><NavLink to={'/Goat'}>Goat</NavLink></li>
      <li><NavLink to={'/Lamb'}>Lamb</NavLink></li>
      <li><NavLink to={'/Miscellaneous'}>Miscellaneous</NavLink></li>
      <li><NavLink to={'/Pasta'}>Pasta</NavLink></li>
      <li><NavLink to={'/Pork'}>Pork</NavLink></li>
      <li><NavLink to={'/Seafood'}>Seafood</NavLink></li>
      <li><NavLink to={'/Side'}>Side</NavLink></li>
      <li><NavLink to={'/Starter'}>Starter</NavLink></li>
      <li><NavLink to={'/Vegan'}>Vegan</NavLink></li>
      <li><NavLink to={'/Vegetarian'}>Vegetarian</NavLink></li>
    </ul>
    <select onChange={sayHi}>
      <option value="All"><NavLink to={'/'}>All</NavLink></option>
      <option value="Beef"><NavLink to={'/Beef'}>Beef</NavLink></option>
      <option value="Breakfast"><NavLink to={'/Breakfast'}>Breakfast</NavLink></option>
      <option value="chicken"><NavLink to={'/Chicken'}>Chicken</NavLink></option>
      <option value="Dessert"><NavLink to={'/Dessert'}>Dessert</NavLink></option>
      <option value="Goat"><NavLink to={'/Goat'}>Goat</NavLink></option>
      <option value="Lamb"><NavLink to={'/Lamb'}>Lamb</NavLink></option>
      <option value="Miscellaneous"><NavLink to={'/Miscellaneous'}>Miscellaneous</NavLink></option>
      <option value="Pasta"><NavLink to={'/Pasta'}>Pasta</NavLink></option>
      <option value="Pork"><NavLink to={'/Pork'}>Pork</NavLink></option>
      <option value="Seafood"><NavLink to={'/Seafood'}>Seafood</NavLink></option>
      <option value="Side"><NavLink to={'/Side'}>Side</NavLink></option>
      <option value="Starter"><NavLink to={'/Starter'}>Starter</NavLink></option>
      <option value="Vegan"><NavLink to={'/Vegan'}>Vegan</NavLink></option>
      <option value="Vegetarian"><NavLink to={'/Vegetarian'}>Vegetarian</NavLink></option>
    </select>
    </nav>
  )
}
