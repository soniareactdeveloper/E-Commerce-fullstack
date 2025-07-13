import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <div className="px-[100px] sm:px-[50px] mt-[63px] py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do not hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start gap-4">
            <FaClock className="text-xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Working Time</h4>
              <p>Monday – Friday: 9:00 – 22:00</p>
              <p>Saturday – Sunday: 9:00 – 20:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded-md"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactBanner;
