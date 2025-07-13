import React, { useState } from 'react';
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import img1 from '../../assets/photos/description.png';
import img2 from "../../assets/photos/product2.png";
import img3 from "../../assets/photos/product3.png";
import img4 from "../../assets/photos/product4.png";
import img5 from "../../assets/photos/product5.png";
import img6 from "../../assets/photos/product6.png";
import img7 from "../../assets/photos/product7.png";
import img8 from "../../assets/photos/product8.jpg";

const RelatedProduct = () => {
  const [showAll, setShowAll] = useState(false);

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

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
      <h1 className='font-poppins font-medium text-3xl sm:text-4xl text-center text-[#000] mb-12'>
        Related Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleProducts.map((item, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-md overflow-hidden shadow-sm transition hover:shadow-md"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[rgba(137,137,137,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-3">
              <button className="bg-white text-[#B88E2F] text-sm font-semibold px-6 py-2 rounded-sm shadow hover:bg-[#f0f0f0] transition">
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

            {/* Badge */}
            {item.badge && (
              <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#E97171] text-white text-[11px] font-bold flex items-center justify-center z-20">
                {item.badge}
              </span>
            )}

            {/* Content */}
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

      {/* Show More / Show Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#B88E2F] hover:bg-[#a47d27] text-white font-semibold px-6 py-2 rounded transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default RelatedProduct;
