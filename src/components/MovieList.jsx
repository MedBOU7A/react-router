import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchValue, searchRating }) => {
  return (
    <div>
      {
        movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
         ).map((movie) => (
          <MovieCard film={movie} />
        )

         )
      }
    </div>
  );
};

export default MovieList;