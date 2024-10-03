"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { MovieContext } from "../../../../contextAPI/Movie-Context";

const MyMovies = ({ params }: { params: { id: string } }) => {
  const genreId = Number(params.id);

  const { filteredMovies, filterMoviesByGenre } = useContext(MovieContext);

  console.log("Filtered movies: ", filteredMovies);

  // useEffect to filter movies based on genre ID
  useEffect(() => {
    if (genreId && filterMoviesByGenre) {
      filterMoviesByGenre(genreId);
    } else {
      console.log(
        "Either genreId is not defined or filterMoviesByGenre is missing."
      );
    }
  }, [genreId]);

  if (!filteredMovies || filteredMovies.length === 0) {
    return (
      <p className="text-center mt-5 text-orange-400">
        No movies found for this genre.
      </p>
    );
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-8 text-xl font-semibold">
        Movies Based on Selected Mood
      </h1>
      <div className="mt-8 px-3 flex gap-5 flex-wrap w-[95%] max-sm:w-full m-auto justify-center items-center">
        <div
          className="grid grid-cols-3 -z-30 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full
         m-auto mt-8"
        >
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="card shadow-lg hover:shadow-xl bg-base-200"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top w-full h-56 object-cover"
                width={400}
                height={400}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMovies;
