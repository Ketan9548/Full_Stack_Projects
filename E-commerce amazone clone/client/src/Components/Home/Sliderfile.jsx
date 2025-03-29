import React from "react";

const Sliderfile = () => {
  return (
    <>
      <div
        id="amazon-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative flex overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: "translateX(0)" }}
            data-carousel-items
          >
            <div className="w-1/3 px-2 md:w-1/5 flex-shrink-0">
              <img
                src="/docs/images/carousel/carousel-1.svg"
                className="block w-full"
                alt="Item 1"
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/5 flex-shrink-0">
              <img
                src="/docs/images/carousel/carousel-2.svg"
                className="block w-full"
                alt="Item 2"
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/5 flex-shrink-0">
              <img
                src="/docs/images/carousel/carousel-3.svg"
                className="block w-full"
                alt="Item 3"
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/5 flex-shrink-0">
              <img
                src="/docs/images/carousel/carousel-4.svg"
                className="block w-full"
                alt="Item 4"
              />
            </div>
            <div className="w-1/3 px-2 md:w-1/5 flex-shrink-0">
              <img
                src="/docs/images/carousel/carousel-5.svg"
                className="block w-full"
                alt="Item 5"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4-4 4"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Sliderfile;
