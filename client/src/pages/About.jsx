import React from "react";
import ShopBanner from "../components/shop/ShopBanner";
import AboutBanner from "../components/About/AboutBanner";
import ProductQuality from "../components/shop/ProductQuality";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <ShopBanner title="About" />
      <AboutBanner />
      <ProductQuality />
      <Footer />
    </div>
  );
};

export default About;
