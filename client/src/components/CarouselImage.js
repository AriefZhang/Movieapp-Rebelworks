import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsStarFill } from "react-icons/bs";

export default function Image({ movie }) {
  const [genre, setGenres] = useState([]);
  const [stars] = useState([]);

  const { genres } = useSelector((state) => state.reducer.movies);

  const checkGenre = () => {
    if (genres) {
      const listGenre = movie.genre_ids.map((id) => {
        const [temp] = genres.filter((gen) => id === gen.id);
        return temp;
      });
      setGenres(listGenre);
    }
  };

  useEffect(() => {
    for (let i = 0; i < Math.ceil(movie.vote_average); i++) {
      stars.push(1);
    }
  }, []);

  useEffect(() => {
    checkGenre();
  }, [genres]);

  return (
    <>
      <div className="box">
        <div className="carousel_content">
          <div className="row text-center flex tag_home margin_tag">
            {genre?.map((genre, i) => {
              return (
                <div key={i} id="Card_Tag">
                  <h5 id="Card_Font_Tag">{genre?.name}</h5>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row tag_home star">
            {stars?.map((_, i) => {
              return <BsStarFill className="white" key={i} />;
            })}
          </div>
          <h1 className="big_text tag_home">{movie.original_title}</h1>
          <p className="tag_home overview">
            {movie.overview}
          </p>
          <div className="button_watch">
            <h5 className="button_text">Watch now</h5>
          </div>
        </div>
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
        alt=""
        style={{ width: "100%" }}
        className="filter"
      />
    </>
  );
}
