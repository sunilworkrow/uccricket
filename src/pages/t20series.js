import Layout from '@/Components/Layout'
import Link from 'next/link';

import { useRouter } from 'next/router';
import React, { useRef, useState } from "react";



const T20Series = () => {

  const router = useRouter();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(selectedValue);
    }
  };


  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const images = [
    { src: "/assets/img/series/series-1.png", url: "/t20series" },
    { src: "/assets/img/series/ipl.png", url: "/iplseries" },
    { src: "/assets/img/series/series-1.png", url: "/t20series" },
    { src: "/assets/img/series/ipl.png", url: "/iplseries" },
    { src: "/assets/img/series/series-1.png", url: "/t20series" },
    { src: "/assets/img/series/ipl.png", url: "/iplseries" },
  ];

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.children[0].offsetWidth + 15; // Width of 1 slide + gap
    if (direction === "right") {
      if (scrollPosition < images.length - 5) {
        setScrollPosition(scrollPosition + 1);
        slider.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    } else if (direction === "left") {
      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - 1);
        slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    }
  };


  return (
    <Layout>
      <section className="bg-[#0E2149]">
        <div className="lg:w-[1000px] mx-auto text-white  pt-5 pb-10" style={{ paddingTop: "37px" }}>
          <div className="flex items-center justify-between md:p-4 max-w-6xl mx-auto">
            {/* Left Arrow */}
            <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Content Section */}
            {/* Content Section full screen  */}
            <div className="hidden md:flex flex-grow items-center justify-between px-6">
              {/* Left Section */}
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/img/series/series-1.png"
                  alt="Event Logo"
                  className="md:h-[70px] lg:h-[auto]"
                />
                <div>
                  <h2 className="lg:text-2xl md:text-[17px] font-semibold">
                    Women's T20 World Cup 2020
                  </h2>
                  <p className="lg:text-sm md:text-[14px] text-gray-300 mb-2">
                    T20 - 34 Matches - 10 Teams | Oct 3 - Oct 20
                  </p>
                  <select className="border border-gray-500 rounded px-2 bg-[#0e2149]" onChange={handleSelectChange}>
                    <option value="" disabled selected>
                      2020
                    </option>
                    <option value="/t20-2021/Overview">2021</option>

                  </select>
                </div>
              </div>
              {/* Right Section */}
              <div className="flex items-center space-x-4">
                <p className="text-sm">
                  BAN-W vs IND-W
                  <br />
                  2024
                </p>
                <div className="flex items-center justify-center bg-green-600 w-12 h-12">
                  <img src="/assets/img/vs-img.png" alt="BAN vs IND" className="" />
                </div>
              </div>
            </div>
            {/* Content Section mobile screen  */}


            <div className="md:hidden">

              <div className="relative">
                {/* Left Arrow */}
                <button
                  id="left-arrow"
                  className={`absolute left-[6px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2 ${scrollPosition === 0 ? "hidden" : ""
                    }`}
                  onClick={() => handleScroll("left")}
                  style={{ zIndex: 1 }}
                >
                  <span className="text-[20px] font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3 text-[black]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      ></path>
                    </svg>
                  </span>
                </button>

                {/* Slider */}
                <div className="relative overflow-hidden mx-4">
                  <div
                    id="series"
                    ref={sliderRef}
                    className="flex gap-3 transition-transform duration-300 overflow-x-hidden"
                  >
                    {images.map((image, index) => (
                      <div key={index} className="flex-none w-1/5">
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                          <img src={image.src} alt={`series-${index + 1}`} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  id="right-arrow"
                  className={`absolute right-[31px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2 ${scrollPosition >= images.length - 5 ? "hidden" : ""
                    }`}
                  onClick={() => handleScroll("right")}
                  style={{ zIndex: 1 }}
                >
                  <span className="text-[20px] font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3 text-[black]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>


              <div className="px-4 mt-5">
                <h2 className="text-[17px] font-semibold">
                  Women's T20 World Cup 2020
                </h2>
                <p className="text-[13px] text-gray-300 mb-2">
                  T20 - 34 Matches - 10 Teams | Oct 3 - Oct 20
                </p>
                <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                  <option>2020</option>
                  <option>2021</option>
                </select>
              </div>
            </div>


            <Link href="/iplseries">
              <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </Link>
          </div>
        </div>
      </section>


      <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
        <div id="tabs" className="my-4">
          <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
            <Link href="/t20series">
              <button
                onclick="handleTabClick(event, 'info')"
                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
              >
                Overview
              </button>
            </Link>
            <Link href="/t20-2020/schedule-results">
              <button
                onclick="handleTabClick(event, 'live')"
                className="font-medium py-2 px-3 whitespace-nowrap "
              >
                Schedule & Results

              </button>
            </Link>
            <Link href="/t20-2020/squads">
              <button
                onclick="handleTabClick(event, 'scorecard')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Squads
              </button>
            </Link>
            <Link href="/t20-2020/points-table">
              <button
                onclick="handleTabClick(event, 'overs')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Points Table
              </button>
            </Link>
            <Link href="/t20-2020/news">
              <button
                onclick="handleTabClick(event, 'points')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                News
              </button>
            </Link>
            <Link href="/t20-2020/stats">
              <button
                onclick="handleTabClick(event, 'stats')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Stats
              </button>
            </Link>
            {/* <Link href="">
              <button
                onclick="handleTabClick(event, 'stats')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Stadiums
              </button>
            </Link> */}
          </div>
        </div>


        <div id="tab-content">
          {/* More Info Tab */}
          <div id="info"
            //  className="tab-content"
            className=""
          >
            <div className="md:grid grid-cols-12 gap-4">
              <div className="lg:col-span-8 md:col-span-7">
                <div className="rounded-lg bg-white">
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                      Series Info
                    </h3>
                    <div className="border-t border-[#E4E9F0]" />
                    {/* Responsive Grid Section */}
                    <div className="grid gap-2 grid-cols-1 py-3 px-2">
                      <div className="flex items-center gap-16">
                        <h2 className="font-normal text-[#586577]">Series :</h2>
                        <p className="text-[14px] font-medium">
                          Women's T20 World Cup 2024{" "}
                        </p>
                      </div>
                      <div className="flex items-center gap-12">
                        <h2 className="font-normal text-[#586577]">Duration :</h2>
                        <p className="text-[14px] font-medium">
                          Feb 21 - Mar 08, 2020
                        </p>
                      </div>
                      <div className="flex items-center gap-14">
                        <h2 className="font-normal text-[#586577]">Format :</h2>
                        <p className="text-[14px] font-medium">23 T20</p>
                      </div>
                      <div className="flex items-center gap-14">
                        <h2 className="font-normal text-[#586577]">Teams :</h2>
                        <p className="text-[14px] font-medium">10 (Teams)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    Featured Matches
                  </h3>
                  {/* Featured Matches desktop view  */}
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="hidden lg:block">
                    <div className="py-3 flex justify-between items-center">
                      <div className="flex space-x-2 font-medium	w-full">
                        <Link href="#">
                          <div className="flex items-center space-x-1 flex-col">
                            <img
                              src="/assets/img/wiw.png"
                              className="h-[30px] rounded-full"
                              alt="wiw"
                            />
                            <span className="text-[#909090]">WIW</span>
                          </div>
                        </Link>
                        <div className="mt-1">
                          <p className="text-1xl font-semibold">120/8</p>
                          <p className="text-[#909090]">(20.0 overs)</p>
                        </div>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF] text-[14px]">NZW Won</p>
                        <p className="text-[#909090] text-[12px] font-normal">
                          2nd Semi Final WT20 World Cup 2024
                        </p>
                      </div>
                      <div className="flex space-x-2 font-medium justify-end w-full">
                        <div className="mt-1 text-end">
                          <p className="text-1xl font-semibold">128/9</p>
                          <p className="text-[#909090]">(20.0 overs)</p>
                        </div>
                        <Link href="#">
                          <div className="flex items-center space-x-1 flex-col font-medium">
                            <img
                              src="/assets/img/nz.png"
                              className="h-[30px] rounded-full"
                              alt="nz"
                            />
                            <span className="text-[#909090]">NZ-W</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-3 flex justify-between items-center">
                      <div className="flex space-x-2 font-medium	w-full">
                        <Link href="#">
                          <div className="flex items-center space-x-1 flex-col">
                            <img
                              src="/assets/img/eng.png"
                              className="h-[30px] rounded-full"
                              alt="wiw"
                            />
                            <span className="text-[#909090]">AUSW</span>
                          </div>
                        </Link>
                        <div className="mt-1">
                          <p className="text-1xl font-semibold">134/5</p>
                          <p className="text-[#909090]">(20.0 overs)</p>
                        </div>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#3D4DCF] text-[14px]">SAW Won</p>
                        <p className="text-[#909090] text-[12px] font-normal">
                          1st Semi Final WT20 World Cup 2024
                        </p>
                      </div>
                      <div className="flex space-x-2 font-medium justify-end w-full">
                        <div className="mt-1 text-end">
                          <p className="text-1xl font-semibold">135/2</p>
                          <p className="text-[#909090]">(17.2 overs)</p>
                        </div>
                        <Link href="#">
                          <div className="flex items-center space-x-1 flex-col font-medium">
                            <img
                              src="/assets/img/sa.png"
                              className="h-[30px] rounded-full"
                              alt="nz"
                            />
                            <span className="text-[#909090]">SA-W</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-[#E4E9F0]" />
                    <div className="py-3 pb-0 flex justify-between items-center">
                      <div className="flex space-x-2 font-medium	w-full">
                        <Link href="#">
                          <div className="flex items-center space-x-1 flex-row">
                            <img
                              src="/assets/img/wiw.png"
                              className="h-[30px] rounded-full"
                              alt="wiw"
                            />
                            <span className="text-[#909090]">SA-W</span>
                          </div>
                        </Link>
                      </div>
                      <div className=" font-semibold text-center w-full">
                        <p className="text-[#414143] text-[14px]">Final T20 on</p>
                        <p className="text-[#909090] text-[12px] font-normal">
                          Oct 20, 7:30 PM
                        </p>
                      </div>
                      <div className="flex space-x-2 font-medium justify-end w-full">
                        <Link href="#">
                          <div className="flex items-center gap-1 flex-row-reverse font-medium">
                            <img
                              src="/assets/img/nz.png"
                              className="h-[30px] rounded-full"
                              alt="nz"
                            />
                            <span className="text-[#909090]">NZ-W</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Featured Matches responsive view view  */}
                  <div className="lg:hidden">
                    <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                      <p className="text-[#909090] text-[12px] mb-4 font-normal">
                        2nd Semi Final WT20 World Cup 2024
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="">
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                            <Link href="#">
                              <div className="flex items-center space-x-1 flex-col">
                                <img
                                  src="/assets/img/wiw.png"
                                  className="h-[25px] rounded-full"
                                  alt="wiw"
                                />
                                <span className="text-[#909090]">WIW</span>
                              </div>
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-1xl font-semibold">120/8</p>
                              <p className="text-[#909090]">(20.0 overs)</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                            <Link href="#">
                              <div className="flex items-center space-x-1 flex-col">
                                <img
                                  src="/assets/img/nz.png"
                                  className="h-[25px] rounded-full"
                                  alt="wiw"
                                />
                                <span className="text-[#909090]">NZ-W</span>
                              </div>
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-1xl font-semibold">128/9</p>
                              <p className="text-[#909090]">(20.0 overs)</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[60px] border-l-[1px] border-[#d0d3d7]" />
                        <div className=" font-semibold text-right">
                          <p className="text-[#3D4DCF]">NZW Won</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                      <p className="text-[#909090] text-[12px] mb-4 font-normal">
                        1st Semi Final WT20 World Cup 2024
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="">
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                            <Link href="#">
                              <div className="flex items-center space-x-1 flex-col">
                                <img
                                  src="/assets/img/eng.png"
                                  className="h-[25px] rounded-full"
                                  alt="wiw"
                                />
                                <span className="text-[#909090]">AUSW</span>
                              </div>
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-1xl font-semibold">134/5</p>
                              <p className="text-[#909090]">(20.0 overs)</p>
                            </div>
                          </div>
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                            <Link href="#">
                              <div className="flex items-center space-x-1 flex-col">
                                <img
                                  src="/assets/img/sa.png"
                                  className="h-[25px] rounded-full"
                                  alt="wiw"
                                />
                                <span className="text-[#909090]">SA-W</span>
                              </div>
                            </Link>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-1xl font-semibold">135/2</p>
                              <p className="text-[#909090]">(17.2 overs)</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[60px] border-l-[1px] border-[#d0d3d7]" />
                        <div className=" font-semibold text-right">
                          <p className="text-[#3D4DCF]">SAW Won</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 px-3 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                      <p className="text-[#909090] text-[12px] mb-4 font-normal">
                        2nd Semi Final WT20 World Cup 2024
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="">
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full mb-3">
                            <div className="flex items-center space-x-1 ">
                              <img
                                src="/assets/img/wiw.png"
                                className="h-[25px] rounded-full"
                                alt="wiw"
                              />
                              <span className="text-[#909090]">SA-W</span>
                            </div>
                          </div>
                          <div className="flex space-x-2 items-start font-medium w-[162px] md:w-full">
                            <div className="flex items-center space-x-1 ">
                              <img
                                src="/assets/img/nz.png"
                                className="h-[25px] rounded-full"
                                alt="wiw"
                              />
                              <span className="text-[#909090]">NZ-W</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-[60px] border-l-[1px] border-[#d0d3d7]" />
                        <div className=" font-semibold text-right">
                          <p className="text-[#414143]">Final T20 on</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <div>
                    <h3 className="text-1xl font-semibold pl-[4px] border-l-[3px] border-[#2182F8]">
                      Key Stats
                    </h3>
                  </div>

                </div>
                <div className="mb-4">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 items-center gap-2">
                    <div className="col-span-1">
                      <div className="rounded-lg bg-[#ffffff] p-4 flex flex-col items-center">
                        <p className="mb-2 font-medium">Most Runs</p>
                        <img
                          src="/assets/img/player/g-1.png"
                          className="h-[45px]"
                          alt="A Kerr"
                        />
                        <Link href="#">
                          <h3 className="mt-2 text-[14px] font-semibold">
                            L Wolvaardt
                          </h3>
                        </Link>
                        <p className="text-[#909090]">South Africa-W</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-[18px] font-semibold">190</p>
                          <p className="text-gray-600 text-sm">Runs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="rounded-lg bg-[#ffffff] p-4 flex flex-col items-center">
                        <p className="mb-2 font-medium">Highest Score</p>
                        <img
                          src="/assets/img/player/g-3.png"
                          className="h-[45px]"
                          alt="A Kerr"
                        />
                        <Link href="#">
                          <h3 className="mt-2 text-[14px] font-semibold">
                            L Wolvaardt
                          </h3>
                        </Link>
                        <p className="text-[#909090]">A Bosch - SA-W</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-[18px] font-semibold">74</p>
                          <p className="text-gray-600 text-sm">Runs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="rounded-lg bg-[#ffffff] p-4 flex flex-col items-center">
                        <p className="mb-2 font-medium">Most Wickets</p>
                        <img
                          src="/assets/img/player/g-2.png"
                          className="h-[45px]"
                          alt="A Kerr"
                        />
                        <Link href="#">
                          <h3 className="mt-2 text-[14px] font-semibold">A Kerr</h3>
                        </Link>
                        <p className="text-[#909090]">New Zealand-W</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-[18px] font-semibold">12</p>
                          <p className="text-gray-600 text-sm">Wickets</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="rounded-lg bg-[#ffffff] p-4 flex flex-col items-center">
                        <p className="mb-2 font-medium">Best Figures</p>
                        <img
                          src="/assets/img/player/g-4.png"
                          className="h-[45px]"
                          alt="A Kerr"
                        />
                        <Link href="#">
                          <h3 className="mt-2 text-[14px] font-semibold">K Ramhar</h3>
                        </Link>
                        <p className="text-[#909090]">West Indies-W</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-[18px] font-semibold">17/4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    Team Name
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-1.png"
                          alt="Pakistan-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">Pakistan-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-2.png"
                          alt="West Indies-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">West Indies-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-3.png"
                          alt="Australia-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">Australia-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-4.png"
                          alt="Scotland-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">Scotland-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-5.png"
                          alt="South Africa-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">South Africa-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-6.png"
                          alt="New Zealand-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">New Zealand-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-7.png"
                          alt="Sri Lanka-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">Sri Lanka-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-8.png"
                          alt="India-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">India-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-9.png"
                          alt="England-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">England-W</p>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className="border-[1px] border-[##E2E2E2] rounded-md py-4 px-2 flex flex-col items-center">
                        <img
                          src="/assets/img/flag/b-10.png"
                          alt="Bangladesh-W"
                          className="h-[42px] mb-2"
                        />
                        <p className="font-medium">Bangladesh-W</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-1">
                    India vs Zimbabwe 2024
                  </h3>
                  <p className="text-gray-500 font-normal">
                    The biggest tournament in the cricketing circuit, the ICC T20
                    WORLD Cup is underway in the USAs and the West Indies. The
                    tournament received excellent response from the fans worldwide and
                    the finals of the gran...
                  </p>
                  <Link href="#">
                    <p className="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">
                      Read more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </p>
                  </Link>
                </div>
                <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                  <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                    News
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="lg:grid grid-cols-12 gap-4 mt-4">
                    {/* Main News Item */}
                    <div className="col-span-6 border-r-[1px] border-[#E7F2F4] pr-[16px]">
                      <img
                        src="/assets/img/team-1.png"
                        alt="Main news"
                        className="rounded-lg w-full h-48 object-cover mb-3"
                      />
                      <h3 className="text-1xl font-semibold mb-1">
                        Live - Jagadeesan hits a century; Haryana trounce
                      </h3>
                      <p className="text-gray-500 font-normal">
                        India will go into the home Test series against New Zealand
                        with pretty much the same squad that took on Bangladesh in
                        September - India's last red-ball action ahead of the
                        five-Test...
                      </p>
                      <div className="border-l-[1px] border-[#E7F2F4]" />
                    </div>
                    {/* Side News Items */}
                    <div className="col-span-6">
                      {/* Single News Item */}
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-2.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            Women's T20 World Cup, 2nd Semifinal | WI-W Vs NZ-W
                            Playing 11 Prediction
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            Akshita Patel{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-3.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            AUS-W Vs SA-W Highlights: Anneke Bosch Overpowers
                            Australia To Guide South Africa.
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            Akshita Patel{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                      <div className="border-t-[1px] border-[#E7F2F4]" />
                      <div className="flex gap-3 my-3">
                        <img
                          src="/assets/img/team-4.png"
                          alt="News thumbnail"
                          className="rounded-lg h-[77px]"
                        />
                        <div>
                          <h4 className="text-[13px] font-semibold mb-2">
                            WI-W vs NZ-W Dream11 Prediction Today Match, Fantasy
                            Cricket Tips, Pitch Report
                          </h4>
                          <p className="text-[12px] text-gray-500 flex items-center">
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width={15}
                                height={15}
                                viewBox="0 0 48 48"
                              >
                                <polygon
                                  fill="#42a5f5"
                                  points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                                ></polygon>
                                <polygon
                                  fill="#fff"
                                  points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                                ></polygon>
                              </svg>
                            </span>{" "}
                            P Bhattachar{" "}
                            <span className="ml-2 pr-[1px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            October 9, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-5">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex gap-1 items-center justify-between">
                    <div className="flex gap-1 items-center">
                      <div className="col-span-4 relative">
                        <img src="/assets/img/home/trofi.png" className="h-[75px]" alt="" />
                      </div>
                      <div className="col-span-8 relative">
                        <h3 className="font-semibold text-[19px] mb-1">
                          Weekly challenge
                        </h3>
                        <p className="font-semibold text-[13px] text-[#1a80f8]">
                          <span className="text-[#586577]">Time Left:</span>2 Days 12h
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Slider 1 */}
                <div className="cust-slider-container w-full overflow-hidden">
                  <div className="cust-slider w-full flex transition-transform duration-500 ease-in-out">
                    {/* Slide 1 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="/assets/img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="cust-slide w-full flex-shrink-0">
                      <div className="rounded-lg p-4 mb-2 bg-[#ffffff]">
                        <div className="flex items-center justify-between md:mb-4 mb-2">
                          <div className="flex items-center space-x-2">
                            <div
                              className="flex items-center text-[#0F55A5] rounded-full pr-3  font-semibold"
                              style={{ gap: 3 }}
                            >
                              <span className="rounded-full">●</span> FEATURED
                            </div>
                          </div>
                          <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                          <div className="flex items-center space-x-2">
                            <span className="text-[13px] font-medium">AFG</span>
                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] md:rounded-full rounded-md text-[#0B773C] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                  />
                                </svg>
                              </span>
                              41
                            </span>
                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  md:rounded-full rounded-md text-[#A70B0B] pr-2">
                              <span className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-[14px] w-[17px]"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                  />
                                </svg>
                              </span>
                              45
                            </span>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="md:py-4 py-2 md:px-3 md:mb-0 mb-2 ">
                          <div className="flex justify-between items-center text-[14px]">
                            <div className="">
                              <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                <div className="flex items-center space-x-2">
                                  <img
                                    src="/assets/img/eng.png"
                                    className="h-[25px] rounded-full"
                                    alt="aus"
                                  />
                                  <span className="text-[#5e5e5e] font-medium">
                                    Australia
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src="/assets/img/aus.png"
                                      className="h-[25px]"
                                      alt="ind"
                                    />
                                    <span className="text-[#5e5e5e] font-medium">
                                      England
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="md:block hidden h-[70px] border-l-[1px] border-[#d0d3d7]"></div>
                            <div className=" font-semibold text-center">
                              <p className="text-[#586577] text-[12px] mb:mb-4 mb-1 font-medium">
                                20th Sep Fri, 5:30 PM GMT
                              </p>
                              <div className="text-[#144280]">
                                <div
                                  id="countdown"
                                  className="flex space-x-1 justify-center"
                                >
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="hours">8</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Hrs{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]">
                                      <span id="minutes">5</span>
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Min{" "}
                                    </span>
                                  </div>
                                  <div>:</div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-[16px]" id="seconds">
                                      17
                                    </div>
                                    <span className="text-[11px] font-normal">
                                      {" "}
                                      Sec{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#E7F2F4]" />
                        <div className="mt-2">
                          <p className=" text-[#909090] font-medium">
                            {" "}
                            Afghanistan tour of South Africa 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Navigation Buttons */}
                  <div className="cust-slider-nav flex justify-between items-center">
                    <button className="cust-prev-btn bg-[#ffffff] p-[7px] rounded-full border-2">
                      <span className="text-[20px] font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="flex justify-center space-x-2">
                      <span
                        className="dot w-[13px] h-[4px] bg-blue-500 rounded-full cursor-pointer"
                        data-index={0}
                      />
                      <span
                        className="dot w-[13px] h-[4px] bg-gray-400 rounded-full cursor-pointer"
                        data-index={1}
                      />
                      <span
                        className="dot w-[13px] h-[4px] bg-gray-400 rounded-full cursor-pointer"
                        data-index={2}
                      />
                    </div>
                    <button className="cust-next-btn bg-[#ffffff] p-[7px] rounded-full border-2">
                      {/* Right Arrow Icon */}
                      <span className="text-[20px] font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className=" my-4">
                  <div className="py-2 mb-2">
                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                      Fantasy Tips
                    </h3>
                  </div>
                  <div className="bg-[#ffffff] rounded-lg ">
                    <div className="p-4">
                      <Link href="#">
                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                          <p className="text-[13px] font-semibold">
                            NZ-W Vs WI-W Highlights: Eden Carson, Amelia Kerr Pummel
                            West Indies In Semis As NZ Set Date With SA
                          </p>
                          <p className="text-[#586577] pt-2">15 hrs ago</p>
                        </div>
                      </Link>
                      <Link href="#">
                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                          <p className="text-[13px] font-semibold">
                            Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                            As SA Stuns AUS In T20 WC
                          </p>
                          <p className="text-[#586577] pt-2">17 hrs ago</p>
                        </div>
                      </Link>
                      <Link href="#">
                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                          <p className="text-[13px] font-semibold">
                            Women's T20 World Cup, NZ vs WI: Unchanged New Zealand Opt
                            To Bat; Check Out The Playing XIs
                          </p>
                          <p className="text-[#586577] pt-2">19 hrs ago</p>
                        </div>
                      </Link>
                      <Link href="#">
                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                          <p className="text-[13px] font-semibold">
                            SA Cricketers Get Emotional After Historic Win Against
                            Australia To Enter T20 World Cup 2024 Final - Watch
                          </p>
                          <p className="text-[#586577] pt-2">18 Oct 2024</p>
                        </div>
                      </Link>
                      <Link href="#">
                        <div className=" pb-2 mb-2">
                          <p className="text-[13px] font-semibold">
                            'Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                            As SA Stuns AUS In T20 WC
                          </p>
                          <p className="text-[#586577] pt-2">18 Oct 2024</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </section>
    </Layout>
  )
}

export default T20Series