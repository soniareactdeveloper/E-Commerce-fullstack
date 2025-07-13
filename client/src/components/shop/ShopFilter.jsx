import { useState } from "react";
import { useNavigate } from "react-router";
import { FiFilter } from "react-icons/fi";
import { BsGridFill, BsList } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

// Image imports
import img1 from "../../assets/photos/product1.png";
import img2 from "../../assets/photos/product2.png";
import img3 from "../../assets/photos/product3.png";
import img4 from "../../assets/photos/product4.png";
import img5 from "../../assets/photos/product5.png";
import img6 from "../../assets/photos/product6.png";
import img7 from "../../assets/photos/product7.png";
import img8 from "../../assets/photos/product8.jpg";

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

const ShopFilterBar = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("grid");
  const [showCount, setShowCount] = useState(8);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / showCount);
  const currentProducts = products.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between bg-[#FAF7F3] px-6 py-4 border-t border-b border-gray-200 text-sm text-gray-700 font-medium select-none">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <FiFilter size={18} />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${
              view === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            aria-label="Grid view"
          >
            <BsGridFill size={18} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${
              view === "list" ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
            aria-label="List view"
          >
            <BsList size={18} />
          </button>
        </div>

        <div className="hidden sm:block">
          Showing {(currentPage - 1) * showCount + 1}–
          {Math.min(currentPage * showCount, products.length)} of{" "}
          {products.length} results
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <label htmlFor="showCount">Show</label>
            <select
              id="showCount"
              value={showCount}
              onChange={(e) => {
                setShowCount(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-16 rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            >
              {[4, 8, 16, 32].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sortBy">Sort by</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-36 rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            >
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`grid ${
            view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-8 mt-14`}
        >
          {currentProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/description")}
              className="relative group bg-white rounded-md overflow-hidden shadow-sm transition hover:shadow-md cursor-pointer"
            >
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

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#FAF7F3] text-black hover:bg-[#eee]"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-[#FAF7F3] text-black hover:bg-[#eee] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopFilterBar;
