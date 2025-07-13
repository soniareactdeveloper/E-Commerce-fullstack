import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Images
import img1 from "../assets/photos/product1.png";
import img2 from "../assets/photos/product2.png";
import img3 from "../assets/photos/product3.png";
import img4 from "../assets/photos/product4.png";
import img5 from "../assets/photos/product5.png";
import img6 from "../assets/photos/product6.png";
import img7 from "../assets/photos/product7.png";
import img8 from "../assets/photos/product8.jpg";

const Product = () => {
  const navigate = useNavigate();
  const [showCount, setShowCount] = useState(4);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      src: img1,
      label: "Modern Sofa",
      description: "Comfortable modern seating",
      price: "$99.99",
      discount: "$79.99",
      badge: "-20%",
    },
    {
      src: img2,
      label: "Dining Table",
      description: "Sturdy oak design",
      price: "$89.99",
      discount: null,
    },
    {
      src: img3,
      label: "Queen Bed Frame",
      description: "Elegant strong build",
      price: "$79.99",
      discount: "$59.99",
      badge: "-25%",
    },
    {
      src: img4,
      label: "Office Chair",
      description: "Ergonomic and adjustable",
      price: "$69.99",
      discount: null,
    },
    {
      src: img5,
      label: "Bookshelf",
      description: "Spacious multi-tier shelf",
      price: "$59.99",
      discount: "$39.99",
    },
    {
      src: img6,
      label: "TV Stand",
      description: "Sleek media unit",
      price: "$49.99",
      discount: "$29.99",
      badge: "-40%",
    },
    {
      src: img7,
      label: "Coffee Table",
      description: "Minimalist wood finish",
      price: "$39.99",
      discount: null,
    },
    {
      src: img8,
      label: "Nightstand",
      description: "Compact with storage",
      price: "$29.99",
      discount: "$19.99",
    },
  ];

  const visibleProducts = products.slice(0, showCount);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    const priceValue = parseFloat(
      (product.discount || product.price).replace("$", "")
    );

    const existingIndex = cartItems.findIndex((i) => i.name === product.label);

    if (existingIndex >= 0) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          image: product.src,
          name: product.label,
          price: priceValue,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const handleRemoveItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center text-[#2c2c2c] mb-10">
        Our Product
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/description")}
            className="relative group bg-white rounded-md overflow-hidden shadow-sm transition hover:shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 bg-[rgba(137,137,137,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-3">
              <button
                onClick={(e) => handleAddToCart(e, item)}
                className="bg-white text-[#B88E2F] text-sm font-semibold px-6 py-2 rounded-sm shadow hover:bg-[#f0f0f0] transition"
              >
                Add to cart
              </button>
              <div className="flex items-center gap-3 text-white text-sm font-semibold">
                <span className="flex items-center gap-1">
                  <IoMdShare /> Share
                </span>
                <span className="flex items-center gap-1">
                  <MdCompareArrows /> Compare
                </span>
                <span className="flex items-center gap-1">
                  <FaRegHeart /> Wishlist
                </span>
              </div>
            </div>

            {item.badge && (
              <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#E97171] text-white text-[11px] font-bold flex items-center justify-center z-20">
                {item.badge}
              </span>
            )}

            <div className="z-0 relative">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-[300px] object-cover rounded-md transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-[#2c2c2c]">
                  {item.label}
                </h3>
                <p className="font-poppins text-sm text-[#666] mt-1">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  {item.discount ? (
                    <>
                      <span className="text-[#000] font-bold text-base">
                        {item.discount}
                      </span>
                      <span className="text-gray-400 line-through font-medium text-sm">
                        {item.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#000] font-bold text-base">
                      {item.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      <div className="flex justify-center mt-10">
        {showCount < products.length ? (
          <button
            onClick={() => setShowCount(products.length)}
            className="bg-[#B88E2F] text-white px-6 py-2 rounded-md shadow hover:bg-[#a87c28] transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowCount(4)}
            className="bg-gray-200 text-black px-6 py-2 rounded-md shadow hover:bg-gray-300 transition"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>

        <div className="px-4 py-6 space-y-6 overflow-y-auto max-h-[calc(100%-220px)]">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">
                  {item.quantity} x{" "}
                  <span className="text-[#B88E2F] font-semibold">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <IoClose size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Subtotal</span>
            <span className="text-[#B88E2F] font-bold">
              Rs. {subtotal.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 border border-black rounded-full py-2">
              Cart
            </button>
            <button className="flex-1 border border-black bg-black text-white rounded-full py-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
