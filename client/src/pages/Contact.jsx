import React from "react";
import ContactBanner from "../components/Contact/ContactBanner";
import ShopBanner from "../components/shop/ShopBanner";
import ProductQuality from "../components/shop/ProductQuality";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <ShopBanner title="Contact" />
      <ContactBanner/>
      <ProductQuality />
      <Footer/>
    </div>
  );
};

export default Contact;
