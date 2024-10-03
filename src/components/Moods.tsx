"use client";

import React, { useContext } from "react";
import { MovieContext } from "../../contextAPI/Movie-Context";
import Link from "next/link";

const Moods = () => {
  const { filteredGenres,  } = useContext(MovieContext);

  if (!filteredGenres) return null;

  return (
    <>
      <h1 className="text-center mt-5">What is your mood now?🤔</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
        {filteredGenres.length > 0 ? (
          filteredGenres.map((genre) => (
            <Link
              href={`/movies/${genre.id}`} // Pass the genre ID dynamically
              key={genre.id}
              className="btn text-lg max-sm:text-sm max-md:text-sm bg-base-200 btn-active"
            >
              {genre.name}
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


// "use client";

// import React, { useContext } from "react";
// import { MovieContext } from "../../contextAPI/Movie-Context";

// const Moods = () => {
//   const { filteredGenres, filterMoviesByGenre } = useContext(MovieContext);

//   if (!filteredGenres) return null;

//   return (
//     <>
//       <h1 className="text-center mt-5">What is your mood now?🤔</h1>
//       <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 w-[80%] max-sm:w-[90%] m-auto justify-center items-center mt-8">
//         {filteredGenres.length > 0 ? (
//           filteredGenres.map((genre) => (
//             <button
//               key={genre.id}
//               onClick={() => filterMoviesByGenre(genre.id)} // Filter movies by genre ID
//               className="btn text-lg max-sm:text-sm max-md:text-sm bg-base-200 btn-active"
//             >
//               {genre.name}
//             </button>
//           ))
//         ) : (
//           <button className="btn btn-error bg-orange-400">
//             Oops!! Your mood is not found!
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Moods;
