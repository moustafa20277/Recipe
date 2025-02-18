import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../Main/Main'
import Loader from '../Loader/Loader'
import useFetch from '../hooks/useFetch'


export default function Home() {
    const {list, loading} = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    
    
    
  return (
    <>
    {loading? <div className='parent'>
      <Loader/>
      </div>
    :
    <>
    <Main/>
    <section>
      {list?.map((data)=><div key={data.id} className='card'>
        <div className="inner">
        <figure>
          {data.strMealThumb?<img src={data.strMealThumb} alt={data.strMeal} />
          :<></>}
        </figure>
        <figcaption>
          <h2>{data.strMeal}</h2>
          <h4><i class="fa-solid fa-earth-americas"></i>{data.strArea}</h4>
          <Link to={`/mealdetials/${data.idMeal}`}>view recipe</Link>
        </figcaption>
        </div>
      </div>)}
    </section>
    </>
  }
    </>
  )
}
