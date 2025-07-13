import React, { useState } from "react";
import description from '../../assets/photos/description.png';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { label: "Description", value: "description" },
    { label: "Additional Information", value: "additional" },
    { label: "Reviews [5]", value: "reviews" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker
              takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-sm text-gray-500">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both
              articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal
              preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>

            {/* Responsive Image Section */}
            <div className="flex flex-col md:flex-row gap-4 mt-5">
              <div className="w-full md:w-1/2">
                <img
                  src={description}
                  alt="Sofa One"
                  className="w-full h-[312px] object-cover rounded"
                />
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={description}
                  alt="Sofa Two"
                  className="w-full h-[312px] object-cover rounded"
                />
              </div>
            </div>
          </div>
        );
      case "additional":
        return (
          <p className="text-sm text-gray-500">
            This sofa set is made with high-density foam cushions for extra comfort and support.
            The frame is constructed from solid wood and wrapped in premium fabric. Dimensions:
            120" L x 80" W x 35" H. Available in multiple color options and configurations.
          </p>
        );
      case "reviews":
        return (
          <div className="text-sm text-gray-500 space-y-2">
            <p><strong>Jane D.</strong>: Absolutely love this! Super comfy and stylish.</p>
            <p><strong>Mike B.</strong>: The quality is amazing for the price. Would buy again.</p>
            <p><strong>Sara K.</strong>: Delivery was fast and the sofa fits perfectly.</p>
            <p><strong>Ahmed R.</strong>: Very elegant design. The photos don’t do justice!</p>
            <p><strong>Emily F.</strong>: 5 stars — soft cushions and sturdy build.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-[100px] bg-white rounded flex flex-col justify-center items-center mb-[66px] pt-[45px]">
      {/* Tab Navigation */}
      <div className="border-b mb-6 flex flex-wrap gap-4 text-sm font-medium text-gray-500 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`pb-2 border-b-2 transition-colors duration-200 ${
              activeTab === tab.value
                ? "border-black text-black"
                : "border-transparent hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductDetails;
