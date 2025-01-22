import { useState } from 'react';

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

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of cards to show at a time

  const handleNext = () => {
    // Only slide if there are more cards to show
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    // Only slide if not already at the first card
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Slider Images */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="w-1/5 flex-shrink-0 relative"
            style={{ minWidth: '20%' }} // 4 cards = 25% width each
          >
            <img src={image.src} alt={image.title} className="rounded-lg w-full " />
            <p className="absolute bottom-[12px] text-white font-semibold text-center px-2 text-[14px] md:text-[13px]">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80  px-2 py-2 rounded-full"
        onClick={handlePrev}
        disabled={currentIndex === 0} // Disable button when at the first card
        style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
      >
       <span className="text-[20px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80  px-2 py-2 rounded-full"
        onClick={handleNext}
        disabled={currentIndex >= images.length - itemsPerPage} // Disable button when at the last card
        style={{
          opacity: currentIndex >= images.length - itemsPerPage ? 0.5 : 1,
          cursor: currentIndex >= images.length - itemsPerPage ? 'not-allowed' : 'pointer',
        }}
      >
        <span className="text-[20px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>
    </div>
  );
}
