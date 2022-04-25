import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import Image from "./CarouselImage";

export default function MovieCarousel({ movies }) {
  const navigate = useNavigate()
  const animation = (e) => {
    e.target.classList.toggle("fade");
  };

  const changePage = () => {
    navigate("/");
  };

  return (
    <CarouselProvider
      naturalSlideWidth={1440}
      naturalSlideHeight={648}
      totalSlides={10}
      infinite={true}
      isPlaying={true}
      interval={5000}
      style={{ display: "flex" }}
    >
      <Slider className="carausell" classNameAnimation="fade">
        {movies?.map((movie, i) => {
          return (
            <Slide
              key={i}
              index={i}
              style={{ color: "white" }}
              className="img_carousel"
            >
              <Image movie={movie} />
            </Slide>
          );
        })}
      </Slider>
      <a onClick={() => changePage()} className="home">
        <h1 className="white roboto-700 size-24 ml-165 mt-24 mb-0 line-height-28">
          Home
        </h1>
      </a>
      <div className="bullet_container">
        <Dot slide={0} onClick={animation} className="bullet" />
        <Dot slide={1} onClick={animation} className="bullet" />
        <Dot slide={2} onClick={animation} className="bullet" />
        <Dot slide={3} onClick={animation} className="bullet" />
        <Dot slide={4} onClick={animation} className="bullet" />
        <Dot slide={5} onClick={animation} className="bullet" />
        <Dot slide={6} onClick={animation} className="bullet" />
        <Dot slide={7} onClick={animation} className="bullet" />
        <Dot slide={8} onClick={animation} className="bullet" />
        <Dot slide={9} onClick={animation} className="bullet" />
      </div>
      <ButtonBack className="previous">
        <BsChevronLeft className="carousel_arrow" />
      </ButtonBack>
      <ButtonNext className="next">
        <BsChevronRight className="carousel_arrow" />
      </ButtonNext>
    </CarouselProvider>
  );
}
