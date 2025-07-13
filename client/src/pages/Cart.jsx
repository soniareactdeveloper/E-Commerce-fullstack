import React from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import CartBanner from '../components/Cart/CartBanner'
import ProductQuality from '../components/shop/ProductQuality'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
      <ShopBanner title="Cart" />
      <CartBanner/>
      <ProductQuality/>
      <Footer/>

    </div>
  )
}

export default Cart