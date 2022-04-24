import "../assets/Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchMovies } from "../redux/actions/movie";
import InfiniteScroll from "react-infinite-scroll-component";

import { RiLoader4Line } from "react-icons/ri";
import Card from "../components/Card";
import MovieCarousel from "../components/Carousel";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, genres, pages } = useSelector((state) => state.reducer.movies);

  useEffect(() => {
    dispatch(asyncFetchMovies());
  }, [dispatch]);

  const fetchMoreData = () => {
    let page = pages + 1
    setTimeout(() => {
      dispatch(asyncFetchMovies(page))
    }, 2500);
  };

  const loader = () => {
    return (
      <div className="container_loader">
        <RiLoader4Line className="spin-loader" style={{color: "white"}}/>
        <p style={{color: "white"}}>loading more movies for you...</p>
      </div>
    )
  }

  return (
    <div id="Container">
      <div id="Container_2" className="container-fluid">
        <div className="carausell">
          <MovieCarousel movies={movies}/>
        </div>
        <h1 className="movie_card text_left">Playing Now</h1>
        <div >
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={true}
            loader={loader()}
            className="row movie_card"
          >
            {movies?.map((movie, i) => {
              return (
                <Card key={i} movie={movie} genres={genres} index={i + 1} />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
