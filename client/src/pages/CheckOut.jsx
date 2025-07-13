import React from 'react'
import ProductQuality from '../components/shop/ProductQuality'
import Footer from '../components/Footer'
import ShopBanner from '../components/shop/ShopBanner'
import CheckOutBanner from '../components/Checkout/CheckOutBanner'

const CheckOut = () => {
  return (
    <div>
      <ShopBanner title="Checkout" />
      <CheckOutBanner/>
      <ProductQuality/>
      <Footer/>
    </div>
  )
}

export default CheckOut