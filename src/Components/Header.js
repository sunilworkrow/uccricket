import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };


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
  const itemsPerPage = 7;

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
    <>

      <div className='md:hidden flex items-center justify-between py-2 px-2 bg-[#3793ff] text-white' >

        <p> Uc Cricket is better on App, Get now! </p>
        <button className='border-[1px] border-white px-4 rounded-full py-1'>Use App</button>

      </div>

      <header className="bg-[#081736] lg:px-0 px-3">
        <div className="lg:w-[1000px] w-full mx-auto text-white py-5 flex items-center justify-between">
          <div>
            <Link href="/">
              <img className="h-[2.375rem]" src="/assets/img/logo.png" alt="" />
            </Link>
          </div>
          {/* Toggle Button for Mobile */}
          <button
            id="menu-toggle"
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {/* Navbar Links */}
          <nav id="menu" className="hidden lg:flex space-x-4 text-1xl">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Fixtures
            </Link>
            <Link href="" className="hover:text-yellow-400"></Link>
            <div className="group">
              <Link href="" className="hover:text-yellow-400"></Link>
              <a
                // href="#!"
                className="hover:text-yellow-400 flex items-center"
                // id="drop-series-trigger"
                onClick={toggleDropdown}
              >
                Series
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <Link href="" className="hover:text-yellow-400">
              Teams
            </Link>
            <Link href="/icc-ranking" className="hover:text-yellow-400">
              ICC Ranking
            </Link>
            <Link href="" className="hover:text-yellow-400">
              News
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Fantasy Tips
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Point Table
            </Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#081736] text-1xl text-white space-y-4 py-5 hidden"
        >
          <Link href="/" className="block hover:text-yellow-400">
            Home
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Fixtures
          </Link>
          <Link href="#" className="block hover:text-yellow-400">
            Series
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Teams
          </Link>
          <Link href="/icc-ranking" className="block hover:text-yellow-400">
            ICC Ranking
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            News
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Fantasy Tips
          </Link>
          <Link href="" className="block hover:text-yellow-400">
            Point Table
          </Link>
        </div>
      </header>

      {isDropdownOpen &&
        <div
          id="drop-series-slider"
          className="text-white w-full overflow-hidden transition-all duration-300 absolute z-[1] h-[200vh] bg-[#0000004f]"
          onClick={() => setIsDropdownOpen(false)} // Close slider on background click
        >
          {/* Slider Navigation */}
          <div
            className="bg-[#081736]"
            onClick={(e) => e.stopPropagation()} // Prevent closing slider when clicking inside the slider content
          >
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
                className={`text-yellow-400 text-xl ${currentIndex + itemsPerPage >= items.length ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={currentIndex + itemsPerPage >= items.length}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Header
