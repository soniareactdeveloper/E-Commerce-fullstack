import React from "react";
import { FaTrophy, FaHeadset } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { PiTruckLight } from "react-icons/pi";

const ProductQuality = () => {
  const features = [
    {
      icon: <FaTrophy size={28} />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <BsShieldCheck size={28} />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <PiTruckLight size={28} />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHeadset size={28} />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#FAF7F3] py-10 px-4 sm:px-8 lg:px-20 mt-[106px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-black mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQuality;
