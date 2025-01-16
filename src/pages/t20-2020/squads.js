import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function Squads() {

  
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
              <div className=" relative">
                <button
                  id="left-arrow"
                  className="absolute left-[6px] top-1/2 -translate-y-1/2  bg-[#ffffff] p-[7px] rounded-full border-2 hidden"
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
                <div className="relative overflow-hidden mx-6">
                  {/* Left Arrow */}
                  {/* series Wrapper */}
                  <div
                    id="series"
                    className="flex gap-3 transition-transform duration-300"
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
            {/* Right Arrow */}
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
                className="font-medium py-2 px-3 whitespace-nowrap "
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
                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
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
            <Link href="">
              <button
                onclick="handleTabClick(event, 'stats')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Stadiums
              </button>
            </Link>
          </div>
        </div>


        <div id="squads" className="tab-content">
          <div className="py-2 mb-2">
            <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
              WT20 World Cup 2024 Squads
            </h3>
          </div>
          <div className="md:grid grid-cols-12 gap-4">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                <div id="team-buttons" className="">
                  <Link href="#">
                    <button
                      className="team-btn border-b px-2 mb-1 py-3 w-full text-[#394351] bg-[#eaeaea] rounded-md font-medium flex items-center"
                      data-target="aus-team"
                    >
                      <img
                        src="/assets/img/flag/1.png"
                        className="mr-3"
                        alt="Afghanistan Flag"
                      />
                      Australia-W
                    </button>
                  </Link>

                  <Link href="/match-squad-india">
                    <button
                      className="team-btn px-2 py-3 w-full text-[#394351] font-medium hover:bg-[#eaeaea] rounded-md flex items-center"
                      data-target="ind-team"
                    >
                      <img
                        src="/assets/img/flag/1.png"
                        className="mr-3"
                        alt="Bangladesh Flag"
                      />
                      India-W
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-7">
              <div id="south-team" className="team-content ">
                <div className="max-w-7xl mx-auto bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src="/assets/img/flag/b-5.png"
                      alt="South Africa Flag"
                      className="h-[45px] rounded-full"
                    />
                    <h1 className="text-[16px] font-semibold text-gray-800">
                      South Africa Women{" "}
                      <span className="text-gray-500">(15 players)</span>
                    </h1>
                  </div>
                  {/* Categories */}
                  <div className="space-y-6">
                    {/* Batsman Section */}
                    <div>
                      <h2 className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                        Batsman
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-7.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-blue-500 ">
                              L Wolvaardt<span className="text-blue-500">(c)</span>
                            </h3>
                            <p className="text-xs text-gray-600">Batsman</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-8.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              T Brits
                            </h3>
                            <p className="text-xs text-gray-600">Batsman</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-9.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-blue-500">
                              M Ridder<span className="text-blue-500">(wk)</span>
                            </h3>
                            <p className="text-xs text-gray-600">Batsman</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-10.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              S Jafta<span className="text-blue-500">(wk)</span>
                            </h3>
                            <p className="text-xs text-gray-600">Batsman</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* Bowler Section */}
                    <div>
                      <h2 className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                        Bowler
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-11.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/ball.png"
                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              A Hlubi
                            </h3>
                            <p className="text-xs text-gray-600">Bowler</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-12.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/ball.png"
                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              A Khaka
                            </h3>
                            <p className="text-xs text-gray-600">Bowler</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-13.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/ball.png"
                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              N Mlaba
                            </h3>
                            <p className="text-xs text-gray-600">Bowler</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-14.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/ball.png"
                                className="h-[24px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              T Sekhukhune
                            </h3>
                            <p className="text-xs text-gray-600">Bowler</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* All-Rounder Section */}
                    <div>
                      <h2 className="text-1xl font-semibold pl-[5px] border-l-[3px] border-[#1a80f8] mb-4">
                        All-Rounder
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-15.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              A Bosch
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-16.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              N Klerk
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-17.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              A Dercksen
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-18.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              M Kapp
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-19.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              M Kapp
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-20.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              M Kapp
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                        <a href="#">
                          <div className="text-center p-4 rounded-md border-[1px] border-[##E2E2E2]">
                            <div className="relative">
                              <img
                                src="/assets/img/player/g-21.png"
                                alt="Player Image"
                                className="w-16 h-16 mx-auto rounded-full mb-2"
                              />
                              <img
                                src="/assets/img/player/bat-ball.png"
                                className="h-[27px] absolute right-2 bottom-0 bg-white rounded-full p-[4px]"
                                alt=""
                              />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-800">
                              M Kapp
                            </h3>
                            <p className="text-xs text-gray-600">All-Rounder</p>
                          </div>
                        </a>
                      </div>
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
