import { Link } from "react-router";

const Banner = () => {
  return (
    <section
      className="w-full h-[500px] md:h-[600px] lg:h-[716px] bg-cover bg-center bg-no-repeat flex justify-center lg:justify-end items-center px-4 md:px-8 "
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="scale-up-left w-full max-w-[645px] h-auto lg:h-[413px] bg-[#FFF3E3] rounded-md px-6 md:px-10 lg:px-[52px] pt-8 md:pt-[40px] pb-12 md:pb-16">
        <h2 className="font-poppins font-semibold text-sm md:text-base tracking-[2px] md:tracking-[3px] mb-2">
          New Arrival
        </h2>
        <h1 className="font-poppins font-extrabold text-[32px] md:text-[42px] lg:text-[52px] text-[#B88E2F] leading-tight md:leading-[55px] lg:leading-[65px] mb-4">
          Discover Our <span className="block">New Collection</span>
        </h1>
        <p className="font-poppins font-medium text-sm md:text-base lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] mb-6 lg:mb-[46px] max-w-[530px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link
          to="/shop"
          className=" py-3 md:py-[20px] lg:py-[25px] px-8 md:px-[60px] lg:px-[72px] bg-[#B88E2F] text-white text-sm md:text-[16px] font-poppins font-bold transition-all duration-300 hover:bg-[#a2781f] hover:text-[#fff8f8] hover:shadow-md hover:scale-105 rounded"
        >
          BUY NOW
        </Link>
      </div>
    </section>
  );
};

export default Banner;
