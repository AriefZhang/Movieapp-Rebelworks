import themoviedb from "../../api/themoviedb"
import env from 'react-dotenv'

export function setMovies(payload) {
  return {
    type: "movie/fetchMovie",
    payload
  }
}

export function asyncFetchMovies() {
  return dispatch => {
    themoviedb.get("movie/now_playing" + env.API_KEY)
    .then(({data}) => console.log(data))
    .catch(err => console.error(err))
  }
}