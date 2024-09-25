"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { MovieContext } from "../../contextAPI/Movie-Context";

const Moods = () => {
  const { genres, filteredGenres } = useContext(MovieContext);

  if (!genres) return null; // Handle null or undefined case

  if (genres.length === 0) {
    return <p>Loading moods...</p>; // Handle loading state
  }

  // Remove the duplicate filteredGenres calculation

  return (
    <>
      <h1 className="text-center mt-5">What is your mood now?&#x1f914;</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
        {filteredGenres.length > 0 ? (
          filteredGenres.map((mood) => (
            <Link
              href="/"
              key={mood.id}
              className="btn text-lg max-sm:text-sm max-md:text-sm bg-base-200 btn-active"
            >
              {mood.name}
            </Link>
          ))
        ) : (
          <button className="btn btn-error bg-orange-400">
            Oops!! Your mood is not found!
          </button>
        )}
      </div>
    </>
  );
};

export default Moods;
