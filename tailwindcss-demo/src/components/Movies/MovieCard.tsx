import React from "react";
import { MovieType } from "./data";
import { BiTime } from "react-icons/bi";

export default function MovieCard({ movieDetail }: { movieDetail: MovieType }) {
  const { src, title, main, runtime } = movieDetail;
  return (
    <div className="bg-primary shadow-primary hover:shadow-primary relative overflow-hidden rounded-md shadow-md hover:shadow-lg">
      <img src={src} alt={title} className="w-full" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="absolute left-2 top-2 flex min-w-[25%] items-center justify-center gap-1 rounded-md bg-cyan-50 p-2">
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
}
