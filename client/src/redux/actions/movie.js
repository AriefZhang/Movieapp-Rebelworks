import themoviedb from "../../api/themoviedb"
import env from 'react-dotenv'

export function setMovies(payload) {
  return {
    type: "movie/fetchMovie",
    payload
  }
}

export function setGenres(payload) {
  return {
    type: "genre/fetchMovie",
    payload
  }
}

export function setPages(payload) {
  return {
    type: "pages/fetchMovie",
    payload
  }
}

export function setLoading(payload) {
  return {
    type: "loading/fetchMovie",
    payload
  }
}

// ! 
export function setMovieById(payload) {
  return {
    type: "movieById/fetchMovie",
    payload
  }
}

export function setSimilar(payload) {
  return {
    type: "similar/fetchMovie",
    payload
  }
}

export function setPagesSimilar(payload) {
  return {
    type: "similarPages/fetchMovie",
    payload
  }
}

export function setMovieCast(payload) {
  return {
    type: "movieCast/fetchMovie",
    payload
  }
}

export function asyncFetchMovies(page) {
  if (!page) page = 1
  console.log(env.API_KEY)
  return dispatch => {
    themoviedb.get("movie/now_playing" + env.API_KEY + "&page=" + page)
    .then(({data}) => {
      dispatch(setMovies(data.results))
      dispatch(setPages(data.page))
      return themoviedb.get("genre/movie/list" + env.API_KEY)
    })
    .then(({data}) => dispatch(setGenres(data.genres)))
    .catch(err => console.error(err))
  }
}

export function asyncMovieById(id) {
  return dispatch => {
    themoviedb.get("movie/" + id + env.API_KEY)
    .then(({data}) => {
      console.log(data)
      dispatch(setMovieById(data))
      return themoviedb.get("movie/" + id + "/credits" + env.API_KEY)
    })
    .then(({data}) => dispatch(setMovieCast(data.cast)))
    .catch(err => console.error(err))
  }
}

export function asyncSimilarMovie(id) {
  return dispatch => {
    themoviedb.get("movie/" + id + "/similar" + env.API_KEY)
    .then(({data}) => {
      console.log(data.results)
      dispatch(setSimilar(data.results))
      dispatch(setPagesSimilar(data.page))
    })
    .catch(err => console.error(err))
  }
}
