import { useState, useEffect } from "react";

const StorySlider = () => {
    const stories = [
        {
            id: 1,
            image: "/image1.jpg", 
            title: "CRICKET",
            subtitle: "Most expensive cars owned by Marnus Labuschagne",
        },
        {
            id: 2,
            image: "/image2.jpg",
            title: "FOOTBALL",
            subtitle: "Top goals of the season",
        },
        {
            id: 3,
            image: "/image3.jpg",
            title: "TENNIS",
            subtitle: "Grand Slam Highlights",
        },
    ];

    const [currentStory, setCurrentStory] = useState(0);
    const [progress, setProgress] = useState(0);

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

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900">
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
            <div className="relative">
                <img
                    src={stories[currentStory].image}
                    alt="Story"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute bottom-10 px-6 text-white text-center">
                    <h1 className="text-2xl font-bold">{stories[currentStory].title}</h1>
                    <p className="mt-2">{stories[currentStory].subtitle}</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute w-full flex justify-between items-center px-4 h-full">
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
    );
};

export default StorySlider;
