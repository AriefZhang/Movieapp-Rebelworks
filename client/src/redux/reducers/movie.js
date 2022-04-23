const movieState = {
  movies: [],
  genres: [],
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

    default:
      return state
  }
}
