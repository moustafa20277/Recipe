import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import Beef from './components/Beef/Beef'
import BreakFast from './components/BreakFast/BreakFast'
import Chicken from './components/Chicken/Chicken'
import Dessert from './components/Dessert/Dessert'
import Goat from './components/Goat/Goat'
import Lamb from './components/Lamb/Lamb'
import Miscellaneous from './components/Miscellaneous/Miscellaneous'
import Pasta from './components/Pasta/Pasta'
import Pork from './components/Pork/Pork'
import Seafood from './components/Seafood/Seafood'
import Side from './components/Side/Side'
import Starter from './components/Starter/Starter'
import Vegan from './components/Vegan/Vegan'
import Vegetarian from './components/Vegetarian/Vegetarian'
import NotFound from './components/NotFound/NotFound'
import MealDetials from './components/MealDetials/MealDetials'

function App() {
  const router= createBrowserRouter([
    {
      path:'' , element:<LayOut/>,children:[
        {index:true,  element: <Home/>,},
        {path: 'Beef',  element: <Beef/>,},
        {path: 'Breakfast',  element: <BreakFast/>,},
        {path: 'Chicken',  element: <Chicken/>,},
        {path: 'Dessert',  element: <Dessert/>,},
        {path: 'Goat',  element: <Goat/>,},
        {path: 'Lamb',  element: <Lamb/>,},
        {path: 'Miscellaneous',  element: <Miscellaneous/>,},
        {path: 'Pasta',  element: <Pasta/>,},
        {path: 'Pork',  element: <Pork/>,},
        {path: 'Seafood',  element: <Seafood/>,},
        {path: 'Side',  element: <Side/>,},
        {path: 'starter',  element: <Starter/>,},
        {path: 'Vegan',  element: <Vegan/>,},
        {path: 'Vegetarian',  element: <Vegetarian/>,},
        {path: 'mealdetials/:id',  element: <MealDetials/>,},
        {path: '*',  element: <NotFound/>,},
      ]
    }
  ])
    return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
