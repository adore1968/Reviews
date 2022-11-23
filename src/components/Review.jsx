import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Review() {
  const { currentReview, decrease, increase, surprise } = useGlobalContext();
  return (
    <div>
      <div className="w-20">
        <img src={currentReview.image} alt={currentReview.name} />
      </div>
      <div>
        <h2>{currentReview.name}</h2>
        <h3>{currentReview.job}</h3>
        <p>{currentReview.text}</p>
      </div>
      <div>
        <button onClick={() => decrease()}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={() => increase()}>
          <AiOutlineArrowRight />
        </button>
        <div>
          <button onClick={() => surprise()}>Surprise Me</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
