import { Link } from "react-router"; 
import { IoIosArrowForward } from "react-icons/io";

const ShopBanner = () => {
  return (
    <div className="relative w-full h-[316px] flex justify-center items-center overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/banner.png')",
          filter: "blur(1px)",
        }}
      ></div>

      {/* Foreground Content */}
      <h1 className="relative flex flex-col justify-center items-center font-poppins font-bold text-[#000] text-[32px] sm:text-[36px] md:text-[40px] z-10 text-center">
        Shop
        <span className="block mt-2">
          <Link
            to="/"
            className="group flex items-center gap-2 font-medium text-[14px] sm:text-[15px] md:text-[16px] text-gray-800 transition duration-300"
          >
            <span className="group-hover:text-purple-800 transition">Home</span>
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300 text-gray-800" />
            <span className="font-light underline-offset-2  transition">
              Shop
            </span>
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default ShopBanner;
