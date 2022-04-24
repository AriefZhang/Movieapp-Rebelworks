import "../assets/Detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsStarFill, BsChevronRight } from "react-icons/bs";
import { asyncMovieById, asyncSimilarMovie } from "../redux/actions/movie";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movie, similar, similarPages, casts } = useSelector(
    (state) => state.reducer.movies
  );

  const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const urlCast = "https://image.tmdb.org/t/p/w92";
  const [stars] = useState([]);
  const [cast] = useState([]);

  useEffect(() => {
    dispatch(asyncMovieById(id));
    dispatch(asyncSimilarMovie(id));
  }, [dispatch]);

  useEffect(() => {
    if (!stars.length) {
      for (let i = 0; i < Math.ceil(movie.vote_average); i++) {
        stars.push(1);
      }
    }
  }, []);

  return (
    <div className="container_detail">
      <div className="movie_detail">
        <div className="pic_frame">
          <div id="Card_Content">
            <div className="row text-center flex tag margin_tag">
              {movie.genres?.map((genre, i) => {
                return (
                  <div key={i} id="Card_Tag">
                    <h5 id="Card_Font_Tag">{genre?.name}</h5>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row tag star">
              {stars.map((_, i) => {
                return <BsStarFill className="white" key={i} />;
              })}
            </div>
            <p className="text_release">
              Release Year : {movie?.release_date?.split("-")[0]}
            </p>
            <h1 className="text tag">{movie.original_title}</h1>
          </div>
          <div className="tag_watch">
            <h5 className="yellow text_watch">Watch now</h5>
            <BsChevronRight className="yellow arrow" />
          </div>
          <div id="Card_Blend_Detail" />
          <img src={url} alt="" />
        </div>
        <div className="detail_frame">
          <div className="detail_synopsis">
            <div className="synopsis">
              <h1 className="white roboto-700 size-32 line-height-375">
                Synopsis
              </h1>
              <div className="synopsis synopsis-bg">
                <p className="white roboto-400 size-16 overview-syn">
                  {movie.overview}
                </p>
              </div>
            </div>
            <div className="cast_frame">
              <p className="white size-16 roboto-700 line-height-32 ml-30 mb-0 mr-0">
                Cast
              </p>
              <div className="">
                {casts?.map((cast, i) => {
                  return i < 4 ? (
                    <div className="ml-30 text-left mb-1">
                      <p className="white roboto-700 mb-0 size-16">{cast.name}</p>
                    </div>
                  ) : i === 4 ? (
                    <div className="ml-30 text-left mb-2">
                      <p className="yellow roboto-700 mb-0">more</p>
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ml-30">
            
          </div>
        </div>
      </div>
      <div className="ml-165 mt-64">
        <h1 className="white text-left roboto-700 size-32 line-height-375">You Might Also Like This!</h1>
      </div>
    </div>
  );
}
