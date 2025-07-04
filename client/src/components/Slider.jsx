import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import sliderMain from "../assets/photos/slider1.png";
import slider1 from "../assets/photos/slider2.png";
import slider2 from "../assets/photos/slider3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const SliderWeb = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full bg-[#FCF8F3] flex flex-col md:flex-row justify-between overflow-hidden px-4 sm:px-6 md:px-0 py-10 md:py-0">
      {/* Left Text Section */}
      <div className="px-4 sm:px-6 md:pl-[60px] pt-10 md:pt-[150px] pb-10 max-w-full md:max-w-[initial] text-center md:text-left">
        <h2 className="font-poppins font-bold text-[#3A3A3A] text-2xl sm:text-3xl md:text-[32px] leading-tight">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="mt-3 mb-6 text-sm sm:text-[15px] font-poppins text-[#3A3A3A] tracking-wide max-w-[300px] mx-auto md:mx-0">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <Link
          to="#"
          className="bg-[#B88E2F] px-6 py-2 inline-block text-white font-poppins font-semibold text-sm sm:text-[15px] transition-all duration-300 hover:bg-[#a2781f] hover:shadow-lg hover:scale-105"
        >
          Explore More
        </Link>
      </div>

      {/* Right Section: Main Image + Slider */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[34px] py-6 px-4 md:px-0">
        {/* Main Image */}
        <div className="relative w-full max-w-[400px] h-[400px] sm:h-[480px] md:h-[500px] mx-auto md:mx-0">
          <img
            src={sliderMain}
            alt="Main"
            className="w-full h-full object-cover shadow-md"
          />
          {/* Overlay Content */}
          <div className="absolute bottom-[20px] left-[16px] flex items-end">
            <div className="bg-[rgba(255,255,255,0.85)] p-4 shadow-sm">
              <p className="text-[#616161] text-xs sm:text-sm font-medium font-poppins">
                01 - Bed Room
              </p>
              <h3 className="text-[#000] text-lg sm:text-xl font-semibold font-poppins mt-1">
                Inner Peace
              </h3>
            </div>
            <span className="w-10 h-10 sm:w-[48px] sm:h-[48px] flex justify-center items-center text-[18px] sm:text-[20px] text-white bg-[#B88E2F] shadow-md hover:bg-[#a2781f] transition-all duration-300 cursor-pointer ml-2">
              <FaArrowRightLong />
            </span>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full max-w-[300px] h-[320px] sm:h-[400px] mx-auto md:mx-0 flex mb-10 md:mb-24">
          <Slider {...settings} className="w-full h-full">
            <div>
              <img
                src={slider1}
                alt="Slide 1"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div>
              <img
                src={slider2}
                alt="Slide 2"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderWeb;
