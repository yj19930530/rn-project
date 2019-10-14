
import { combineReducers } from "redux"

const baseUrl = "http://192.168.8.81:3000"

function hotMovies(state = {
  start: 0,
  count: 10,
  title: "正在上映",
  total: 0,
  url: `${baseUrl}/movies/hot`,
  rows: []
}, action) {
  switch (action.type) {
    case "GET_HOT_MOVIES":
      return Object.assign({}, state, {
        total: action.total,
        rows: [...state.rows, ...action.rows],
        start: state.start + state.count
      });
    default:
      return state;
  }
}

function comingMovies(state = {
  start: 0,
  count: 10,
  title: "即将上映",
  total: 0,
  url: `${baseUrl}/movies/coming`,
  rows: []
}, action) {
  switch (action.type) {
    case "GET_COMING_MOVIES":
      return Object.assign({}, state, {
        total: action.total,
        rows: [...state.rows, ...action.rows],
        start: state.start + state.count
      });
    default:
      return state;
  }
}

export default combineReducers({
  hotMovies, comingMovies
})