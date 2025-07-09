import React from "react";

import imageOne from "../assets/photos/recOne.png";
import imageTwo from "../assets/photos/rectTwo.png";
import imageThree from "../assets/photos/recThree.png";
import imageFour from "../assets/photos/recFour.png";
import imageFive from "../assets/photos/recFive.png";
import imageSix from "../assets/photos/recSix.png";
import imageSeven from "../assets/photos/recSeven.png";
import imageEight from "../assets/photos/recEight.png";
import imageNine from "../assets/photos/recNine.png";

const ProductShowcase = () => {
  return (
    <section className="mt-[67px] mb-[50px] px-4">
      <p className="font-poppins font-semibold text-[20px] text-[#616161] text-center">
        Share your setup with
      </p>
      <h1 className="font-poppins font-bold text-[40px] text-[#3A3A3A] text-center mb-10">
        #FuniroFurniture
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        <img src={imageOne} alt="1" className="col-span-1 md:col-span-1 md:row-span-2 w-full h-full" />
        <img src={imageTwo} alt="2" className="col-span-1 md:col-span-2 md:row-span-2 w-full h-full" />
        <img src={imageThree} alt="3" className="col-span-1 md:col-span-3 md:row-span-1 w-full h-full" />
        <img src={imageFour} alt="4" className="col-span-1 md:col-span-2 md:row-span-1 w-full h-full" />
        <img src={imageFive} alt="5" className="col-span-1 md:col-span-2 md:row-span-2 w-full h-full" />
        <img src={imageSix} alt="6" className="col-span-1 md:col-span-1 md:row-span-1 w-full h-full" />
        <img src={imageSeven} alt="7" className="col-span-1 md:col-span-1 md:row-span-2 w-full h-full" />
        <img src={imageEight} alt="8" className="col-span-1 md:col-span-2 md:row-span-1 w-full h-full" />
        <img src={imageNine} alt="9" className="col-span-1 md:col-span-2 md:row-span-1 w-full h-full" />
      </div>
    </section>
  );
};

export default ProductShowcase;
