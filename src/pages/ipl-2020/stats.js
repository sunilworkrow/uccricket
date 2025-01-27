import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function stats() {


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
                <div className="lg:w-[1000px] mx-auto text-white pt-5 pb-10 " style={{ paddingTop: "37px" }}>
                    <div className="flex items-center justify-between md:p-4 max-w-6xl mx-auto">
                        {/* Left Arrow */}
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"

                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        </Link>
                        {/* Content Section */}
                        {/* Content Section full screen  */}
                        <div className="hidden md:flex flex-grow items-center justify-between px-6">
                            {/* Left Section */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src="/assets/img/series/ipl.png"
                                    alt="Event Logo"
                                    className="md:h-[70px] lg:h-[auto]"
                                />
                                <div>
                                    <h2 className="lg:text-2xl md:text-[17px] font-semibold">
                                        Indian Premier League 2024
                                    </h2>
                                    <p className="lg:text-sm md:text-[14px] text-gray-300 mb-2">
                                        T20 - 34 Matches - 10 Teams | Mar 22 to May 26
                                    </p>
                                    <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
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
                                    style={{ zIndex: 1, display: "none" }}
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
                                                <img src="/assets/img/series/ipl.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/series-1.png" className="" alt="" />
                                            </a>
                                        </div>
                                        <div className="flex-none w-1/5">
                                            <a href="#">
                                                <img src="/assets/img/series/ipl.png" className="" alt="" />
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
                                <h2 className="text-[17px] font-semibold">
                                    Indian Premier League 2024
                                </h2>
                                <p className="text-[13px] text-gray-300 mb-2">
                                    T20 - 34 Matches - 10 Teams | Mar 22 to May 26
                                </p>
                                <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                    <option>2020</option>
                                    <option>2021</option>

                                </select>
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
                        <Link href="/iplseries">
                            <button
                                onclick="handleTabClick(event, 'info')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Overview
                            </button>
                        </Link>
                        <Link href="/ipl-2020/schedule-results">
                            <button
                                onclick="handleTabClick(event, 'live')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Schedule & Results

                            </button>
                        </Link>
                        <Link href="/ipl-2020/squads">
                            <button
                                onclick="handleTabClick(event, 'scorecard')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Squads
                            </button>
                        </Link>
                        <Link href="/ipl-2020/points-table">
                            <button
                                onclick="handleTabClick(event, 'overs')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/ipl-2020/news">
                            <button
                                onclick="handleTabClick(event, 'points')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                News
                            </button>
                        </Link>
                        <Link href="/ipl-2020/stats">
                            <button
                                onclick="handleTabClick(event, 'stats')"
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
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



                <div id="stats">
                    <div className="md:grid grid-cols-12 gap-4">
                        <div className="lg:col-span-3 md:col-span-4">
                            <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                                        Batting
                                    </h3>
                                </div>
                                <div id="team-buttons" className="">
                                    <Link href="/live-stats/most-runs-stats">
                                        <button

                                            className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left bg-[#ecf2fd] text-[#1a80f8] rounded-md "
                                            onClick={() => handleStatsChange("most-runs")}
                                        >
                                            Most Runs
                                        </button>
                                    </Link>
                                    <Link href="/live-stats/most-scors">
                                        <button
                                            className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                        >
                                            Highest Scores
                                        </button>
                                    </Link>
                                    <button
                                        // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                        // data-target="batting-average"
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                        onClick={() => handleStatsChange("batting-average")}
                                    >
                                        Best Batting Average
                                    </button>
                                    <button
                                        // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                                        // data-target="state-team"
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                        onClick={() => handleStatsChange("state-team")}
                                    >
                                        Best Batting Strike Rate
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Hundreds
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Fifties
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Fours
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Sixes
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Nineties
                                    </button>
                                </div>
                            </div>
                            <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                                        Bowler
                                    </h3>
                                </div>
                                <div id="team-buttons" className="">
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most Wickets
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Best Bowling Average
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Best Bowling
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Most 5 Wickets Haul
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Best Economy
                                    </button>
                                    <button
                                        className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                                    >
                                        Best Bowling Strike Rate
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-9 md:col-span-8">
                            <div id="most-runs" className={`state-content most-runs" ? "" : "hidden"}`} >
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Bowling
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium w-[10px]" />
                                                            <th className="px-4 py-3 font-medium">Batter</th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                Match
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                Inns
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                Runs
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                Avg
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                4s
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                6s
                                                            </th>
                                                            <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                                SR
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">1</td>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Virat Kohli</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">2</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">3</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">4</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">6</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">7</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">8</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                10
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                11
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                12
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                13
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                14
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                15
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 pl-[14px] py-3 w-[10px]">
                                                                16
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                                <Link href="/profile"> Rohit Sharma</Link>
                                                            </td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">5</td>
                                                            <td className="md:px-2 pl-[14px] py-3">123</td>
                                                            <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                            <td className="md:px-2 pl-[14px] py-3">9</td>
                                                            <td className="md:px-2 pl-[14px] py-3">0</td>
                                                            <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                
                <div className="rounded-lg py-4 px-4 bg-[#ffffff] mb-4">
                    <div className="lg:grid grid-cols-12 gap-4">            
                        <div className="col-span-12">
                           
                            <h3 className="text-1xl font-semibold mb-1" style={{ lineHeight: "21px" }}>Live - Jagadeesan hits
                                a century; Haryana trounce
                            </h3>
                            <p className="text-gray-500 font-normal">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dicta maiores esse adipisci autem nesciunt placeat saepe corporis explicabo, enim tenetur non laboriosam ipsam nihil est aut. Odit nostrum dicta maiores, ipsam vero hic, recusandae, fugit doloribus voluptas a at! Quae recusandae est reprehenderit ratione. Nam, cupiditate quibusdam ab aut eos corporis omnis, culpa dolorum eligendi ea inventore! A, quo modi excepturi neque similique aliquam saepe quis, aut alias pariatur eligendi enim expedita doloremque ex recusandae distinctio. Ut mollitia adipisci soluta consequatur! Quisquam sit nemo doloremque illo libero sapiente facere minima, impedit maxime ut porro eius adipisci asperiores? Sit, architecto.
                            </p>
                            
                        </div>
                    </div>


                </div>



            </section>



        </Layout>

    )
}
