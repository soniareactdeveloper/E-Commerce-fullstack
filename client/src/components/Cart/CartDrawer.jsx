import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button onClick={onClose}>
          <IoClose size={24} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-6 space-y-6 overflow-y-auto max-h-[calc(100%-220px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
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
                onClick={() => item.onRemove(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <IoClose size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Subtotal</span>
          <span className="text-[#B88E2F] font-bold">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              navigate("/cart");
            }}
            className="flex-1 border border-black rounded-full py-2"
          >
            Cart
          </button>

          <button
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
            className="flex-1 border border-black bg-black text-white rounded-full py-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
