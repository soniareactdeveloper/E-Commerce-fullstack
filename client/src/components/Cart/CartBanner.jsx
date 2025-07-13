import { FaTrash } from "react-icons/fa";
import description from '../../assets/photos/description.png';

const CartBanner = () => {
  return (
    <div className="p-4 sm:p-6 mt-[72px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Product Table */}
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-full">
              <thead className="bg-[#f6ede4] text-gray-700 text-xs sm:text-sm uppercase">
                <tr>
                  <th className="p-3 sm:p-4">Product</th>
                  <th className="p-3 sm:p-4">Price</th>
                  <th className="p-3 sm:p-4">Quantity</th>
                  <th className="p-3 sm:p-4">Subtotal</th>
                  <th className="p-3 sm:p-4"></th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm">
                <tr className="border-t border-gray-200">
                  <td className="p-2 sm:p-4 flex items-center gap-3">
                    <img
                      src={description}
                      alt="sofa"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
                    />
                    <span className="text-sm sm:text-base">Asgaard Sofa</span>
                  </td>
                  <td className="p-2 sm:p-4 text-gray-600 text-sm sm:text-base">Rs. 250,000.00</td>
                  <td className="p-2 sm:p-4">
                    <input
                      type="number"
                      defaultValue={1}
                      min="1"
                      className="w-12 border border-gray-300 rounded px-2 py-1 text-center text-sm sm:text-base"
                    />
                  </td>
                  <td className="p-2 sm:p-4 text-gray-900 font-medium text-sm sm:text-base">
                    Rs. 250,000.00
                  </td>
                  <td className="p-2 sm:p-4 text-center">
                    <button className="text-red-500 hover:text-red-700 text-sm sm:text-base">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#f6ede4] p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between text-gray-700 mb-2 text-sm sm:text-base">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-base sm:text-lg font-semibold text-[#d18800] mb-6">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <button className="w-full bg-white border border-black rounded-full py-2 text-sm sm:text-base font-medium hover:bg-black hover:text-white transition">
            Check Out
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartBanner;

