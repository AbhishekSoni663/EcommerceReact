import React from 'react'
import ProductContainer from '../Components/ProductContainer'
import HeroSection from '../Components/HeroSection'
import SecondNavbar from '../Components/SecondNavbar'
const Home = () => {
  return (
    <> <HeroSection />
    <SecondNavbar/>
    <div className='container-fluid'>
      <ProductContainer/>
    </div>
    </>
  )
}

export default Home
