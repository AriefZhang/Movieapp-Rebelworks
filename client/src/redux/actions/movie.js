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

export function asyncFetchMovies() {
  return dispatch => {
    themoviedb.get("movie/now_playing" + env.API_KEY)
    .then(({data}) => {
      dispatch(setMovies(data))
      return themoviedb.get("genre/movie/list" + env.API_KEY)
    })
    .then(({data}) => dispatch(setGenres(data.genres)))
    .catch(err => console.error(err))
  }
}
