import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../Main/Main'
import Loader from '../Loader/Loader'

export default function Card({list, loading}) {

      
      
  return (
    <>
      {loading ? <div className='parent'>
        <Loader />
      </div>
        :
        <>
          <Main />
          <section>
            {list?.map((data) => <div key={data.id} className='card'>
              <div className="inner">
                <figure>
                  {data.strMealThumb ? <img src={data.strMealThumb} alt={data.strMeal} />
                    : <></>}
                </figure>
                <figcaption>
                  <h2>{data.strMeal}</h2>
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
