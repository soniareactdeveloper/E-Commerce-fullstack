import React, { useState } from "react";
import { Link } from "react-router"; 
import { FaFacebookF, FaInstagram, FaTwitter, FaStar } from "react-icons/fa";


import img1 from "../../assets/photos/product1.png";
import img2 from "../../assets/photos/product2.png";
import img3 from "../../assets/photos/product3.png";
import img4 from "../../assets/photos/product4.png";
import CartDrawer from "../Cart/CartDrawer";

const DescriptionBanner = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("gold");
  const [selectedSize, setSelectedSize] = useState("L");
  const [mainImage, setMainImage] = useState(img1);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    const newItem = {
      name: "Asgaard sofa",
      price: 250000,
      quantity,
      image: img1,
    };
    setCartItems((prev) => [...prev, newItem]);
    setCartOpen(true);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const productImages = [img1, img2, img3, img4];

  return (
    <div className="bg-[#fdfdfd] mb-[66px] relative">
      {/* Breadcrumb Navigation */}
      <div className="w-full mx-auto mb-8 text-sm bg-[#F9F1E7] p-5 text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:underline hover:text-[#B88E2F]">
          Home
        </Link>
        <span>&gt;</span>
        <Link to="/shop" className="hover:underline hover:text-[#B88E2F]">
          Shop
        </Link>
        <span>&gt;</span>
        <span className="text-black font-medium">Asgaard sofa</span>
      </div>

      <div className="max-w-7xl px-5 md:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Images */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {productImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover border rounded-md cursor-pointer hover:opacity-80 ${
                  mainImage === img ? "border-[#B88E2F] border-2" : ""
                }`}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={mainImage}
              alt="Main product"
              className="w-full h-auto max-h-[500px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-[#2c2c2c] mb-2">
            Asgaard sofa
          </h2>
          <p className="text-xl font-semibold text-[#B88E2F] mb-4">
            Rs. 250,000.00
          </p>

          <div className="flex items-center gap-2 mb-2 text-[#ffb21d]">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaStar className="text-gray-300" />
            <span className="text-sm text-[#333] ml-2">5 Customer Review</span>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-3">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex gap-3">
              {[
                { name: "purple", color: "#816DFA" },
                { name: "black", color: "#000000" },
                { name: "gold", color: "#B88E2F" },
              ].map((clr) => (
                <div
                  key={clr.name}
                  onClick={() => setSelectedColor(clr.name)}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor === clr.name
                      ? "border-[#B88E2F]"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: clr.color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center border rounded">
              <button
                className="px-3 py-1 text-xl"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 text-xl"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-[#B88E2F] text-white rounded shadow hover:bg-[#a57a1f] transition"
            >
              Add To Cart
            </button>

            <button className="px-6 py-2 border border-black text-black rounded hover:bg-gray-100">
              + Compare
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>SKU:</strong> SS001
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
            <p>
              <strong>Tags:</strong> Sofa, Chair, Home, Shop
            </p>
            <p className="flex items-center gap-3">
              <strong>Share:</strong>
              <FaFacebookF className="cursor-pointer hover:text-[#4267B2]" />
              <FaInstagram className="cursor-pointer hover:text-[#C13584]" />
              <FaTwitter className="cursor-pointer hover:text-[#1DA1F2]" />
            </p>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemoveItem}
      />
    </div>
  );
};

export default DescriptionBanner;
