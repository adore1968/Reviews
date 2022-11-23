import React, { createContext, useContext, useState } from "react";
import data from "../data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    } else if (number > data.length - 1) {
      return 0;
    } else {
      return number;
    }
  };

  const decrease = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const increase = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const surprise = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  const currentReview = reviews[index];

  return (
    <AppContext.Provider
      value={{ currentReview, decrease, increase, surprise }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
