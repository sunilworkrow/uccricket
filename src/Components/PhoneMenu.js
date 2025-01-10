import React, { useState } from 'react'

const PhoneMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openNav = () => {
    setIsOpen(true);
  };
  
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Side Navigation */}
      <div
        id="mySidenav"
        className={`fixed top-0 left-0 h-full bg-[#081736] overflow-x-hidden transition-width duration-500 ease-in-out z-50 ${
          isOpen ? 'w-3/4' : 'w-0'
        }`}
      >
        <button
          className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-white"
          onClick={closeNav}
        >
          &times;
        </button>
        <div className="text-1xl text-white space-y-4 p-5">
          <a href="#" className="block hover:text-yellow-400">Home</a>
          <a href="#" className="block hover:text-yellow-400">Fixtures</a>
          <a href="#" className="block hover:text-yellow-400">Series</a>
          <a href="#" className="block hover:text-yellow-400">Teams</a>
          <a href="#" className="block hover:text-yellow-400">ICC Ranking</a>
          <a href="#" className="block hover:text-yellow-400">News</a>
          <a href="#" className="block hover:text-yellow-400">Fantasy Tips</a>
          <a href="#" className="block hover:text-yellow-400">Point Table</a>
        </div>
      </div>

      <div className="md:hidden sticky bottom-0 bg-[#0e2149] text-white text-1xl py-2 flex justify-around items-center">
        <a
          href="#"
          className="block flex flex-col items-center py-[4px] px-[9px] bg-[#ffffffdb] text-black rounded-lg font-semibold"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </span>
          <span>Home</span>
        </a>
        <a href="#" className="block flex flex-col items-center">
          <span>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="schedule-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.87">
                <path
                  d="M15.727914,16.342 L19.970514,20.5846 L18.556314,21.9988 L14.313714,17.7562 L15.727914,16.342 Z M5.1225,4.32 C5.5125,3.93 6.1425,3.93 6.5325,4.32 L6.5325,4.32 L15.0225,12.81 C15.4125,13.2 15.4125,13.83 15.0225,14.22 L15.0225,14.22 L12.1925,17.05 C11.8025,17.44 11.1725,17.44 10.7825,17.05 L10.7825,17.05 L2.2925,8.56 C1.9025,8.17 1.9025,7.54 2.2925,7.15 L2.2925,7.15 Z M18.4725,2 C20.4054966,2 21.9725,3.56700338 21.9725,5.5 C21.9725,7.43299662 20.4054966,9 18.4725,9 C16.5395034,9 14.9725,7.43299662 14.9725,5.5 C14.9725,3.56700338 16.5395034,2 18.4725,2 Z"
                  id="Combined-Shape"
                  fill="#ffffff"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </span>
          Fixtures
        </a>
        <a href="#" className="block flex flex-col items-center">
          <span>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="cup-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M19,5 L17,5 L17,3 L7,3 L7,5 L5,5 C3.9,5 3,5.9 3,7 L3,8 C3,10.55 4.92,12.63 7.39,12.94 C8.02,14.44 9.37,15.57 11,15.9 L11,19 L7,19 L7,21 L17,21 L17,19 L13,19 L13,15.9 C14.63,15.57 15.98,14.44 16.61,12.94 C19.08,12.63 21,10.55 21,8 L21,7 C21,5.9 20.1,5 19,5 Z M5,8 L5,7 L7,7 L7,10.82 C5.84,10.4 5,9.3 5,8 Z M19,8 C19,9.3 18.16,10.4 17,10.82 L17,7 L19,7 L19,8 Z"
                  id="Shape"
                  fill="#ffffff"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </span>
          Series
        </a>
        <a href="#" className="block flex flex-col items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </span>
          News
        </a>

        <a
          href="#"
          onClick={openNav}
          className="block flex flex-col items-center"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
          More
        </a>
      </div>
    </>
  );
};

export default PhoneMenu;
