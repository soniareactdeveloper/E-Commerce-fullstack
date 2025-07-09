import Footer from "../components/Footer"
import ProductQuality from "../components/shop/ProductQuality"
import ShopBanner from "../components/shop/ShopBanner"
import ShopFilter from "../components/shop/ShopFilter"

const Shop = () => {
  return (
    <section>
      <ShopBanner/>
      <ShopFilter/>
      <ProductQuality/>
      <Footer/>
    </section>
  )
}

export default Shop