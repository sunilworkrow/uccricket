import { useState } from "react";
import Link from "next/link";

const Slider = () => {
  const items = [
    {
      href: "/t20series",
      imgSrc: "/assets/img/series/series-1.png",
      alt: "BGT 2024-25",
      label: "BGT 2024-25",
    },
    {
      href: "/iplseries",
      imgSrc: "/assets/img/series/ipl.png",
      alt: "WBBL 2024",
      label: "WBBL 2024",
    },
    {
      imgSrc: "/assets/img/series/series-1.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/ipl.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/series-1.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/ipl.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/series-1.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/ipl.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/series-1.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
    {
      imgSrc: "/assets/img/series/ipl.png",
      alt: "Abu Dhabi T10",
      label: "Abu Dhabi T10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < items.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div
      id="drop-series-slider"
      className="text-white w-full overflow-hidden transition-all duration-300 absolute z-[1] h-[200vh] bg-[#0000004f]"
    >
      {/* Slider Navigation */}
      <div className="bg-[#081736]">
        <div className="flex items-center lg:w-[1000px] w-full mx-auto">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className={`text-yellow-400 text-xl ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === 0}
          >
            ❮
          </button>

          {/* Slider Content */}
          <div
            id="drop-slider"
            className="flex gap-4 overflow-hidden scroll-smooth mx-[25px] my-4"
          >
            {items
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((item, index) => (
                <Link href={item.href || "#"} key={index}>
                  <div className="flex-shrink-0 w-[125px] flex items-center flex-col">
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="rounded-lg w-[80px]"
                    />
                    <p className="mt-2 text-center">{item.label}</p>
                  </div>
                </Link>
              ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`text-yellow-400 text-xl ${
              currentIndex + itemsPerPage >= items.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex + itemsPerPage >= items.length}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
