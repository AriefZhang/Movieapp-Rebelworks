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

export function asyncFetchMovies(page) {
  if (!page) page = 1
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
