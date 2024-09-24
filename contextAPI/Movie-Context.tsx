"use client";

import { createContext, useState } from "react";
import { moods } from "../helpers/Moods";

interface MovieContextType {
  searchedFunction: (mood: string) => void;
  searchMoods: typeof moods;
}
// Create the context
export const MovieContext = createContext<MovieContextType | null>(null);

export const Movie = ({ children }: { children: React.ReactNode }) => {
  const [searchMoods, setSearchMoods] = useState(moods); // this holds the filtered moods
  const [allMoods] = useState(moods); // this holds the original unfiltered list of moods

  const searchedFunction = (mood: string) => {
    const searchedMoods = allMoods.filter((myMood) =>
      myMood.name.toLowerCase().includes(mood.toLowerCase())
    );
    setSearchMoods(searchedMoods);
  };

  return (
    <MovieContext.Provider value={{ searchedFunction, searchMoods }}>
      {children}
    </MovieContext.Provider>
  );
};
