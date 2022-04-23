import "../assets/Card.css";
import { useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Card({ movie, genres, index }) {
  const url = "https://image.tmdb.org/t/p/w342" + movie.poster_path;
  const [genre, setGenres] = useState([]);
  const [stars, setStar] = useState([]);

  const checkGenre = () => {
    if (genres) {
      const listGenre = movie.genre_ids.map((id) => {
        const [temp] = genres.filter((gen) => id == gen.id);
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
      {index % 4 == 0 ? (
        <div id="Card" className="col-md-3" style={{ marginRight: "0px" }}>
          <div id="Card_Content">
            <div className="row text-center flex tag margin_tag">
              {genre?.map((genre, i) => {
                return (
                  <div key={i} id="Card_Tag">
                    <h5 id="Card_Font_Tag">{genre?.name}</h5>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row tag star">
              {stars?.map((_, i) => {
                return <BsStarFill className="white" key={i} />;
              })}
            </div>
            ,<h1 className="text tag">{movie.original_title}</h1>
          </div>
          <div id="Card_Blend" />
          <img id="Card_Img" src={url} alt="" />
        </div>
      ) : (
        <div id="Card" className="col-md-3" style={{ marginRight: "30px" }}>
          <div id="Card_Content">
            <div className="row text-center flex tag margin_tag">
              {genre?.map((genre, i) => {
                return (
                  <div key={i} id="Card_Tag">
                    <h5 id="Card_Font_Tag">{genre?.name}</h5>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row tag star">
              {stars?.map((_, i) => {
                return <BsStarFill className="white" key={i} />;
              })}
            </div>
            ,<h1 className="text tag">{movie.original_title}</h1>
          </div>
          <div id="Card_Blend" />
          <img id="Card_Img" src={url} alt="" />
        </div>
      )}
    </>
  );
}
