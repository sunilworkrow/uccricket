import Layout from '@/Components/Layout'
import WeeklySlider from '@/Components/WeeklySlider';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';


export default function ScheduleResults() {

    const [activeSubTab, setActiveSubTab] = useState('all');

    const handleSubTabChange = (tab) => {
        setActiveSubTab(tab);
    };


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
                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
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


                <div id="live"
                    //  className="tab-content hidden"
                    className=""
                >
                    <div className="md:grid grid-cols-12 gap-4">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                {/* Buttons */}
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => handleSubTabChange('all')}
                                        // className="suide-pera-all bg-[#1A80F8] text-white rounded-md px-4 py-2 font-medium"
                                        className={`suide-pera-all ${activeSubTab === 'all' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => handleSubTabChange('all1')}
                                        // className="suide-pera-all1  rounded-md px-4 py-2 font-medium"
                                        className={`suide-pera-all ${activeSubTab === 'all1' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                    >
                                        SCHEDULED
                                    </button>
                                    <button
                                        onClick={() => handleSubTabChange('all3')}
                                        // className="suide-pera-all3 rounded-md px-4 py-2 font-medium"
                                        className={`suide-pera-all ${activeSubTab === 'all3' ? 'bg-[#1A80F8] text-white' : ''} rounded-md px-4 py-2 font-medium`}
                                    >
                                        RESULT
                                    </button>
                                </div>
                                {/* Data Sections */}
                            </div>
                            <div
                                // className="suide-pera-all-data" 
                                className={`suide-pera-all-data ${activeSubTab === 'all' ? 'block' : 'hidden'}`}>
                                {/* SCHEDULED match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#A45B09] rounded-full pr-2 font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> SCHEDULED
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[13px] font-medium">SA</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    Final, WT20 World Cup 2024
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/sa.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="sa"
                                                        />
                                                        <span className="font-semibold">SA-W</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/nz.png"
                                                                className="h-[30px]"
                                                                alt="ind"
                                                            />
                                                            <span className="font-semibold">NZ-W</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" font-medium text-center">
                                                <p className="text-[#FC9014] text-[14px]">
                                                    20th September - Fri, <br /> 5:30 PM GMT
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="flex items-center justify-between space-x-5 mt-3">
                                        <div className="flex items-center">
                                            <p className=" text-[#909090] font-medium"> Points Table</p>
                                            <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                            <p className="text-[#909090] font-medium">Schedule</p>
                                        </div>
                                        <div className="flex mt-2 justify-end items-center space-x-2">
                                            <img src="/assets/img/home/handshake.png" alt="" />
                                            <span className="text-[#909090] font-medium">H2H</span>
                                        </div>
                                    </div>
                                </div>
                                {/* SCHEDULED match desktopn view End */}
                                {/* SCHEDULED match desktopn view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#A45B09] rounded-full font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> SCHEDULED
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-[12px] top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                Final, WT20 World Cup 2024
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/sa.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/nz.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            NZ-W
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=" font-medium text-center">
                                                        <p className="text-[#FC9014] font-medium mt-1 text-[11px]">
                                                            20th September - Fri,
                                                            <br />
                                                            5:30 PM GMT
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 text-[11px]">
                                                <span className="text-[#909090] font-medium">BAN</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-md text-[#0B773C] pr-2">
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
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-md text-[#A70B0B] pr-2">
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
                                    </div>
                                </div>
                                {/* SCHEDULED match desktopn view End */}
                                {/* RESULT match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2  font-medium">
                                            <span className="text-[13px]">AUS</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                37
                                            </span>
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                40
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    1st Semi Final,WT20 World Cup
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/eng.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="aus"
                                                        />
                                                        <span className="text-[#909090] font-semibold">
                                                            SA-W -{" "}
                                                        </span>
                                                    </div>
                                                    <p>
                                                        <span className=" font-semibold">135/3</span>
                                                        <span className="text-[#909090] text-[13px]">
                                                            {" "}
                                                            (17.3 overs)
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/aus.png"
                                                                className="h-[30px]"
                                                                alt="ind"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                AU-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">134/10</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (20 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className=" font-semibold flex flex-col items-center">
                                                <img src="/assets/img/home/win.png" alt="" />
                                                <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                    SA won by 7 wickets
                                                </p>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/player/g-5.png" alt="" />
                                                <p className=" font-semibold">Anneke Bosch</p>
                                                <p>Man of the match</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT match desktopn view End */}
                                {/* RESULT match Mobile view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-4 top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                1st Semi Final,WT20 World Cup
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W -
                                                                    </span>
                                                                </span>
                                                                <p className="flex items-end gap-2">
                                                                    <span className=" font-semibold">135/3</span>
                                                                    <span className="text-[#909090] text-[12px] font-normal">
                                                                        {" "}
                                                                        (17.3 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/aus.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            AU-W -{" "}
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">134/10</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (20 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <img
                                                        src="/assets/img/player/g-5.png"
                                                        className="h-[32px]"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <p className=" font-semibold">Anneke Bosch</p>
                                                        <p className="text-[11px]">Man of the match</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT match Mobile view End */}
                                {/* RESULT 2 match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2  font-medium">
                                            <span className="text-[13px]">AUS</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                37
                                            </span>
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                40
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    16 Match,WT20 World Cup
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/eng.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="aus"
                                                        />
                                                        <span className="text-[#909090] font-semibold">
                                                            SA-W -{" "}
                                                        </span>
                                                    </div>
                                                    <p>
                                                        <span className=" font-semibold">107/3</span>
                                                        <span className="text-[#909090] text-[13px]">
                                                            {" "}
                                                            (17.2 overs)
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/ban.png"
                                                                className="h-[30px]"
                                                                alt="ban"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                BN-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">106/3</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (20 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className=" font-semibold flex flex-col items-center">
                                                <img src="/assets/img/home/win.png" alt="" />
                                                <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                    SA won by 7 wickets
                                                </p>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/player/g-6.png" alt="" />
                                                <p className=" font-semibold">Tazmin Brits</p>
                                                <p>Man of the match</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT 2 match desktopn view End */}
                                {/* RESULT 2 match Mobile view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-4 top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                16 Match,WT20 World Cup
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W -{" "}
                                                                    </span>
                                                                </span>
                                                                <p className="flex items-end gap-2">
                                                                    <span className=" font-semibold">107/3</span>
                                                                    <span className="text-[#909090] text-[12px] font-normal">
                                                                        {" "}
                                                                        (17.2 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/aus.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            BN-W -
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">106/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (20 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <img
                                                        src="/assets/img/player/g-6.png"
                                                        className="h-[32px]"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <p className=" font-semibold">Tazmin Brits</p>
                                                        <p className="text-[11px]">Man of the match</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT 2 match Mobile view End */}
                            </div>
                            <div
                                //  className="suide-pera-all1-data hidden"
                                className={`suide-pera-all-data ${activeSubTab === 'all1' ? 'block' : 'hidden'}`}
                            >
                                {/* SCHEDULED match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#A45B09] rounded-full pr-2 font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> SCHEDULED
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[13px] font-medium">SA</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    Final, WT20 World Cup 2024
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/sa.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="sa"
                                                        />
                                                        <span className="font-semibold">SA-W</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/nz.png"
                                                                className="h-[30px]"
                                                                alt="ind"
                                                            />
                                                            <span className="font-semibold">NZ-W</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" font-medium text-center">
                                                <p className="text-[#FC9014] text-[14px]">
                                                    20th September - Fri, <br /> 5:30 PM GMT
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="flex items-center justify-between space-x-5 mt-3">
                                        <div className="flex items-center">
                                            <p className=" text-[#909090] font-medium"> Points Table</p>
                                            <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                            <p className="text-[#909090] font-medium">Schedule</p>
                                        </div>
                                        <div className="flex mt-2 justify-end items-center space-x-2">
                                            <img src="/assets/img/home/handshake.png" alt="" />
                                            <span className="text-[#909090] font-medium">H2H</span>
                                        </div>
                                    </div>
                                </div>
                                {/* SCHEDULED match desktopn view End */}
                                {/* SCHEDULED match desktopn view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#A45B09] rounded-full font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> SCHEDULED
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-[12px] top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                Final, WT20 World Cup 2024
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/sa.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/nz.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            NZ-W
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=" font-medium text-center">
                                                        <p className="text-[#FC9014] font-medium mt-1 text-[11px]">
                                                            20th September - Fri,
                                                            <br />
                                                            5:30 PM GMT
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 text-[11px]">
                                                <span className="text-[#909090] font-medium">BAN</span>
                                                <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-md text-[#0B773C] pr-2">
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
                                                <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-md text-[#A70B0B] pr-2">
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
                                    </div>
                                </div>
                                {/* SCHEDULED match desktopn view End */}
                            </div>
                            <div
                                className={`suide-pera-all-data ${activeSubTab === 'all3' ? 'block' : 'hidden'}`}
                            // className="suide-pera-all3-data hidden"
                            >
                                {/* RESULT match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2  font-medium">
                                            <span className="text-[13px]">AUS</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                37
                                            </span>
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                40
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    1st Semi Final,WT20 World Cup
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/eng.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="aus"
                                                        />
                                                        <span className="text-[#909090] font-semibold">
                                                            SA-W -{" "}
                                                        </span>
                                                    </div>
                                                    <p>
                                                        <span className=" font-semibold">135/3</span>
                                                        <span className="text-[#909090] text-[13px]">
                                                            {" "}
                                                            (17.3 overs)
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/aus.png"
                                                                className="h-[30px]"
                                                                alt="ind"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                AU-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">134/10</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (20 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className=" font-semibold flex flex-col items-center">
                                                <img src="/assets/img/home/win.png" alt="" />
                                                <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                    SA won by 7 wickets
                                                </p>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/player/g-5.png" alt="" />
                                                <p className=" font-semibold">Anneke Bosch</p>
                                                <p>Man of the match</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT match desktopn view End */}
                                {/* RESULT match Mobile view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-4 top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                1st Semi Final,WT20 World Cup
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W -
                                                                    </span>
                                                                </span>
                                                                <p className="flex items-end gap-2">
                                                                    <span className=" font-semibold">135/3</span>
                                                                    <span className="text-[#909090] text-[12px] font-normal">
                                                                        {" "}
                                                                        (17.3 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/aus.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            AU-W -{" "}
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">134/10</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (20 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <img
                                                        src="/assets/img/player/g-5.png"
                                                        className="h-[32px]"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <p className=" font-semibold">Anneke Bosch</p>
                                                        <p className="text-[11px]">Man of the match</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT match Mobile view End */}
                                {/* RESULT 2 match desktopn view Start */}
                                <div className="lg:block hidden rounded-lg p-4 mb-4 bg-[#ffffff]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full pr-3  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[15px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2  font-medium">
                                            <span className="text-[13px]">AUS</span>
                                            <span className="flex items-center bg-[#FAFFFC] border-[1px] border-[#0B773C] rounded-full text-[#0B773C] pr-2">
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
                                                37
                                            </span>
                                            <span className="flex items-center bg-[#FFF7F7] border-[1px] border-[#A70B0B]  rounded-full text-[#A70B0B] pr-2">
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
                                                40
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="py-4 px-3">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <div className="">
                                                <p className="text-[#586577] text-[12px] mb-4 font-medium">
                                                    16 Match,WT20 World Cup
                                                </p>
                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img
                                                            src="/assets/img/eng.png"
                                                            className="h-[30px] rounded-full"
                                                            alt="aus"
                                                        />
                                                        <span className="text-[#909090] font-semibold">
                                                            SA-W -{" "}
                                                        </span>
                                                    </div>
                                                    <p>
                                                        <span className=" font-semibold">107/3</span>
                                                        <span className="text-[#909090] text-[13px]">
                                                            {" "}
                                                            (17.2 overs)
                                                        </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/ban.png"
                                                                className="h-[30px]"
                                                                alt="ban"
                                                            />
                                                            <span className="text-[#909090] font-semibold">
                                                                BN-W -{" "}
                                                            </span>
                                                        </div>
                                                        <p>
                                                            <span className=" font-semibold">106/3</span>
                                                            <span className="text-[#909090] text-[13px]">
                                                                {" "}
                                                                (20 overs)
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className=" font-semibold flex flex-col items-center">
                                                <img src="/assets/img/home/win.png" alt="" />
                                                <p className="text-[#0B773C] text-1xl w-[75%] text-center">
                                                    SA won by 7 wickets
                                                </p>
                                            </div>
                                            <div className="h-[100px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className="flex flex-col items-center">
                                                <img src="/assets/img/player/g-6.png" alt="" />
                                                <p className=" font-semibold">Tazmin Brits</p>
                                                <p>Man of the match</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT 2 match desktopn view End */}
                                {/* RESULT 2 match Mobile view Start */}
                                <div className="lg:hidden rounded-lg p-4 mb-4 bg-[#ffffff] performance-section relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="flex items-center text-[#0B773C] rounded-full  font-semibold"
                                                style={{ gap: 3 }}
                                            >
                                                <span className="rounded-full">●</span> RESULT
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-semibold pl-[10px] border-l-[1px] border-[#E4E9F0]">
                                                    Women's T20 World Cup 2024
                                                </h4>
                                            </div>
                                            <span className="absolute right-4 top-[19px]">
                                                <button className="arro-button">
                                                    <img src="/assets/img/arrow.png" className="" alt="" />
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="open-Performance-data">
                                        <div className="py-2 pb-3">
                                            <p className="text-[#586577] text-[11px] mb-4 font-normal">
                                                16 Match,WT20 World Cup
                                            </p>
                                            <div className="flex justify-between items-center text-[14px]">
                                                <div className="">
                                                    <div className="items-center space-x-2 font-medium w-[162px] md:w-full mb-4">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src="/assets/img/eng.png"
                                                                className="h-[30px] rounded-full"
                                                                alt="aus"
                                                            />
                                                            <div>
                                                                <span className="flex items-center gap-1">
                                                                    <span className="text-[#5e5e5e] font-medium">
                                                                        SA-W -{" "}
                                                                    </span>
                                                                </span>
                                                                <p className="flex items-end gap-2">
                                                                    <span className=" font-semibold">107/3</span>
                                                                    <span className="text-[#909090] text-[12px] font-normal">
                                                                        {" "}
                                                                        (17.2 overs)
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                            <div className="flex items-center space-x-2">
                                                                <img
                                                                    src="/assets/img/aus.png"
                                                                    className="h-[30px] rounded-full"
                                                                    alt="aus"
                                                                />
                                                                <div>
                                                                    <span className="flex items-center gap-1">
                                                                        <span className="text-[#5e5e5e] font-medium">
                                                                            BN-W -
                                                                        </span>
                                                                    </span>
                                                                    <p className="flex items-end gap-2">
                                                                        <span className=" font-semibold">106/3</span>
                                                                        <span className="text-[#909090] text-[12px] font-normal">
                                                                            (20 overs)
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="h-[100px] border-l-[1px] border-[#d0d3d7]"></div> */}
                                                <div className=" font-semibold flex flex-col items-center">
                                                    <img src="/assets/img/home/win.png" alt="" />
                                                    <p className="text-[#0B773C] font-semibold mt-1 text-[13px] w-[75%] text-center">
                                                        SA won by 7 wickets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E7F2F4]" />
                                        <div className="flex items-center justify-between space-x-5 mt-2">
                                            <div className="flex items-center">
                                                <p className=" text-[#909090] text-[11px] font-medium">
                                                    {" "}
                                                    Points Table
                                                </p>
                                                <div className="h-[20px] border-l-[1px] mx-5 border-[#d0d3d7]" />
                                                <div className="flex justify-end items-center space-x-2">
                                                    <img
                                                        src="/assets/img/home/handshake.png"
                                                        className="h-[15px]"
                                                        alt=""
                                                    />
                                                    <span className="text-[#909090] text-[11px] font-medium">
                                                        H2H
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <img
                                                        src="/assets/img/player/g-6.png"
                                                        className="h-[32px]"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <p className=" font-semibold">Tazmin Brits</p>
                                                        <p className="text-[11px]">Man of the match</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* RESULT 2 match Mobile view End */}
                            </div>
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <h3 className="text-1xl font-semibold mb-1">
                                    South Africa Women vs Australia Women, Semi Final
                                </h3>
                                <p className="text-gray-500 font-normal">
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide and
                                    the finals of the gran...
                                </p>
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

                            <WeeklySlider />

                            <div className=" my-4">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                        Fantasy Tips
                                    </h3>
                                </div>
                                <div className="bg-[#ffffff] rounded-lg ">
                                    <div className="p-4">
                                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                            <p className="text-[13px] font-semibold">
                                                NZ-W Vs WI-W Highlights: Eden Carson, Amelia Kerr Pummel
                                                West Indies In Semis As NZ Set Date With SA
                                            </p>
                                            <p className="text-[#586577] pt-2">15 hrs ago</p>
                                        </div>
                                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                            <p className="text-[13px] font-semibold">
                                                Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                                                As SA Stuns AUS In T20 WC
                                            </p>
                                            <p className="text-[#586577] pt-2">17 hrs ago</p>
                                        </div>
                                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                            <p className="text-[13px] font-semibold">
                                                Women's T20 World Cup, NZ vs WI: Unchanged New Zealand Opt
                                                To Bat; Check Out The Playing XIs
                                            </p>
                                            <p className="text-[#586577] pt-2">19 hrs ago</p>
                                        </div>
                                        <div className=" pb-2 mb-4 border-b-[1px] border-border-gray-700 ">
                                            <p className="text-[13px] font-semibold">
                                                SA Cricketers Get Emotional After Historic Win Against
                                                Australia To Enter T20 World Cup 2024 Final - Watch
                                            </p>
                                            <p className="text-[#586577] pt-2">18 Oct 2024</p>
                                        </div>
                                        <div className=" pb-2 mb-2">
                                            <p className="text-[13px] font-semibold">
                                                'Probably Took Wrong Risk': Alyssa Healy Regrets Sitting Out
                                                As SA Stuns AUS In T20 WC
                                            </p>
                                            <p className="text-[#586577] pt-2">18 Oct 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pb-2 my-4">
                                <div className="py-2 mb-2">
                                    <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                        POPULAR
                                    </h3>
                                </div>
                                <div className="">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2">
                                        <div>
                                            <img src="/assets/img/1.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">ICC World cup</div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/2.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            ICC Champion Trophy
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/3.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">T20 World Cup</div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/4.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Indian Premium League
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/5.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Pakistan Super League
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/6.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Bangladesh Premium Leaguge
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/7.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Big Bash Leaguge
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3">
                                        <div>
                                            <img src="/assets/img/8.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">Super Smash</div>
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
