import React, { createContext, useContext, useState } from "react";
import data from "../data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const currentReview = reviews[index];

  return (
    <AppContext.Provider value={{ currentReview }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
