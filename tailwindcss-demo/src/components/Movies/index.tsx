import React from "react";
import { moviesData } from "./data";
import MovieCard from "./MovieCard";
export default function Movies() {
  return (
    <div className="my-12 grid grid-cols-2 gap-10 md:grid-cols-4">
      {moviesData.map((movie, index) => (
        <MovieCard key={movie.title} movieDetail={movie} />
      ))}
    </div>
  );
}
