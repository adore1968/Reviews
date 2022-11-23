import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Review() {
  const { currentReview, decrease, increase, surprise } = useGlobalContext();
  return (
    <div className="bg-white p-5 rounded text-center container sm:max-w-xl">
      <div className="w-28 h-28 mx-auto">
        <img
          src={currentReview.image}
          alt={currentReview.name}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="my-2">
        <h2 className="capitalize text-xl sm:text-2xl font-semibold">
          {currentReview.name}
        </h2>
        <h3 className="my-1 text-lg sm:text-xl capitalize text-blue-500">
          {currentReview.job}
        </h3>
        <p className="text-base sm:text-lg">{currentReview.text}</p>
      </div>
      <div>
        <button
          onClick={() => decrease()}
          className="text-lg sm:text-xl text-blue-500 mr-2"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={() => increase()}
          className="text-lg sm:text-xl text-blue-500"
        >
          <AiOutlineArrowRight />
        </button>
        <div className="mt-2">
          <button
            onClick={() => surprise()}
            className="text-lg sm:text-xl text-blue-500 border border-blue-500 rounded py-1 px-4 hover:bg-blue-500 hover:text-white transition-colors"
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
