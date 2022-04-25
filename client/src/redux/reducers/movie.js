const movieState = {
  movies: [],
  genres: [],
  movie: {},
  similar: [],
  casts: [],
  episodes: [],
  similarPages: 0,
  pages: 0,
  isLoading: true,
};

export default function movies(state = movieState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case "movie/fetchMovie":
      return {
        ...state,
        movies: state.movies.concat(payload)
      }
    case "genre/fetchMovie":
      return {
        ...state,
        genres: payload
      }
    case "pages/fetchMovie":
      return {
        ...state,
        pages: payload
      }
    case "loading/fetchMovie":
      return {
        ...state,
        isLoading: payload
      }
    case "movieById/fetchMovie":
      return {
        ...state,
        movie: payload
      }
    case "similar/fetchMovie":
      return {
        ...state,
        similar: state.similar.concat(payload)
      }
    case "pagesSimilar/fetchMovie":
      return {
        ...state,
        similarPages: payload
      }
    case "movieCast/fetchMovie":
      return {
        ...state,
        casts: payload
      }
    case "episodes/fetchMovie":
      return {
        ...state,
        episodes: payload
      }

    default:
      return state
  }
}
