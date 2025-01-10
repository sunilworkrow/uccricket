

import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const MatchSquad = () => {


    return (
        <Layout>

            
<section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
                <div className="lg:w-[1000px] mx-auto">
                    <div className="md:flex justify-between items-center md:py-0 py-4">
                        <div className="flex items-center text-1xl text-[#FE4848] font-bold uppercase relative">
                            <img src="/assets/img/home/blinking-dot.gif" className="h-[20px]" alt="" />
                            LIVE NOW

                        </div>
                        <div className="text-[#8192B4] font-normal  text-1xl md:text-center md:mx-0 my-3">
                            Bangladesh in India August,&nbsp;2nd Test,{" "}
                            <span className="font-semibold text-[#b9b9b9]"> Day 4-Session 3</span>
                        </div>
                        <div className="flex text-[#8192B4] text-1xl font-normal  md:justify-end md:justify-start">
                            <img src="/assets/img/clander.png" className="mr-2" alt="" />
                            1-5 oct 2024
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F01A]">
                    <div className="lg:w-[1000px] mx-auto md:py-9 tracking-[1px]">
                        <div className="md:flex py-8 justify-between items-center">
                            <div className="flex gap-2 flex-row text-[#BDCCECA8] uppercase items-center w-full">
                                <img
                                    className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                                    src="/assets/img/flg-1.png"
                                    alt="ind"
                                />
                                <div className="flex md:flex-col md:items-start items-center md:gap-0 gap-2">
                                    <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                                        IND
                                    </p>
                                    <p className="lg:text-[18px] text-[16px] font-semibold">
                                        139/4 <span className="text-[13px] font-medium">(42.0)</span>{" "}
                                        &amp; 222 <span className="text-[13px] font-medium">(66.2)</span>
                                    </p>
                                </div>
                            </div>
                            <div className="text-[#8192B4] font-normal text-center w-full text-center md:my-0 my-4">
                                <p className="text-[#FFBD71] lg:text-[20px] text-[16px] font-semibold">
                                    Day 4-Session 3
                                </p>
                                <p className="text-[#C1CEEA] text-[14px] ">
                                    CRR: 3.8 IND trail by 299 runs.
                                </p>
                            </div>
                            <div className="flex gap-2 flex-row flex-row-reverse md:flex-row  items-center text-[#8192B4] font-normal w-full justify-end">
                                <div className="flex md:flex-col md:items-end items-center md:gap-0 gap-2">
                                    <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                                        BAN
                                    </p>
                                    <p className="lg:text-[18px] text-[16px] font-semibold">
                                        160<span className="text-[14px] font-medium"> (63.0)</span>{" "}
                                        &amp; Yet To Bet
                                    </p>
                                </div>
                                <img
                                    src="/assets/img/ban.png"
                                    className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                                    alt="ban"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
                <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/match-moreinfo">
                            <button
                                onclick="handleTabClick(event, 'info')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                More Info
                            </button>
                        </Link>
                        <Link href="/match-live-now">
                            <button
                                onclick="handleTabClick(event, 'live')"
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="/match-scorecard">
                            <button
                                onclick="handleTabClick(event, 'scorecard')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Scorecard
                            </button>
                        </Link>
                        <Link href="/match-squad">
                            <button
                                onclick="handleTabClick(event, 'overs')"
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Squad
                            </button>
                        </Link>

                        <Link href="/matchpoints">
                        <button
                            onclick="handleTabClick(event, 'points')"
                            className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Points Table
                        </button>
                        </Link>
                        <button
                            onclick="handleTabClick(event, 'stats')"
                            className="font-medium py-2 px-3 whitespace-nowrap"
                        >
                            Stats
                        </button>
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

export default MatchSquad;