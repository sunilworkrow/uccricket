import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';


export default function news() {



  const router = useRouter();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(selectedValue);
    }
  };

  return (

    <Layout>
     <section className="bg-[#0E2149]">
                <div className="lg:w-[1000px] mx-auto text-white pt-5 pb-10" style={{ paddingTop: "37px" }}>
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
                                    src="/assets/img/series/kkr.png"
                                    alt="Event Logo"
                                    className="md:h-[70px] lg:h-[auto]"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/img/home/win.png" alt="" className="h-[35px]" />
                                        <p className="bg-[#3d548736] px-4 py-1 rounded-full font-medium">
                                            2012, 2014, 2024
                                        </p>
                                    </div>
                                    <h2 className="lg:text-2xl md:text-[17px] font-semibold">
                                        Kolkata Knight Riders
                                    </h2>
                                    <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                            </div>
                            {/* Right Section */}
                            <div className="bg-[#3d548736] py-5 rounded-lg px-[30px] font-semibold">
                                <div className="flex space-x-4 pb-[13px]">
                                    <p className="text-[#92a3bb]">Owener :</p>
                                    <p>Knight Riders Sports Private Ltd</p>
                                </div>
                                <div className="border-[1px] border-b border-[#3D5487]" />
                                <div className="flex space-x-6 py-[13px]">
                                    <p className="text-[#92a3bb]">Coach :</p>
                                    <p>Chandrakant Pandi</p>
                                </div>
                                <div className="border-[1px] border-b border-[#3D5487]" />
                                <div className="flex space-x-4 pt-[13px]">
                                    <p className="text-[#92a3bb]">Captain :</p>
                                    <p>Shreyas Iyer</p>
                                </div>
                            </div>
                        </div>
                        {/* Content Section mobile screen  */}
                        <div className="md:hidden">
                            <div className=" relative">
                                <button
                                    id="left-arrow"
                                    className="absolute left-[6px] top-1/2 -translate-y-1/2  bg-[#ffffff] p-[7px] rounded-full border-2 hidden"
                                    style={{ zIndex: "1", display: "none" }}
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
                                <div className="relative overflow-hidden mx-6">
                                    {/* Left Arrow */}
                                    {/* series Wrapper */}
                                    <div
                                        id="series"
                                        className="flex gap-3 transition-transform duration-300"
                                        style={{ transform: "translateX(0px)" }}
                                    >
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* Right Arrow */}
                                </div>
                                <button
                                    id="right-arrow"
                                    className="absolute right-[6px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2"
                                    style={{ display: "block" }}
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
                                <div className="flex items-center gap-1 mb-2">
                                    <img src="/assets/img/home/win.png" alt="" className="h-[25px]" />
                                    <p className="bg-[#3d548736] px-4 py-1 rounded-full font-medium">
                                        2012, 2014, 2024
                                    </p>
                                </div>
                                <h2 className="text-[17px] font-semibold">Kolkata Knight Riders</h2>
                                <a href="#" className="text-green-400 hover:underline mt-2">
                                    More Seasons »
                                </a>
                            </div>
                        </div>
                        {/* Right Arrow */}
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
                    </div>
                </div>
            </section>


      <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
      <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/kkrseries">
                            <button
                                onclick="handleTabClick(event, 'info')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Overview
                            </button>
                        </Link>
                        <Link href="/kkr/schedule-results">
                            <button
                                onclick="handleTabClick(event, 'live')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Schedule & Results

                            </button>
                        </Link>
                        <Link href="/kkr/squads">
                            <button
                                onclick="handleTabClick(event, 'scorecard')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Squads
                            </button>
                        </Link>
                        <Link href="/kkr/points-table">
                            <button
                                onclick="handleTabClick(event, 'overs')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/kkr/news">
                            <button
                                onclick="handleTabClick(event, 'points')"
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                News
                            </button>
                        </Link>
                        <Link href="/kkr/stats">
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


        <div id="news" className="">
          <div className="rounded-lg py-4 px-4 bg-[#ffffff] mb-4">
            <div className="lg:grid grid-cols-12 gap-4">
              <div className="col-span-6 ">
                <img src="/assets/img/team-1.png" alt="Main news" className="rounded-lg w-full h-48 object-cover mb-3" />
              </div>
              <div className="col-span-6">
                <p className="text-gray-500 font-normal text-[13px] mb-2 flex items-center">By <span
                  className="ml-2 pr-[1px]">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                    viewBox="0 0 48 48">
                    <polygon fill="#42a5f5"
                      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                    </polygon>
                    <polygon fill="#fff"
                      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                    </polygon>
                  </svg>
                </span> Uc Team <span className="ml-2 pr-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                      </path>
                    </svg>
                  </span> October 9, 2024</p>
                <h3 className="text-1xl font-semibold mb-1" style={{ lineHeight: "21px" }}>Live - Jagadeesan hits
                  a century; Haryana trounce
                </h3>
                <p className="text-gray-500 font-normal">India will go into the home Test series
                  against New Zealand with pretty much the same squad that took on Bangladesh in September
                  - India's last red-ball action ahead of the five-Test...</p>
                <Link href="">
                  <p className="text-[#1A80F8] font-semibold flex items-center text-[13px] pt-2 underline">Read
                    more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                    </svg>
                  </p>
                </Link>
              </div>
            </div>


            <div className="lg:grid grid-cols-12 gap-4">

              <div className="col-span-6">
                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-1.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">Action ahead of the five-Test
                      series in Australia to close out this year.into the home Test series
                      against</h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024</p>
                  </div>
                </div>

                <div className="border-t-[1px] border-[#E7F2F4]"></div>

                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-2.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">Star South African spinner to opt
                      central contract this is cricket
                    </h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024
                    </p>
                  </div>
                </div>

                <div className="border-t-[1px] border-[#E7F2F4]"></div>

                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-3.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">After a campaign that never
                      really took off, they have some reflecting to do.
                    </h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-1.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">Action ahead of the five-Test
                      series in Australia to close out this year.into the home Test series
                      against</h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024</p>
                  </div>
                </div>

                <div className="border-t-[1px] border-[#E7F2F4]"></div>

                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-2.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">Star South African spinner to opt
                      central contract this is cricket
                    </h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024
                    </p>
                  </div>
                </div>

                <div className="border-t-[1px] border-[#E7F2F4]"></div>

                <div className="flex gap-3 my-5">
                  <img src="/assets/img/flag/p-3.png" alt="News thumbnail" className="rounded-lg h-[90px]" />
                  <div>
                    <h4 className="text-[13px] font-semibold mb-2">After a campaign that never
                      really took off, they have some reflecting to do.
                    </h4>
                    <p className="text-[12px] text-gray-500 flex items-center">By <span
                      className="ml-2 pr-[1px]">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15"
                        height="15" viewBox="0 0 48 48">
                        <polygon fill="#42a5f5"
                          points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884">
                        </polygon>
                        <polygon fill="#fff"
                          points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926">
                        </polygon>
                      </svg>
                    </span> Uc Team <span className="ml-2 pr-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z">
                          </path>
                        </svg>
                      </span> October 9, 2024
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <Link href="">
              <div
                className="text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] pt-2 underline">
                More from News <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor" className="size-3 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
                </svg>
              </div>
            </Link>

          </div>
        </div>

      </section>



    </Layout>

  )
}
