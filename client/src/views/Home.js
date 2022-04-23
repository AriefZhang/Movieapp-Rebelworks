import "../assets/Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchMovies } from "../redux/actions/movie";

import Card from "../components/Card";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, genres } = useSelector((state) => state.reducer.movies);

  useEffect(() => {
    dispatch(asyncFetchMovies());
  }, [dispatch]);

  console.log(movies, genres, "<<<<<<<<<<<<");
  return (
    <div id="Container">
      <div id="Container_2" className="container-fluid">
        <h1 className="movie_card text_left">Playing Now</h1>
        <div className="row movie_card">
          {movies?.results?.map((movie, i) => {
            return <Card key={i} movie={movie} genres={genres} index={i + 1}/>;
          })}
        </div>
      </div>
    </div>
  );
}
