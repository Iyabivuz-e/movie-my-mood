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
      <div className="mt-8 px-3 flex gap-5 flex-wrap justify-center items-center">
        <div className="grid grid-cols-3 -z-30 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="card bg-red-500">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
                width={200}
                height={300}
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
