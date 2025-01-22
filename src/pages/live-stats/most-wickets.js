
import Layout from '@/Components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'

const MostWickets = () => {


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
                className="font-medium py-2 px-3 whitespace-nowrap "
              >
                Scorecard
              </button>
            </Link>
            <Link href="/match-squad">
              <button
                onclick="handleTabClick(event, 'overs')"
                className="font-medium py-2 px-3 whitespace-nowrap"
              >
                Squad
              </button>
            </Link>

            <Link href="/matchpoints">
              <button
                onclick="handleTabClick(event, 'points')"
                className="font-medium py-2 px-3 whitespace-nowrap "
              >
                Points Table
              </button>
            </Link>

            <Link href="/live-stats/most-runs-stats">
              <button
                onclick="handleTabClick(event, 'stats')"
                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
              >
                Stats
              </button>
            </Link>
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

                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8] "
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
                  <Link href="/live-stats/best-batting-average">
                    <button
                      // className="state-btn new-class border-b px-2 py-3 w-full font-medium  text-left "
                      // data-target="batting-average"
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"

                    >
                      Best Batting Average
                    </button>
                  </Link>
                  <button

                    className=" state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"

                  >
                    Best Batting Strike Rate
                  </button>
                  <Link href="/live-stats/most-hundreds">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Hundreds
                    </button>
                  </Link>

                  <Link href="/live-stats/most-fifties">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Fifties
                    </button>
                  </Link>

                  <Link href="/live-stats/most-fours">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Fours
                    </button>
                  </Link>

                  <Link href="/live-stats/most-sixes">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Sixes
                    </button>
                  </Link>

                  <Link href="/live-stats/most-nineties">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Nineties
                    </button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg p-2 mb-4 bg-[#ffffff]">
                <div className="py-2 mb-2">
                  <h3 className="text-1xl font-semibold pl-[6px] border-l-[3px] border-[#1a80f8]">
                    Bowler
                  </h3>
                </div>
                <div id="team-buttons" className="">
                  <Link href="/live-stats/most-wickets">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most Wickets
                    </button>
                  </Link>
                  <Link href="/live-stats/best-bowling-average">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Best Bowling Average
                    </button>
                  </Link>

                  <Link href="/live-stats/best-bowling">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left bg-[#ecf2fd] text-[#1a80f8] rounded-md"
                    >
                      Best Bowling
                    </button>
                  </Link>

                  <Link href="/live-stats/most5wickets-haul">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Most 5 Wickets Haul
                    </button>
                  </Link>

                  <Link href="/live-stats/best-economy">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Best Economy
                    </button>
                  </Link>

                  <Link href="/live-stats/best-bowling-strike-rate">
                    <button
                      className="state-btn new-class border-t px-2 py-3 w-full font-medium active text-left rounded-md hover:bg-[#ecf2fd] hover:text-[#1a80f8]"
                    >
                      Best Bowling Strike Rate
                    </button>
                  </Link>
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

      </section>

    </Layout>
  )
}

export default MostWickets;
