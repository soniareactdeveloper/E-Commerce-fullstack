import React, { useState } from "react";
import { MdViewList, MdViewModule } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const products = new Array(12).fill({
  name: "Cubit Smart Watch",
  sku: "FROX-13563",
  price: "$579.28",
  status: "Active",
  qty: 556,
  rating: 5,
  sales: "186 / 2058",
  image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg", // Replace with actual images
});

const AllProducts = () => {
  const [view, setView] = useState("list"); // list or grid

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
          <p className="text-sm text-gray-500">Home &gt; All Products</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${
              view === "list" ? "bg-indigo-500 text-white" : "bg-white text-gray-600"
            } hover:shadow transition`}
          >
            <MdViewList size={20} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${
              view === "grid" ? "bg-indigo-500 text-white" : "bg-white text-gray-600"
            } hover:shadow transition`}
          >
            <MdViewModule size={20} />
          </button>
        </div>
      </div>

      {/* Product List View */}
      {view === "list" ? (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">QTY</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Sales</th>
                <th className="px-4 py-3">⋯</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img src={p.image} alt="product" className="w-12 h-12 rounded object-contain" />
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-gray-400">Smart wearable product</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">{p.sku}</td>
                  <td className="px-4 py-3">{p.price}</td>
                  <td className="px-4 py-3 text-green-500 font-medium">● {p.status}</td>
                  <td className="px-4 py-3">{p.qty}</td>
                  <td className="px-4 py-3 text-yellow-500">
                    {[...Array(p.rating)].map((_, j) => (
                      <FaStar key={j} size={12} className="inline-block mr-0.5" />
                    ))}
                  </td>
                  <td className="px-4 py-3">{p.sales}</td>
                  <td className="px-4 py-3 text-center text-gray-400">⋮</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Product Grid View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition flex flex-col items-center text-center"
            >
              <img src={p.image} alt="product" className="w-20 h-20 object-contain mb-3" />
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-xs text-gray-500 mb-1">{p.sku}</p>
              <p className="text-indigo-600 font-bold mb-1">{p.price}</p>
              <p className="text-sm text-green-500 mb-1">● {p.status}</p>
              <p className="text-sm mb-1">Qty: {p.qty}</p>
              <div className="text-yellow-500 mb-1">
                {[...Array(p.rating)].map((_, j) => (
                  <FaStar key={j} size={12} className="inline-block mr-0.5" />
                ))}
              </div>
              <p className="text-sm text-gray-400">{p.sales}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-2 flex-wrap text-sm font-medium">
        <button className="px-3 py-1 bg-indigo-500 text-white rounded-full">1</button>
        <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-full">2</button>
        <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-full">3</button>
        <span className="px-2 text-gray-400">...</span>
        <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-full">Next</button>
      </div>
    </div>
  );
};

export default AllProducts;
