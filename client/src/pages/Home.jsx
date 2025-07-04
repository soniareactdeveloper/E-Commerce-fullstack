import React from 'react'
import Banner from '../components/Banner'
import Browse from '../components/Browse'
import Product from '../components/Product'
import SliderWeb from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Browse/>
      <Product/>
      <SliderWeb/>
    </div>
  )
}

export default Home