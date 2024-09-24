"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { MovieContext } from "../../contextAPI/Movie-Context";

const Moods = () => {

  const movieContext = useContext(MovieContext);

  // Check if movieContext is null or searchMoods is undefined
  if (!movieContext || !movieContext.searchMoods) {
    return <p>Loading moods...</p>; // Handle the case where context is not available
  }

  const { searchMoods } = movieContext;

  return (
    <>
      <h1 className="text-center mt-5">What is your mood now?&#x1f914; </h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
        {searchMoods.length > 0 ? (
          searchMoods.map((mood) => (
            <Link
              href="/"
              key={mood.id}
              className="btn text-lg px-5 bg-base-200 btn-active"
            >
              {mood.name}
            </Link>
          ))
        ) : (
          <button className="btn btn-error bg-orange-400 ">Oops!! Your mood is not found!</button>
        )}
      </div>
    </>
  );
};

export default Moods;
