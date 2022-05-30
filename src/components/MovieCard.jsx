import React from "react";
import { Link } from "react-router-dom";

import StarRaiting from "./StarRaiting";

const MovieCard = ({ film }) => {
  return (
    <div >
      <StarRaiting rate={film.rating} />
      <Link to={`/film/${film.id}`} >
       <button>
         <img src={film.image} alt={film.name} />
       </button> 
      </Link>
      <h3> {film.name} </h3>
      <p> {film.date} </p>
    </div>
  );
};

export default MovieCard