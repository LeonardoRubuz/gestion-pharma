import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import ProductsList from './pages/productsList.jsx'
import Products from './pages/products.jsx'
import SingleProduct from './pages/singleProduct.jsx';
import datas from '../public/data.json'
import { PlacesContext } from './contexts/PlacesContext.jsx'
import Places from './components/Places.jsx'
import { useState } from 'react'


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Login /> 
    },
    {
      path : "/home",
      element : <Home /> 
    },
    {
      path : "/:address",
      element : <Places/> 
    },
    {
      path : "/about",
      element : <About /> 
    },
    {
      path : "/products",
      element : <Products/>,
      children : [
          {
            path : "",
            element : <ProductsList /> 
          },
          {
            path : ":id",
            element : <SingleProduct/> 
          },
      ] 
    }
  ]
)


function App() {
  const [places, setPlaces] = useState(datas.places)
  function handleClick(name, rateStatus) {
    places.indexOf()
    //places.push({})
    setPlaces(places)
    console.log(places);
  }
  
  return (
    <PlacesContext.Provider value={{places, handleClick}}>
      <RouterProvider router={router} />
    </PlacesContext.Provider>
  )
}

export default App
