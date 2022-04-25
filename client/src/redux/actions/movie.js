import themoviedb from "../../api/themoviedb";
import env from "react-dotenv";

export function setMovies(payload) {
  return {
    type: "movie/fetchMovie",
    payload,
  };
}

export function setGenres(payload) {
  return {
    type: "genre/fetchMovie",
    payload,
  };
}

export function setPages(payload) {
  return {
    type: "pages/fetchMovie",
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: "loading/fetchMovie",
    payload,
  };
}

export function setMovieById(payload) {
  return {
    type: "movieById/fetchMovie",
    payload,
  };
}

export function setSimilar(payload) {
  return {
    type: "similar/fetchMovie",
    payload,
  };
}

export function setPagesSimilar(payload) {
  return {
    type: "similarPages/fetchMovie",
    payload,
  };
}

export function setMovieCast(payload) {
  return {
    type: "movieCast/fetchMovie",
    payload,
  };
}

export function setEpisodes(payload) {
  return {
    type: "episodes/fetchMovie",
    payload,
  };
}

export function asyncFetchMovies(page) {
  if (!page) page = 1;
  return (dispatch) => {
    themoviedb
      .get(
        "movie/now_playing" + process.env.REACT_APP_API_KEY + "&page=" + page
      )
      .then(({ data }) => {
        dispatch(setMovies(data.results));
        dispatch(setPages(data.page));
        return themoviedb.get(
          "genre/movie/list" + process.env.REACT_APP_API_KEY
        );
      })
      .then(({ data }) => dispatch(setGenres(data.genres)))
      .catch((err) => console.error(err));
  };
}

export function asyncMovieById(id) {
  console.log(id)
  return (dispatch) => {
    return themoviedb
      .get("movie/" + id + process.env.REACT_APP_API_KEY)
      .then(({ data }) => {
        dispatch(setMovieById(data));
        dispatch(asyncCast(id))
        return themoviedb
        .get("movie/" + id + process.env.REACT_APP_API_KEY)
      })
      .catch((err) => console.error(err));
  };
}

export function asyncCast(id) {
  return (dispatch) => {
    themoviedb
      .get("movie/" + id + "/credits" + process.env.REACT_APP_API_KEY)
      .then(({ data }) => dispatch(setMovieCast(data.cast)))
      .catch((err) => console.error(err));
  };
}

export function asyncCollection(id) {
  return (dispatch) => {
    themoviedb
      .get("collection/" + id + process.env.REACT_APP_API_KEY)
      .then(({ data }) => dispatch(setMovieCast(data.cast)))
      .catch((err) => console.error(err));
  };
}

export function asyncSimilarMovie(id) {
  return (dispatch) => {
    themoviedb
      .get("movie/" + id + "/similar" + process.env.REACT_APP_API_KEY)
      .then(({ data }) => {
        dispatch(setSimilar(data.results));
        dispatch(setPagesSimilar(data.page));
      })
      .catch((err) => console.error(err));
  };
}
