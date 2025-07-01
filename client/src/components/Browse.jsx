import img from '../assets/photos/img.png';
import img1 from '../assets/photos/img1.png';
import img2 from '../assets/photos/img2.png';

const Browse = () => {
  const BrowseImg = [
    { src: img, label: "Dining" },
    { src: img1, label: "Living" },
    { src: img2, label: "Bedroom" },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10">
      <div>
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#333333] text-center mt-10 sm:mt-16">
          Browse The Range
        </h2>
        <p className="font-poppins font-normal text-base sm:text-lg md:text-xl text-[#666666] text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {BrowseImg.map((item, i) => (
            <div key={i} className="text-center">
              <img
                src={item.src}
                alt={`Browse ${i + 1}`}
                className="w-full max-w-xs sm:max-w-sm md:max-w-[381px] h-auto md:h-[480px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-4 sm:mt-6 font-poppins font-semibold text-lg sm:text-xl md:text-2xl text-[#333333]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;
