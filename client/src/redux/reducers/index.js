import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from './movie'

export default combineReducers({
  movies: movieReducer
})