

import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const UpcomingMatchSquads = () => {


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
                        <Link href="/scheduled/live-matches">
                            <button
                                onclick="handleTabClick(event, 'live')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-scorecard">
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
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Squads
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-pointsTable">
                            <button
                                onclick="handleTabClick(event, 'points')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-Stats">
                            <button
                                onclick="handleTabClick(event, 'stats')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Stats
                            </button>
                        </Link>
                        <Link href="/scheduled/upcoming-Fantasy-Tips">
                            <button
                                onclick="handleTabClick(event, 'stats')"
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Fantasy Tips
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

export default UpcomingMatchSquads;