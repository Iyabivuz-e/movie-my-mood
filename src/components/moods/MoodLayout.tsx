// "use client"

// import { useRouter } from "next/compat/router";
// import { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import { MovieContext } from "../../../contextAPI/Movie-Context";

// const MoodMoviesPage = () => {
//   const { allMovies } = useContext(MovieContext);
//   const router = useRouter();
//   const  mood  = router?.query;
//   console.log("the mood url",mood)

//   console.log("All movie: ",allMovies)
//   const movies = allMovies.map(m => console.log(m.title));
//   console.log("All movie titles: ",movies)

//   // const [filteredMovies, setFilteredMovies] = useState([]);

//   // useEffect(() => {
//   //   if (mood && allMovies.length > 0) {
//   //     // Convert mood name into a matching genre, if necessary, based on your context data
//   //     const genreMovies = allMovies.filter((movie) =>
//   //       movie.genre_ids.some((genreId) => genreId === parseInt(mood))
//   //     );
//   //     setFilteredMovies(genreMovies);
//   //   }
//   // }, [mood, allMovies]);

//   // if (!filteredMovies.length) return <p>Loading movies...</p>;

//   return (
//     <div>
//       <h1 className="text-center">Movies for mood</h1>
//       <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5">
//         {allMovies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <Image
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               width={300}
//               height={450}
//             />
//             <h2 className="font-bold">{movie.title}</h2>
//             <h2 className="font-bold">{movie.title}</h2>
//             <p>{movie.overview}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MoodMoviesPage;


// "use client";

// import React, { useContext } from "react";
// import Image from "next/image";
// import { MovieContext } from "../../../contextAPI/Movie-Context";

// const MoviesList = () => {
//   const { filteredMovies } = useContext(MovieContext);

//   console.log("filtered movies: ", filteredMovies)


//   if (!filteredMovies || filteredMovies.length === 0) {
//     return <p className="text-center mt-5 text-orange-400">No movies found for this genre.</p>;
//   }

//   return (
//     <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
//       {filteredMovies.map((movie) => (
//         <div key={movie.id} className="card">
//           <Image
//             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//             alt={movie.title}
//             className="card-img-top"
//             width={200}
//             height={300}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{movie.title}</h5>
//             <p className="card-text">{movie.overview}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MoviesList;
