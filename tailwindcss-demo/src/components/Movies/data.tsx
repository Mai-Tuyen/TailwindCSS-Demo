import BatManImg from "../../assets/batman_begins.jpg";
import DuneImg from "../../assets/dune.jpg";

export type MovieType = {
  src: string;
  title: string;
  main: string;
  runtime: string;
};

export const moviesData: MovieType[] = [
  {
    src: BatManImg,
    title: "Batman Begins",
    main: "Bruce Wayne",
    runtime: "2h 32m",
  },
  {
    src: DuneImg,
    title: "Dune",
    main: "Paul Atreides",
    runtime: "2h 22m",
  },
  {
    src: DuneImg,
    title: "Dune",
    main: "Paul Atreides",
    runtime: "2h 22m",
  },
  {
    src: DuneImg,
    title: "Dune",
    main: "Paul Atreides",
    runtime: "2h 22m",
  },
  {
    src: DuneImg,
    title: "Dune",
    main: "Paul Atreides",
    runtime: "2h 22m",
  },
  {
    src: DuneImg,
    title: "Dune",
    main: "Paul Atreides",
    runtime: "2h 22m",
  },
];
