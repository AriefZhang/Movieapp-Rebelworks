const movieState = {
  movies: [],
  genres: [],
  isLoading: true,
};

export default function movies(state = movieState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case "movie/fetchMovie":
      return {
        ...state,
        movies: payload
      }
    case "genre/fetchMovie":
      return {
        ...state,
        genres: payload
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
