import React from "react";

const CheckOutBanner = () => {
  return (
    <div className="px-8 md:px-10 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="md:col-span-2 border p-2 rounded"
            />
            <select className="md:col-span-2 border p-2 rounded">
              <option>Sri Lanka</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
            <input
              type="text"
              placeholder="Street address"
              className="md:col-span-2 border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="md:col-span-2 border p-2 rounded"
            />
            <select className="md:col-span-2 border p-2 rounded">
              <option>Western Province</option>
              <option>Central Province</option>
            </select>
            <input
              type="text"
              placeholder="ZIP code"
              className="md:col-span-2 border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="md:col-span-2 border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              className="md:col-span-2 border p-2 rounded"
            />
            <textarea
              placeholder="Additional information"
              rows="3"
              className="md:col-span-2 border p-2 rounded"
            ></textarea>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-[#d18800] mt-2 mb-6">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>

          {/* Payment Methods */}
          <div className="mb-6 space-y-4">
            <label className="flex items-start gap-2">
              <input
                type="radio"
                name="payment"
                className="mt-1"
                defaultChecked
              />
              <div>
                <span className="font-medium">Direct Bank Transfer</span>
                <p className="text-sm text-gray-600 mt-1">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="payment" className="mt-1" />
              Cash On Delivery
            </label>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-600 mb-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-medium">privacy policy</span>.
          </p>

          {/* Place Order Button */}
          <button className="w-full border border-black text-black py-2 rounded-full font-medium hover:bg-black hover:text-white transition">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutBanner;
