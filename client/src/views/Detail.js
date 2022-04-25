import "../assets/Detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsStarFill, BsChevronRight, BsPlayFill } from "react-icons/bs";
import { asyncMovieById, asyncSimilarMovie } from "../redux/actions/movie";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [req, setReq] = useState(false);

  const { movie, similar, casts, genres, episodes } = useSelector(
    (state) => state.reducer.movies
  );

  const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const urlBackdrop = "https://image.tmdb.org/t/p/w300" + movie.backdrop_path;
  const [stars] = useState([]);

  useEffect(() => {
    if (req) {
      dispatch(asyncMovieById(id));
      dispatch(asyncSimilarMovie(id));
      setReq(false);
    } else {
      dispatch(asyncMovieById(id));
      dispatch(asyncSimilarMovie(id));
    }
  }, [req, dispatch]);

  useEffect(() => {
    if (!stars.length) {
      for (let i = 0; i < Math.ceil(movie.vote_average); i++) {
        stars.push(1);
      }
    }
  }, []);

  const changePage = () => {
    navigate("/");
  };

  return (
    <div className="container_detail">
      <a onClick={() => changePage()}>
        <h1 className="white roboto-700 size-24 ml-165 mt-24 mb-0 line-height-28">
          Home
        </h1>
      </a>
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
              <h1 className="white roboto-700 size-32 line-height-375 mb-24">
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
                    <div key={i} className="ml-30 text-left mb-1">
                      <p className="white roboto-700 mb-0 size-16">
                        {cast.name}
                      </p>
                    </div>
                  ) : i === 4 ? (
                    <div key={i} className="ml-30 text-left mb-2">
                      <p className="yellow roboto-700 mb-0">more</p>
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ml-30 mt-24">
            <h1 className="white text-left roboto-700 size-24 line-height-28 mb-24">
              Episodes
            </h1>
            <div className="episodes_frame">
              <div className="episodes_img">
                <div className="play">
                  <BsPlayFill className="white m-0" />
                </div>
                <img src={urlBackdrop} alt="" className="ep_img" />
              </div>
              <div className="ml-15 overview_ep">
                <div>
                  <h1 className="white text-left roboto-700 size-20 line-height-235 mb-13">
                    1 - {movie.original_title}
                  </h1>
                </div>
                <p className="white roboto-400 size-16 line-height-32">
                  {movie.overview.split(".")[0]}
                </p>
              </div>
            </div>
            <hr className="hr_ep" />
          </div>
        </div>
      </div>
      <div className="ml-165 mt-64">
        <h1 className="white text-left roboto-700 size-32 line-height-375 mb-24">
          You Might Also Like This!
        </h1>
        <div className="similar">
          {similar?.map((movie, i) => {
            return (
              <Card
                key={i}
                movie={movie}
                genres={genres}
                index={i + 1}
                setReq={setReq}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
