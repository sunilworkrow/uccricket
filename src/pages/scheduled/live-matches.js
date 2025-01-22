

import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'


export default function LiveMatches() {


        const [activeTab, setActiveTab] = useState('cust-box-click-firview');
    
        const handleProbabilityTab = (event, tabName) => {
            setActiveTab(tabName);
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
                        className="font-medium py-2 px-3 whitespace-nowrap "
                    >
                        More Info
                    </button>
                </Link>
                <Link href="/scheduled/live-matches">
                    <button
                        onclick="handleTabClick(event, 'live')"
                        className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
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
                        className="font-medium py-2 px-3 whitespace-nowrap"
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

        <div className='bg-white p-4 rounded-md mb-8'>
              <div className='text-[18px] text-center text-red-600 font-semibold'>
              Match not started, stay tuned.
              </div>
        </div>
        
    </section>
</Layout>



  )
}
