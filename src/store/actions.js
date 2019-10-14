

function getHotMovies(data) {
  return {
    type: "GET_HOT_MOVIES",
    ...data
  }
}

function getComingMovies(data) {
  return {
    type: "GET_COMING_MOVIES",
    ...data
  }
}

export function async_getMovies(key, cb = () => {}) {
  return async (dispatch, getState) => {
    const state = getState()
    const url = `${state[key].url}?start=${state[key].start}&count=${state[key].count}`
    const data = await fetch(url).then(res => res.json())
    if (key === "comingMovies") {
      dispatch(getComingMovies(data))
    } else {
      dispatch(getHotMovies(data))
    }
    cb()
  }
}