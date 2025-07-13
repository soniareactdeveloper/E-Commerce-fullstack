import React from 'react'
import DescriptionBanner from '../components/description/DescriptionBanner'
import ProductDetails from '../components/description/ProductDetails'
import ReletedProduct from '../components/description/ReletedProduct'
import Footer from '../components/Footer'

const Description = () => {
  return (
    <div>
      <DescriptionBanner/>
      <ProductDetails/>
      <ReletedProduct/>
      <Footer/>
    </div>
  )
}

export default Description