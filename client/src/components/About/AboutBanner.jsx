import React from "react";
import img1 from "../../assets/photos/product2.png";
import img2 from "../../assets/photos/product2.png";
import img3 from "../../assets/photos/product3.png";
import img4 from "../../assets/photos/product4.png";
import img5 from "../../assets/photos/product5.png";


const AboutBanner = () => {
  return (
    <div className="px-[100px] sm:px-[50px] mt-[63px] py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">About Our Store</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Discover who we are and why our customers love shopping with us.
          From premium furniture to fast shipping and excellent support—we’re
          here to elevate your experience.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">
        <img
          src={img1}
          alt="warehouse"
          className="w-full h-[300px] object-cover rounded-md"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, our store began with a simple mission: to bring
            high-quality home products directly to our customers with style and
            simplicity. We source globally and deliver locally—serving thousands
            of happy households every year.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Free & Fast Shipping</li>
            <li>Premium Quality Products</li>
            <li>Secure Online Payments</li>
            <li>Friendly Customer Support</li>
            <li>30-Day Return Policy</li>
          </ul>
        </div>
        <img
          src={img2}
          alt="delivery"
          className="w-full h-[300px] object-cover rounded-md"
        />
      </div>

      {/* Trusted by Customers */}
      <div className="text-center my-12">
        <h3 className="text-2xl font-semibold mb-4">Trusted by 10,000+ Happy Customers</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our customer satisfaction speaks volumes. We take pride in delivering
          beyond expectations.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-10">
        <img
          src={img3}
          alt="img1"
          className="w-full h-40 object-cover rounded"
        />
        <img
          src={img4}
          alt="img2"
          className="w-full h-40 object-cover rounded"
        />
        <img
          src={img5}
          alt="img3"
          className="w-full h-40 object-cover rounded"
        />
        <img
          src={img1}
          alt="img4"
          className="w-full h-40 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
