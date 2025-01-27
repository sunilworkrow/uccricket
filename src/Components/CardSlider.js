import { useState, useEffect } from "react";

const images = [
  { id: 1, src: '/assets/img/home/img-2.png', title: 'The number 10 position for the Fastest fifty' },
  { id: 2, src: '/assets/img/home/img-3.png', title: 'Yuvraj Singh (India)12 balls vs England, 2007' },
  { id: 3, src: '/assets/img/home/img-4.png', title: 'Marcus Stoinis Australian player hit his fastest' },
  { id: 4, src: '/assets/img/home/img-5.png', title: 'Stephan Myburgh (Netherlands)' },
  { id: 5, src: '/assets/img/home/img-6.png', title: 'South Africa vs India Match Preview, 4th T20I' },
  { id: 6, src: '/assets/img/home/img-2.png', title: 'Stephan Myburgh (Netherlands)' },
  { id: 7, src: '/assets/img/home/img-3.png', title: 'Yuvraj Singh (India)12 balls vs England, 2007' },
  { id: 8, src: '/assets/img/home/img-4.png', title: 'AB de Villiers' },
  { id: 9, src: '/assets/img/home/img-5.png', title: 'Yuvraj Singh (India)12 balls vs England, 2007' },
  { id: 10, src: '/assets/img/home/img-6.png', title: 'Marcus Stoinis Australian player hit his fastest' },
];

const stories = [
  {
    id: 1,
    image: "/assets/img/home/img-6.png",
    title: "CRICKET",
    subtitle: "Most expensive cars owned by Marnus Labuschagne",
  },
  {
    id: 2,
    image: "/assets/img/home/img-5.png",
    title: "FOOTBALL",
    subtitle: "Top goals of the season",
  },
  {
    id: 3,
    image: "/assets/img/home/img-4.png",
    title: "TENNIS",
    subtitle: "Grand Slam Highlights",
  },
];

// const stories = [
//   [
//     { id: 1, src: '/assets/img/home/img-6.png', title: '' },
//     { id: 2, src: '/assets/img/home/img-5.png', title: '' },
//     { id: 3, src: '/assets/img/home/img-4.png', title: '' },
//     { id: 4, src: '/assets/img/home/img-3.png', title: '' },
//   ],



// ];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);



  // ***********************************************************

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 10);
      if (progress >= 100) {
        nextStory();
      }
    }, 300);

    return () => clearInterval(interval);
  }, [progress]);

  const nextStory = () => {
    setProgress(0);
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const previousStory = () => {
    setProgress(0);
    setCurrentStory((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };


  // ***********************************************************



  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const openModal = () => {

    setModalOpen(true);

  };

  const closeModal = () => {
    setModalOpen(false);
  };





  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Main Slider */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="md:w-1/5 w-1/2 flex-shrink-0 relative"
            style={{ minWidth: '20%' }}
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.title} className="rounded-lg w-full" />
            <p className="absolute bottom-[12px] text-white font-semibold text-center px-2 text-[14px] md:text-[13px]">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 px-2 py-2 rounded-full"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <span className="text-[20px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 px-2 py-2 rounded-full"
        onClick={handleNext}
        disabled={currentIndex >= images.length - itemsPerPage}
      >
        <span className="text-[20px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full max-w-xl bg-[#d1d1d1] p-4 rounded-lg ">


            {/* ********************************************************************* */}

            <div className="flex flex-col items-center justify-center w-full ">
              {/* Progress Bar */}
              <div className="absolute top-4 left-4 right-4 flex space-x-2">
                {stories.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 bg-gray-700 rounded-lg overflow-hidden flex-grow"
                  >
                    <div
                      className={`h-full bg-blue-500 transition-all`}
                      style={{
                        width: `${currentStory === index ? progress : currentStory > index ? 100 : 0
                          }%`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Story Content */}
              <div className="relative w-full flex items-center justify-center top-[7px]">
                <img
                  src={stories[currentStory].image}
                  alt="Story"
                  className=""
                />
                <div className="absolute bottom-10 px-6 text-white text-center">
                  <h1 className="text-2xl font-bold">{stories[currentStory].title}</h1>
                  <p className="mt-2">{stories[currentStory].subtitle}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute w-full flex justify-between items-center px-4">
                <button
                  onClick={previousStory}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full"
                >
                  ◀
                </button>
                <button
                  onClick={nextStory}
                  className="bg-black bg-opacity-50 text-white p-3 rounded-full"
                >
                  ▶
                </button>
              </div>
            </div>



            {/* ********************************************************************* */}





            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 py-1 px-3 rounded-full"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
