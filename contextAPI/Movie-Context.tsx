// "use client";

// import { useState, useEffect, createContext } from "react";

// interface Genre {
//   id: number;
//   name: string;
// }

// interface MovieContextType {
//   genres: Genre[];
//   inputValue: string;
//   setInputValue: (value: string) => void;
//   filteredGenres: () => Genre[];
// }

// // Provide initial values for genres, inputValue, and setInputValue
// export const MovieContext = createContext<MovieContextType>({
//   genres: [], // Initial empty array for genres
//   inputValue: "", // Initial empty string for inputValue
//   setInputValue: () => {}, // Dummy function for setInputValue
//   filteredGenres: () => [],
// });

// export const Movie = ({ children }: { children: React.ReactNode }) => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [inputValue, setInputValue] = useState("");

//   const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4",
//     },
//   };

//   useEffect(() => {
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         setGenres(json.genres); // Set genres from the API response
//       })
//       .catch((err) => console.error("Error fetching genres:", err));
//   }, []);

//   const filteredGenres = genres.filter((gen) =>
//     gen.name.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <MovieContext.Provider
//       value={{ genres, inputValue, setInputValue, filteredGenres }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };

// *************************************************************

"use client";

import { useState, useEffect, createContext } from "react";

interface Genre {
  id: number;
  name: string;
}

interface MovieContextType {
  genres: Genre[];
  inputValue: string;
  setInputValue: (value: string) => void;
  filteredGenres: Genre[]; // Correct the return type to Genre[]
}

// Provide initial values for genres, inputValue, and setInputValue
export const MovieContext = createContext<MovieContextType>({
  genres: [], // Initial empty array for genres
  inputValue: "", // Initial empty string for inputValue
  setInputValue: () => {}, // Dummy function for setInputValue
  filteredGenres: [], // Initialize with empty array
});

export const Movie = ({ children }: { children: React.ReactNode }) => {

  const [genres, setGenres] = useState<Genre[]>([]);
  const [inputValue, setInputValue] = useState("");

  //GETTING THE GENRE THROUGH THE MOVIEDB APIs
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmZjc5MWRkNDk0NDM0OWE4MzZlNTU3ZmYwNGI3YyIsIm5iZiI6MTcyNzI2Nzg2My4yMzMwNTIsInN1YiI6IjY2ZjJhYzI4NzMwMGE1YmEyMTNiZjIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xT-5ssbJsJ5UGT3xFbO5_EIca_INXPblB-RAgG_OpQ4", // Replace with your API key
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setGenres(json.genres); // Set genres from the API response
      })
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  // // Compute filteredGenres based on inputValue
  const filteredGenres = genres.filter((gen) =>
    gen.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log("filtered genres: ",filteredGenres);

  return (
    <MovieContext.Provider
      value={{ genres, inputValue, setInputValue, filteredGenres }}
    >
      {children}
    </MovieContext.Provider>
  );
};

