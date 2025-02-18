import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function MealDetials() {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false);

  async function getMeal() {
    setLoading(true)
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(data.meals);
      setDetails(data.meals)

    } catch (error) {
      setDetails(null)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getMeal()
  }, [])

  return (
    <section className='Detials'>
      {loading ? <div className='parent'>
        <Loader />
      </div>
        :
        <>
        {details.map((data)=><>
          <h1>{data.strMeal}</h1>
          <div className="row">
            <div className='main'>
              <figure>
                <img src={data.strMealThumb} alt={data.strMeal} />
              </figure>
              <div className='links'>
                <Link target='_blank' to={data.strYoutube}><i class="fa-brands fa-youtube"></i> youtube</Link>
                <Link target='_blank' to={data.strSource}><i class="fa-solid fa-globe"></i> source</Link>
              </div>
            </div>
            <div className='desc'>
              <p>{data.strInstructions}</p>
            </div>
            <div className='Ingre'>
              <div className="inner">
                <h2>Ingredients</h2>
                <ul>
                  <li>{data.strIngredient1} <span>{data.strMeasure1}</span></li>
                  <li>{data.strIngredient2} <span>{data.strMeasure2}</span></li>
                  <li>{data.strIngredient3} <span>{data.strMeasure3}</span></li>
                  <li>{data.strIngredient4} <span>{data.strMeasure4}</span></li>
                  <li>{data.strIngredient5} <span>{data.strMeasure5}</span></li>
                  <li>{data.strIngredient6} <span>{data.strMeasure6}</span></li>
                  <li>{data.strIngredient7} <span>{data.strMeasure7}</span></li>
                  <li>{data.strIngredient8} <span>{data.strMeasure8}</span></li>
                  <li>{data.strIngredient9} <span>{data.strMeasure9}</span></li>
                  <li>{data.strIngredient10} <span>{data.strMeasure10}</span></li>
                  <li>{data.strIngredient11} <span>{data.strMeasure11}</span></li>
                  <li>{data.strIngredient12} <span>{data.strMeasure12}</span></li>
                  <li>{data.strIngredient13} <span>{data.strMeasure13}</span></li>
                  <li>{data.strIngredient14} <span>{data.strMeasure14}</span></li>
                  <li>{data.strIngredient15} <span>{data.strMeasure15}</span></li>
                  <li>{data.strIngredient16} <span>{data.strMeasure16}</span></li>
                  <li>{data.strIngredient17} <span>{data.strMeasure17}</span></li>
                  <li>{data.strIngredient18} <span>{data.strMeasure18}</span></li>
                  <li>{data.strIngredient19} <span>{data.strMeasure19}</span></li>
                  <li>{data.strIngredient20} <span>{data.strMeasure20}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </>)}
        </>
        
      }
    </section>
  )
}
