import "../assets/Card.css";
import { useState, useEffect } from "react";
import { BsStarFill, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Card({ movie, genres, index, setReq }) {
  const url = "https://image.tmdb.org/t/p/w342" + movie.poster_path;
  const [genre, setGenres] = useState([]);
  const [stars] = useState([]);

  const navigate = useNavigate();

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
    if (!stars.length) {
      for (let i = 0; i < Math.ceil(movie.vote_average); i++) {
        stars.push(1);
      }
    }
  }, []);

  useEffect(() => {
    checkGenre();
  }, [genres]);

  const changePage = (id) => {
    setReq(true)
    navigate("/details/" + id);
  };

  return (
    <>
      <a onClick={() => changePage(movie.id)} className="col-md-3">
        {index % 4 === 0 ? (
          <div id="Card"  style={{ marginRight: "0px" }}>
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
            <div className="tag_watch">
              <h5 className="yellow text_watch">Watch now</h5>
              <BsChevronRight className="yellow arrow" />
            </div>
            <div id="Card_Blend" />
            <img id="Card_Img" src={url} alt="" />
          </div>
        ) : (
          <div id="Card"  style={{ marginRight: "30px" }}>
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
              <h1 className="text tag">{movie.original_title}</h1>
            </div>
            <div className="tag_watch">
              <h5 className="yellow text_watch">Watch now</h5>
              <BsChevronRight className="yellow arrow" />
            </div>
            <div id="Card_Blend" />
            <img id="Card_Img" src={url} alt="" />
          </div>
        )}
      </a>
    </>
  );
}
