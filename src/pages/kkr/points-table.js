import Layout from '@/Components/Layout'
import Link from 'next/link';
import WeeklySlider from '@/Components/WeeklySlider';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function PointsTable() {


    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);


    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleMore = () => {
        setShowReadMore(!showReadMore);
    };


    const toggleFaq = (faqId) => {
        setOpenFaq((prev) => (prev === faqId ? null : faqId));
    };


    const faqData = [
        {
            id: "faq1",
            question: "What is NRR?",
            answer:
                "Apart from the exception set out in the following paragraph, the position, brand and visual identity of each Commercial Logo on the Playing Clothing must remain the same throughout the season, unless approved this in advance by the BCCI, at its sole discretion.",
        },
        {
            id: "faq2",
            question: "How To Calculate NRR?",
            answer:
                "NRR is calculated by the difference between runs scored and runs conceded divided by the number of overs.",
        },
        {
            id: "faq3",
            question: "How Many Teams Will Qualify For IPL 2024 Playoffs?",
            answer: "Four teams will qualify for the IPL playoffs based on their positions in the points table.",
        },
        {
            id: "faq4",
            question: "What happens when teams have the same points in the table?",
            answer: "Four teams will qualify for the IPL playoffs based on their positions in the points table.",
        },
        {
            id: "faq5",
            question: "Which team is the topper in the points table in IPL 2024?",
            answer: "Four teams will qualify for the IPL playoffs based on their positions in the points table.",
        },

        {
            id: "faq6",
            question: "What are the top 4 teams in the points table as of now?",
            answer: "Four teams will qualify for the IPL playoffs based on their positions in the points table.",
        },
        {
            id: "faq7",
            question: "What are the bottom-ranked 2 teams in IPL points table 2024 as of now?",
            answer: "Four teams will qualify for the IPL playoffs based on their positions in the points table.",
        },

    ];


    
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
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/kkr/news">
                            <button
                                onclick="handleTabClick(event, 'points')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
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
    
            <div id="points" className="">
                    <div className="md:grid grid-cols-12 gap-4">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <h3 className="text-1xl font-semibold mb-1">
                                    South Africa Women vs New Zealand Women, Final
                                </h3>
                                <p
                                    className={`text-gray-500 font-normal overflow-hidden ${isExpanded ? "" : "line-clamp-3"
                                        }`}
                                >

                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide...
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide
                                </p>
                                <button
                                    onClick={toggleReadMore}
                                    className="text-blue-600 font-semibold flex items-center text-[13px] pt-2 underline"
                                >
                                    {isExpanded ? "Show less" : "Read more"}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 ml-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] mb-2 p-4">
                                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                    IPl 2024 Pointe Table
                                </h3>
                                <div>
                                    <div
                                        className="overflow-x-auto  [&::-webkit-scrollbar] [&::-webkit-scrollbar]:h-[8px] 
                              [&::-webkit-scrollbar-track]:bg-gray-100 
                              [&::-webkit-scrollbar-thumb]:bg-[#DFE9F6] 
                              dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
                              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                                    >
                                        <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                            <thead className="bg-blue-50 text-gray-700 ">
                                                <tr>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium w-[10px]">
                                                        No
                                                    </th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                        Team
                                                    </th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">M</th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">W</th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">L</th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">T</th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                        N/R
                                                    </th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                        PTS
                                                    </th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                        Net RR
                                                    </th>
                                                    <th className="md:px-2 pl-[14px] py-3 font-medium">
                                                        Form
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr className="hover:bg-[#fffae5]">
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">1</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                        <Link href="/kkrseries">
                                                            <div className="flex items-center gap-[5px] w-[120px]">
                                                                <div>
                                                                    <img
                                                                        src="/assets/img/ipl/1.png"
                                                                        className="h-[20px]"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <p>
                                                                    KKR<span className="text-[#00B564]"> (Q)</span>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">2</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/2.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>
                                                                SH<span className="text-[#00B564]"> (Q)</span>
                                                            </p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">3</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/3.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>
                                                                RR<span className="text-[#00B564]"> (Q)</span>
                                                            </p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">4</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/4.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>
                                                                RCB<span className="text-[#00B564]"> (Q)</span>
                                                            </p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/5.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>CSK</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">6</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/6.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>DC</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">7</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/7.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>LSG</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">8</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/8.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>GT</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/9.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>PK</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="md:px-2 pl-[14px] py-3 w-[10px]">10</td>
                                                    <td className="md:px-2 pl-[14px] py-3 text-[#217AF7]">
                                                    <Link href="/kkrseries">
                                                        <div className="flex items-center gap-[5px]">
                                                            <div>
                                                                <img
                                                                    src="/assets/img/ipl/10.png"
                                                                    className="h-[20px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p>MI</p>
                                                        </div>
                                                        </Link>
                                                    </td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">5</td>
                                                    <td className="md:px-2 pl-[14px] py-3">123</td>
                                                    <td className="md:px-2 pl-[14px] py-3">45.50</td>
                                                    <td className="md:px-2 pl-[14px] py-3">9</td>
                                                    <td className="md:px-2 pl-[14px] py-3">0</td>
                                                    <td className="md:px-2 pl-[14px] py-3">74.65</td>
                                                    <td className="md:px-2 pl-[14px] py-3">
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[4px] py-[0px] rounded">
                                                                W
                                                            </span>
                                                            <span className="flex">
                                                                <button className="arro-button">
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
                                                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold">
                                    {" "}
                                    Last Updated On 17 Oct 2024, 22:49 IST
                                </p>
                                <p className="text-[14px] text-gray-500">
                                    <span className="font-semibold text-[#1F2937]">M:</span>
                                    Matches,<span className="font-semibold text-[#1F2937]">
                                        {" "}
                                        W:
                                    </span>{" "}
                                    Won, <span className="font-semibold text-[#1F2937]">L:</span>{" "}
                                    Lost, <span className="font-semibold text-[#1F2937]">T:</span>{" "}
                                    Tie, <span className="font-semibold text-[#1F2937]">N/R:</span> No
                                    Result, <span className="font-semibold text-[#1F2937]">PTS:</span>{" "}
                                    Points,{" "}
                                    <span className="font-semibold text-[#1F2937]">Net RR:</span> Net
                                    run rate, <span className="font-semibold text-[#1F2937]">Q:</span>{" "}
                                    Qualified
                                </p>
                            </div>


                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <h3 className="text-1xl font-semibold mb-1">
                                    India vs Zimbabwe 2024
                                </h3>
                                <p
                                    className={`text-gray-500 font-normal overflow-hidden ${showReadMore ? "" : "line-clamp-3"
                                        }`}
                                >
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide...
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide...
                                    The biggest tournament in the cricketing circuit, the ICC T20
                                    WORLD Cup is underway in the USAs and the West Indies. The
                                    tournament received excellent response from the fans worldwide...
                                </p>
                                <button
                                    onClick={toggleMore}
                                    className="text-blue-600 font-semibold flex items-center text-[13px] pt-2 underline"
                                >
                                    {isExpanded ? "Show less" : "Read more"}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4 ml-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <div className="">
                                    <h2 className="text-1xl font-semibold mb-1">FAQs on IPL Points Table</h2>
                                    <div className="border-t-[1px] border-[#E7F2F4]" />
                                    <div className="space-y-2 my-2">
                                        {/* FAQ Item */}
                                        {faqData.map(({ id, question, answer }) => (
                                            <div key={id}>
                                                <button
                                                    className="w-full text-left flex justify-between items-center px-4 py-2 transition"
                                                    onClick={() => toggleFaq(id)} // Use React's onClick
                                                >
                                                    <span className="text-[14px] font-medium">{question}</span>
                                                    <span
                                                        className={`transition-transform transform ${openFaq === id ? "rotate-180" : "rotate-0"
                                                            }`}
                                                        id={`icon-${id}`}
                                                    >
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
                                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                                <p
                                                    id={id}
                                                    className={`my-2 px-4 text-gray-600 ${openFaq === id ? "block" : "hidden"
                                                        }`}
                                                >
                                                    {answer}
                                                </p>
                                                <div className="border-t-[1px] border-[#E7F2F4]" />
                                            </div>
                                        ))}
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

                            <WeeklySlider />


                            <div className=" pb-2 my-4">
                            <div className="py-2">
                                <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                    POPULAR</h3>

                            </div>
                            <div className="">
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2">
                                        <div>
                                            <img src="/assets/img/1.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            ICC World cup
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/2.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            ICC Champion Trophy
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/3.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            T20 World Cup
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/4.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Indian Premium League
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/5.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Pakistan Super League
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/6.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Bangladesh Premium Leaguge
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3 mb-2 ">
                                        <div>
                                            <img src="/assets/img/7.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Big Bash Leaguge
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/t20series">
                                    <div className="bg-[#ffffff] text-[14px] rounded-lg px-4 flex items-center space-x-3 py-3">
                                        <div>
                                            <img src="/assets/img/8.png" alt="" />
                                        </div>
                                        <div className="font-medium text-[#394351]">
                                            Super Smash
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
    
          </section>
    
    
    
        </Layout>
    
    
    
      )
}
