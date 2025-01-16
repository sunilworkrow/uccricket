
import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'


export default function UpcomingFantasyTips() {

 const [activeRecent, setActiveRecent] = useState("cust-box-click-mga");

    const [show, setShow] = useState(false);
     const [show1, setShow1] = useState(false);

 const handleRecentChange = (team) => {
    setActiveRecent(team);
};


    return (
        <Layout>
            <section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
                <div className="lg:w-[1000px] mx-auto">
                    <div className="md:flex justify-between items-center md:py-0 py-4">
                        <div className=" text-1xl text-[#FF912C] font-bold uppercase w-full">
                            <span className="h-[10px] w-[10px] inline-block	bg-[#FF912C] rounded-full" />
                            upcoming
                        </div>
                        <div className="text-[#8192B4] font-normal w-full text-1xl md:text-center md:mx-0 my-3">
                            Bangladesh in India August,&nbsp;3rd Test
                        </div>
                        <div className="flex text-[#8192B4] text-1xl font-normal w-full md:justify-end md:justify-start">
                            <img src="/assets/img/clander.png" className="mr-2" alt="" />
                            1-5 oct 2024
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F01A] h-48">
                    <div className="lg:w-[1000px] mx-auto md:py-8 tracking-[1px]">
                        <div className="flex py-8 justify-between items-center">
                            <div className="flex flex-col md:flex-row text-[#FF912C] font-bold uppercase  md:items-center items-start w-full">
                                <img
                                    className="md:h-[42px] md:w-[42px] h-[30px] w-[30px]"
                                    src="/assets/img/flg-1.png"
                                    alt="ind"
                                />
                                <p className="text-[#BDCCECA8] md:mx-3 mx-0 md:text-[19px] text-[14px] font-semibold uppercase">
                                    IND
                                </p>
                            </div>
                            <div className="text-[#8192B4] font-normal text-center w-full text-center">
                                <p className="text-[#C1CEEA] text-1xl">7:00 PM</p>
                                <p className="text-[#FFBD71] md:text-[24px] text-[16px] font-semibold">
                                    1 October
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center items-end text-[#8192B4] font-normal w-full justify-end">
                                <p className="text-[#BDCCECA8] md:block hidden md:text-[19px] text-[14px] md:mx-3 mx-0 font-semibold uppercase">
                                    BAN
                                </p>
                                <img
                                    src="/assets/img/ban.png"
                                    className="md:h-[42px] md:w-[42px] h-[30px] w-[30px]"
                                    alt="ban"
                                />
                                <p className="text-[#BDCCECA8] md:hidden md:text-[19px] text-[14px] md:mx-3 mx-0 font-semibold uppercase">
                                    BAN
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
                <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/scheduled/infoUpcoming-match">
                            <button
                                onclick="handleTabClick(event, 'info')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                More Info
                            </button>
                        </Link>
                        <Link href="">
                            <button
                                onclick="handleTabClick(event, 'live')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="">
                            <button
                                onclick="handleTabClick(event, 'scorecard')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Scorecard
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-matchSquads">
                            <button
                                onclick="handleTabClick(event, 'overs')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Squads
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-pointsTable">
                            <button
                                onclick="handleTabClick(event, 'points')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-Stats">
                            <button
                                onclick="handleTabClick(event, 'stats')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Stats
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-Fantasy-Tips">
                            <button
                                onclick="handleTabClick(event, 'stats')"
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Fantasy Tips
                            </button>
                        </Link>
                    </div>
                </div>

                <div id="Fantasy" className="">
                    <div className="md:grid grid-cols-12 gap-4">
                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="py-2 mb-2">
                                <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                    Playing XI
                                </h3>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                                <div className="flex justify-between items-center pb-4">
                                    <div className="font-bold flex items-center">
                                        <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                        <p className="mx-2 text-1xl font-semibold">MSG</p>
                                    </div>
                                    <div className=" font-semibold">VS</div>
                                    <div className="font-bold flex items-center">
                                        <p className="mx-2 text-1xl font-semibold text-right">HAW</p>
                                        <img className="h-[30px]" src="/assets/img/flag/haw.png" alt="ban" />
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-[#E4E9F0]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="border-t-[1px] border-[#eef5ff]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="border-t-[1px] border-[#eef5ff]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="border-t-[1px] border-[#eef5ff]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="border-t-[1px] border-[#eef5ff]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="border-t-[1px] border-[#eef5ff]" />
                                <div className="flex justify-between items-center">
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div>-</div>
                                    <a href="#">
                                        <div className="flex items-center space-x-3 py-3">
                                            <div className="font-medium">
                                                <h2 className="text-[15px]"> R sharma (c) </h2>
                                                <p className="text-[#909090] font-normal">Batter</p>
                                            </div>
                                            <div>
                                                <img src="/assets/img/player/1.png" alt="R sharma (c)" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <div className="rounded-lg bg-[#ffffff] p-4">
                                    <h3 className="text-1xl font-semibold pl-[8px] border-l-[3px] border-[#1a80f8] mb-2">
                                        Recent Matches On Venue
                                    </h3>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="mt-3 cust-box-click-container">
                                        <div className="flex items-center gap-3">


                                            <button
                                                className={`cust-box-click-button font-medium px-5 py-1  ${activeRecent === "cust-box-click-mga" ? "bg-[#081736] text-white" : "bg-[#ffffff] text-[#6A7586]"} rounded-full `}
                                                onClick={() => handleRecentChange("cust-box-click-mga")}
                                            // className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                            // onclick="showCustomBox(this, 'cust-box-click-mga')"
                                            >
                                                <span>MGA</span>
                                            </button>
                                            <button
                                                className={`cust-box-click-button font-medium px-5 py-1 ${activeRecent === "cust-box-click-haw" ? "bg-[#081736] text-white" : "bg-[#ffffff] text-[#6A7586]"} rounded-full `}
                                                onClick={() => handleRecentChange("cust-box-click-haw")}
                                            // className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                                            // onclick="showCustomBox(this, 'cust-box-click-haw')"
                                            >
                                                <span>HAW</span>
                                            </button>
                                        </div>
                                        <div className={`cust-box-click-content cust-box-click-mga mt-4 ${activeRecent === "cust-box-click-mga" ? "" : "hidden"} `}>
                                            <div className="grid grid-cols-12 gap-4 cust-tp-pera-card-section">
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-6 col-span-12 cust-tp-pera-card">
                                                    <div className="bg-[#f2f7ff] rounded-lg max-w-md w-full p-4 border-[1px]">
                                                        <div className="flex justify-between items-center pb-1">
                                                            <div>
                                                                <h2 className="text-1xl font-semibold">Match 29</h2>
                                                                <p className="text-[#7B4C09] font-medium">
                                                                    Tue, 19 Oct - 09:30 AM
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="flex items-center justify-between py-3">
                                                            <a href="#">
                                                                <div className="flex space-x-2 ">
                                                                    <div className="flex items-center space-x-1 flex-col">
                                                                        <img
                                                                            src="/assets/img/flag/b-8.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="wiw"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <p className="text-1xl font-semibold">120/8</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className="text-gray-500 text-2xl font-semibold">
                                                                ↔
                                                            </div>
                                                            <a href="#">
                                                                <div className="flex space-x-2 justify-end">
                                                                    <div className="mt-1 text-end">
                                                                        <p className="text-1xl font-semibold">128/9</p>
                                                                        <p className="text-[#909090]">(20.0 overs)</p>
                                                                    </div>
                                                                    <div className="flex items-center space-x-1 flex-col font-medium">
                                                                        <img
                                                                            src="/assets/img/flag/b-10.png"
                                                                            className="h-[30px] rounded-full"
                                                                            alt="nz"
                                                                        />
                                                                        <span className="text-[#909090]">BAN</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                                        <div className="text-center mt-3">
                                                            <a href="#">
                                                                <p className="text-green-600 font-semibold">
                                                                    IND won by 7 Wicket
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-12 text-center flex justify-center">
                                                    <button className="cust-tp-pera-load-more text-[#1A80F8] font-semibold flex items-center justify-center text-[13px] pt-2 underline">
                                                        Load More{" "}
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
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`cust-box-click-content cust-box-click-haw mt-4"  ${activeRecent === "cust-box-click-haw" ? "" : "hidden"}`}>
                                            HAW
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                <div>
                                    <h3 className="text-[15px] font-semibold mb-2 pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                                        Team Form{" "}
                                        <span className="text-[#909090]">
                                            {" "}
                                            (Last 5 Matches, Most recent first){" "}
                                        </span>
                                    </h3>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="md:px-2">
                                        <div className="performance-section">
                                            <div className="flex items-center justify-between my-3">
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <img
                                                            src="/assets/img/flag/msg.png"
                                                            className="h-[25px]"
                                                            alt="msg"
                                                        />
                                                    </div>
                                                    <h3 className="text-1xl font-medium">MAG</h3>
                                                </div>
                                                <div>
                                                    <div className="ml-auto flex gap-1 items-center">
                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                            W
                                                        </span>
                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                            W
                                                        </span>
                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                            L
                                                        </span>
                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                            L
                                                        </span>
                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                            W
                                                        </span>
                                                        <span>
                                                            <button className="arro-button" onClick={() => setShow(!show)}>
                                                                <img src="/assets/img/arrow.png" className="" alt="" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className={`md:px-3 open-Performance-data ${show ? "" : "hidden"}`}>
                                                {/* full screen teame data */}
                                                <div className="overflow-x-auto lg:block hidden">
                                                    <table className="w-full text-left rtl:text-right">
                                                        <tbody>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1 ">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <img
                                                                                    src="/assets/img/flag/18.png"
                                                                                    className="h-[24px] rounded-full"
                                                                                    alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">AUS</span>
                                                                            </div>
                                                                            <p>274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <p>274/10 &amp; 170/10</p>
                                                                            <div className="flex items-center space-x-1">
                                                                                <span className="text-[#909090]">IND</span>
                                                                                <img
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[24px]"
                                                                                    alt="ind"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <div className="flex items-center space-x-1">
                                                                                <img
                                                                                    src="/assets/img/flag/18.png"
                                                                                    className="h-[24px] rounded-full"
                                                                                    alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">AUS</span>
                                                                            </div>
                                                                            <p className="">540/10 &amp; 220/10</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <p>140/10 &amp; 420/10</p>
                                                                            <div className="flex items-center space-x-1">
                                                                                <span className="text-[#909090]">IND</span>
                                                                                <img
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[24px]"
                                                                                    alt="aus"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                            L
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <div className="flex items-center space-x-1">
                                                                                <img
                                                                                    src="/assets/img/flag/19.png"
                                                                                    className="h-[24px] rounded-full"
                                                                                    alt="pak"
                                                                                />
                                                                                <span className="text-[#909090]">PAK</span>
                                                                            </div>
                                                                            <p className="">274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <p>250/10 &amp; 160/10</p>
                                                                            <div className="flex items-center space-x-1">
                                                                                <span className="text-[#909090]">IND</span>
                                                                                <img
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[24px]"
                                                                                    alt="aus"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            250/10 &amp; 160/10
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                            L
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <div className="flex items-center space-x-1">
                                                                                <img
                                                                                    src="/assets/img/flag/19.png"
                                                                                    className="h-[24px] rounded-full"
                                                                                    alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">PAK</span>
                                                                            </div>
                                                                            <p className="">274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <p>280/10 &amp; 190/10</p>
                                                                            <div className="flex items-center space-x-1">
                                                                                <span className="text-[#909090]">IND</span>
                                                                                <img
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[24px]"
                                                                                    alt="aus"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <div className="flex items-center space-x-1">
                                                                                <img
                                                                                    src="/assets/img/flag/18.png"
                                                                                    className="h-[24px] rounded-full"
                                                                                    alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">PAK</span>
                                                                            </div>
                                                                            <p className="">174/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <a href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                            <p>380/10 &amp; 250/10</p>
                                                                            <div className="flex items-center space-x-1">
                                                                                <span className="text-[#909090]">IND</span>
                                                                                <img
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[24px]"
                                                                                    alt="aus"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* responsive teame data  */}
                                                <div className="lg:hidden block">
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/18.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">AUS</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                          VS
                                      </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>274/10 &amp; 170/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/18.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">AUS</span>
                                                                </div>
                                                                <p>540/10 &amp; 220/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                      VS
                                  </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>140/10 &amp; 420/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                        L
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                  VS
                              </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                        L
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                              VS
                          </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                          VS
                      </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                      VS
                  </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="performance-section">
                                            <div className="mt-6">
                                                <div className="flex items-center justify-between my-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <img
                                                                src="/assets/img/flag/haw.png"
                                                                alt="haw"
                                                                className="h-[25px]"
                                                            />
                                                        </div>
                                                        <h3 className="text-1xl font-medium">HAW</h3>
                                                    </div>
                                                    <div>
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span>
                                                                <button className="arro-button" onClick={() => setShow1(!show1)}>
                                                                    <img src="/assets/img/arrow.png" alt="" />
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-t-[1px] border-[#E4E9F0]" />
                                            </div>
                                            <div className={`md:px-3 open-Performance-data ${show1 ? "" : "hidden"}`}>
                                                {/* full screen teame data */}
                                                <div className="overflow-x-auto lg:block hidden">
                                                    <table className="w-full text-left rtl:text-right">
                                                        <tbody>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1 ">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                        <div className="flex items-center space-x-1">
                                                                            <img
                                                                                src="/assets/img/flag/18.png"
                                                                                className="h-[24px] rounded-full"
                                                                                alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">AUS</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                        <p>274/10 &amp; 170/10</p>
                                                                        <div className="flex items-center space-x-1">
                                                                            <span className="text-[#909090]">IND</span>
                                                                            <img
                                                                                src="/assets/img/flag/17.png"
                                                                                className="h-[24px]"
                                                                                alt="ind"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <div className="flex items-center space-x-1">
                                                                            <img
                                                                                src="/assets/img/flag/18.png"
                                                                                className="h-[24px] rounded-full"
                                                                                alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">AUS</span>
                                                                        </div>
                                                                        <p className="">540/10 &amp; 220/10</p>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <p>140/10 &amp; 420/10</p>
                                                                        <div className="flex items-center space-x-1">
                                                                            <span className="text-[#909090]">IND</span>
                                                                            <img
                                                                                src="/assets/img/flag/17.png"
                                                                                className="h-[24px]"
                                                                                alt="aus"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                            L
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <div className="flex items-center space-x-1">
                                                                            <img
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[24px] rounded-full"
                                                                                alt="pak"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p className="">274/10 &amp; 170/10</p>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <p>250/10 &amp; 160/10</p>
                                                                        <div className="flex items-center space-x-1">
                                                                            <span className="text-[#909090]">IND</span>
                                                                            <img
                                                                                src="/assets/img/flag/17.png"
                                                                                className="h-[24px]"
                                                                                alt="aus"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            250/10 &amp; 160/10
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                            L
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <div className="flex items-center space-x-1">
                                                                            <img
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[24px] rounded-full"
                                                                                alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p className="">274/10 &amp; 170/10</p>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <p>280/10 &amp; 190/10</p>
                                                                        <div className="flex items-center space-x-1">
                                                                            <span className="text-[#909090]">IND</span>
                                                                            <img
                                                                                src="/assets/img/flag/17.png"
                                                                                className="h-[24px]"
                                                                                alt="aus"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                <td className="px-4 pl-0 py-1">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <div className="flex items-center space-x-1">
                                                                            <img
                                                                                src="/assets/img/flag/18.png"
                                                                                className="h-[24px] rounded-full"
                                                                                alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p className="">174/10 &amp; 160/10</p>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                    VS
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                        <p>380/10 &amp; 250/10</p>
                                                                        <div className="flex items-center space-x-1">
                                                                            <span className="text-[#909090]">IND</span>
                                                                            <img
                                                                                src="/assets/img/flag/17.png"
                                                                                className="h-[24px]"
                                                                                alt="aus"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="md:px-4 py-2">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                    <div className="text-center">
                                                                        <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                            W
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* responsive teame data  */}
                                                <div className="lg:hidden block">
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/18.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">AUS</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                          VS
                                      </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>274/10 &amp; 170/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/18.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">AUS</span>
                                                                </div>
                                                                <p>540/10 &amp; 220/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                      VS
                                  </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>140/10 &amp; 420/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                        L
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                                  VS
                              </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                        L
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                              VS
                          </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                          VS
                      </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                        <div className="">
                                                            <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                <div className="flex items-center space-x-1">
                                                                    <img
                                                                        src="/assets/img/flag/19.png"
                                                                        className="h-[18px] rounded-full"
                                                                        alt="aus"
                                                                    />
                                                                    <span className="text-[#909090]">PAK</span>
                                                                </div>
                                                                <p>274/10 &amp; 170/10</p>
                                                            </div>
                                                            {/* <div className="md:px-4 py-2 font-medium text-center text-[#6A7586]">
                      VS
                  </div> */}
                                                            <div>
                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                    <div className="flex items-center space-x-1">
                                                                        <img
                                                                            src="/assets/img/flag/17.png"
                                                                            className="h-[18px]"
                                                                            alt="ind"
                                                                        />
                                                                        <span className="text-[#909090]">IND</span>
                                                                    </div>
                                                                    <p>250/10 &amp; 160/10</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right leading-6">
                                                                <p className="font-medium">2nd TEST</p>
                                                                <p className="text-[#909090] font-normal">
                                                                    AUS VS IND 2024
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div className="text-center">
                                                                    <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                        W
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                <div className="">
                                    <div className="md:flex justify-between items-center  mb-3">
                                        <h3 className="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Team Comparison (Last 10 matches)
                                        </h3>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="">
                                        <div>
                                            <div className="py-4 flex justify-between items-center">
                                                <div className="font-bold flex items-center">
                                                    <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                                    <p className="mx-2 text-1xl font-semibold">
                                                        MSG
                                                        <span className="text-[13px] text-[#9094b6] font-medium block">
                                                            vs all teams
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="font-bold flex items-center">
                                                    <p className="mx-2 text-1xl font-semibold text-right">
                                                        HAW
                                                        <span className="text-[13px] text-[#9094b6] font-medium block">
                                                            vs all teams
                                                        </span>
                                                    </p>
                                                    <img
                                                        className="h-[30px]"
                                                        src="/assets/img/flag/haw.png"
                                                        alt="ban"
                                                    />
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className="py-2 flex justify-between items-center">
                                                <div className="font-medium text-[#586577] w-full">
                                                    <p className="mx-2 font-semibold uppercase">1</p>
                                                </div>
                                                <div className=" font-semibold text-center w-full">
                                                    <p className="text-[#73758B] font-normal">
                                                        Matches Played
                                                    </p>
                                                </div>
                                                <div className="font-medium text-right w-full">
                                                    <p className="text-[#586577] font-medium">1</p>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className="py-2 flex justify-between items-center">
                                                <div className="font-medium text-[#586577] w-full">
                                                    <p className="mx-2 font-semibold text-[#439F76] uppercase">
                                                        100%
                                                    </p>
                                                </div>
                                                <div className=" font-semibold text-center w-full">
                                                    <p className="text-[#73758B] font-normal">Win</p>
                                                </div>
                                                <div className="font-medium text-right w-full">
                                                    <p className="text-[#586577] font-medium">0%</p>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className="py-2 flex justify-between items-center">
                                                <div className="font-medium text-[#586577] w-full">
                                                    <p className="mx-2 font-semibold uppercase text-[#439F76]">
                                                        119
                                                    </p>
                                                </div>
                                                <div className=" font-semibold text-center w-full">
                                                    <p className="text-[#73758B] font-normal">Avg Score</p>
                                                </div>
                                                <div className="font-medium text-right w-full">
                                                    <p className="text-[#586577] font-medium">123</p>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className="py-2 flex justify-between items-center">
                                                <div className="font-medium text-[#586577] w-full">
                                                    <p className="mx-2 font-semibold uppercase text-[#439F76]">
                                                        212
                                                    </p>
                                                </div>
                                                <div className=" font-semibold text-center w-full">
                                                    <p className="text-[#73758B] font-normal">
                                                        Highest Score
                                                    </p>
                                                </div>
                                                <div className="font-medium text-right w-full">
                                                    <p className="text-[#586577] font-medium">231</p>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                            <div className="py-2 flex justify-between items-center">
                                                <div className="font-medium text-[#586577] w-full">
                                                    <p className="mx-2 font-semibold uppercase text-[#E14848]">
                                                        152
                                                    </p>
                                                </div>
                                                <div className=" font-semibold text-center w-full">
                                                    <p className="text-[#73758B] font-normal">Lowest Score</p>
                                                </div>
                                                <div className="font-medium text-right w-full">
                                                    <p className="text-[#586577] font-medium">112</p>
                                                </div>
                                            </div>
                                            <div className="border-t-[1px] border-[#E4E9F0]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="py-2 mb-2">
                                <h3 className="text-1xl font-semibold pl-[3px] border-l-[3px] border-[#1a80f8]">
                                    Playing XI
                                </h3>
                            </div>
                            <div
                                className="rounded-lg p-4 mb-4 flex items-center justify-between max-w-md mx-auto shadow-lg"
                                style={{
                                    backgroundImage: 'url("/assets/img/bg-player.png")',
                                    backgroundPosition: "center"
                                }}
                            >
                                <div className="text-center">
                                    <div className="relative">
                                        <img
                                            src="/assets/img/player/r1.png"
                                            alt="B Hassan"
                                            className="w-[48px] mx-auto"
                                        />
                                        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            C
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium bg-white px-2 rounded-md">
                                        B Hassan
                                    </p>
                                    <p className="text-sm font-bold text-white">9.0</p>
                                </div>
                                <div className="text-center">
                                    <div className="relative">
                                        <img
                                            src="/assets/img/player/r2.png"
                                            alt="A Hamzah"
                                            className="w-[48px] mx-auto"
                                        />
                                        <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            Vc
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium bg-[black] px-2 text-white rounded-md">
                                        A Hamzah
                                    </p>
                                    <p className="text-sm font-bold text-white">8.5</p>
                                </div>
                                <button
                                    className="bg-white text-black font-medium text-sm px-4 py-2 rounded-lg shadow"
                                    style={{ boxShadow: "0px 5px 0px 0px #000000" }}
                                >
                                    Full Team
                                </button>
                            </div>
                            <div
                                className="rounded-lg p-4 mb-4 flex items-center justify-between max-w-md mx-auto shadow-lg"
                                style={{
                                    backgroundImage: 'url("/assets/img/bg-player.png")',
                                    backgroundPosition: "center"
                                }}
                            >
                                <div className="text-center">
                                    <div className="relative">
                                        <img
                                            src="/assets/img/player/r1.png"
                                            alt="B Hassan"
                                            className="w-[48px] mx-auto"
                                        />
                                        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            C
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium bg-white px-2 rounded-md">
                                        B Hassan
                                    </p>
                                    <p className="text-sm font-bold text-white">9.0</p>
                                </div>
                                <div className="text-center">
                                    <div className="relative">
                                        <img
                                            src="/assets/img/player/r2.png"
                                            alt="A Hamzah"
                                            className="w-[48px] mx-auto"
                                        />
                                        <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            Vc
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium bg-[black] px-2 text-white rounded-md">
                                        A Hamzah
                                    </p>
                                    <p className="text-sm font-bold text-white">8.5</p>
                                </div>
                                <button
                                    className="bg-white text-black font-medium text-sm px-4 py-2 rounded-lg"
                                    style={{ boxShadow: "0px 5px 0px 0px #000000" }}
                                >
                                    Full Team
                                </button>
                            </div>
                            <div className="py-2 mb-2">
                                <h3 className="text-[15px] font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                    Head To Head{" "}
                                    <span className="text-[#909090]"> (Last 10 Matches) </span>
                                </h3>
                            </div>
                            <div className="bg-[#ffffff] rounded-lg p-4 mb-2">
                                <div className="flex justify-between items-center">
                                    <div className="font-bold flex items-center">
                                        <img className="h-[30px]" src="/assets/img/flag/msg.png" alt="" />
                                        <p className="mx-2 text-1xl font-semibold">MSG</p>
                                    </div>
                                    <div className=" font-normal text-center">
                                        <p className="text-[#D28505] text-[17px] font-semibold">
                                            0 <span className="text-[#009900]">- 0</span>
                                        </p>
                                    </div>
                                    <div className="font-bold flex items-center">
                                        <p className="mx-2 text-1xl font-semibold text-right">HAW</p>
                                        <img className="h-[30px]" src="/assets/img/flag/haw.png" alt="ban" />
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 mb-2">
                                <h3 className="text-[15px] font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                    Venue Details
                                </h3>
                            </div>
                            <div className="bg-[#ffffff] rounded-lg p-4 mb-4">
                                <div className="">
                                    {/* Pitch Info */}
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">Pitch</p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 font-medium">Spinning Pitch</p>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">
                                                Batting Condition
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 font-medium">High scoring</p>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">
                                                Pace Bowling
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 font-medium">Swing Favorable</p>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">
                                                Spin Bowling
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 font-medium">Average</p>
                                        </div>
                                    </div>
                                    {/* Innings Stats */}
                                    <div className="bg-[#ebf2fa] rounded-lg mb-4">
                                        <div className="flex justify-between items-center text-center font-semibold text-sm">
                                            <div className="bg-[#dceafb] w-full py-2 rounded-tl-lg">
                                                1st Inning
                                            </div>
                                            <div className="h-[20px] border-l-[1px] border-[#d0d3d7]" />
                                            <div className="bg-[#dceafb] w-full py-2 rounded-tr-lg">
                                                2nd Inning
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-center p-4 text-sm">
                                            <div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg Runs
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">245</p>
                                                    </div>
                                                </div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg Wkts
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">6</p>
                                                    </div>
                                                </div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg SR
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">165.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:block hidden h-[80px] border-l-[1px] border-[#d0d3d7]"></div>
                                            <div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg Runs
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">108</p>
                                                    </div>
                                                </div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg Wkts
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">5</p>
                                                    </div>
                                                </div>
                                                <div className="pb-2 flex justify-between items-center">
                                                    <div className="">
                                                        <p className="mx-2 text-[#586577] font-medium ">
                                                            Avg SR
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <p className="mx-2 font-medium">203.74</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Toss Info */}
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold mb-1">
                                            Toss winners opt to
                                        </p>
                                        <div className="flex items-center justify-between text-xs">
                                            <span>62% Bat First</span>
                                            <span>38% Bowl First</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                className="bg-blue-500 h-2 rounded-full"
                                                style={{ width: "62%" }}
                                            />
                                        </div>
                                    </div>
                                    {/* Batting Stats */}
                                    <div>
                                        <p className="text-sm font-semibold mb-1">Team Batting First</p>
                                        <div className="flex items-center justify-between text-xs">
                                            <span>52% Wins</span>
                                            <span>48% Losses</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div
                                                className="bg-[#B7132B] h-2 rounded-full"
                                                style={{ width: "52%" }}
                                            />
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
