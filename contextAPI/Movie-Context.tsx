

// "use client";

// import { useState, useEffect, createContext } from "react";

// interface Genre {
//   id: number;
//   name: string;
// }
// interface Movies {
//   id: number;
//   title: string;
//   poster_path: string;
//   overview: string;
//   genre_ids: number[];
// }

// interface MovieContextType {
//   genres: Genre[];
//   allMovies: Movies[];
//   inputValue: string;
//   setInputValue: (value: string) => void;
//   filteredGenres: Genre[]; // Correct the return type to Genre[]
// }

// // Provide initial values for genres, inputValue, and setInputValue
// export const MovieContext = createContext<MovieContextType>({
//   genres: [], // Initial empty array for genres
//   allMovies: [], // Initial empty array for genres
//   inputValue: "", // Initial empty string for inputValue
//   setInputValue: () => {}, // Dummy function for setInputValue
//   filteredGenres: [], // Initialize with empty array
// });

// export const Movie = ({ children }: { children: React.ReactNode }) => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [allMovies, setAllMovies] = useState<Movies[]>([]);
//   const [inputValue, setInputValue] = useState("");

//   //GETTING THE GENRE THROUGH THE MOVIEDB APIs
//   const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4", // Replace with your API key
//     },
//   };

//   useEffect(() => {
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setGenres(json.genres); // Set genres from the API response
//       })
//       .catch((err) => console.error("Error fetching genres:", err));
//   }, []);

//   // // Compute filteredGenres based on inputValue
//   const filteredGenres = genres.filter((gen) =>
//     gen.name.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   //GETTING THE MOVIES BASED ON THE GENRE THROUGH THE MOVIEDB APIs
//    const movieUrl = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
//    const myOptions = {
//      method: "GET",
//      headers: {
//        accept: "application/json",
//        Authorization:
//          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4", // Replace with your API key
//      },
//    };

//    useEffect(() => {
//      fetch(movieUrl, myOptions)
//        .then((res) => res.json())
//        .then((json) => {
//          console.log("Movies",json.results);
//          setAllMovies(json.results); 
//        })
//        .catch((err) => console.error("Error fetching movies:", err));
//    }, []);

//   return (
//     <MovieContext.Provider
//       value={{ genres, inputValue, setInputValue, filteredGenres, allMovies }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };



"use client";

import { useState, useEffect, createContext } from "react";

interface Genre {
  id: number;
  name: string;
}

interface Movies {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
}

interface MovieContextType {
  genres: Genre[];
  allMovies: Movies[];
  inputValue: string;
  setInputValue: (value: string) => void;
  filteredGenres: Genre[];
  filteredMovies: Movies[];
  filterMoviesByGenre: (genreId: number) => void;
}

export const MovieContext = createContext<MovieContextType>({
  genres: [],
  allMovies: [],
  inputValue: "",
  setInputValue: () => {},
  filteredGenres: [],
  filteredMovies: [],
  filterMoviesByGenre: () => {},
});

export const Movie = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [allMovies, setAllMovies] = useState<Movies[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movies[]>([]);

  // Fetch genres
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4`, // Replace with your API key
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setGenres(json.genres))
      // .then((json) => console.log(json.genres))
      .catch((err) => console.error("Error fetching genres:", err));
      // console.log(json.genr);
  }, []);

  // Fetch movies
  const movieUrl =
    "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const myOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4`, // Replace with your API key
    },
  };

  useEffect(() => {
    fetch(movieUrl, myOptions)
      .then((res) => res.json())
      .then((json) => setAllMovies(json.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const filteredGenres = genres.filter((gen) =>
    gen.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const filterMoviesByGenre = (genreId: number) => {
    const moviesByGenre = allMovies.filter((movie) =>
      movie.genre_ids.includes(genreId)
    );
    setFilteredMovies(moviesByGenre);
  };

  return (
    <MovieContext.Provider
      value={{
        genres,
        allMovies,
        inputValue,
        setInputValue,
        filteredGenres,
        filteredMovies,
        filterMoviesByGenre,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
