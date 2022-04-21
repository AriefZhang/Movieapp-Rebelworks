const movieState = {
  movie: [],
  isLoading: true,
};

export default function movies(state = movieState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case "movie/fetchMovie":
      return {
        ...state,
        movie: payload
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
