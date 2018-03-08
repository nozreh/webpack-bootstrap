import { DEFAULT_DATA } from "../consts/config"

export const fetchData = () => {
  const data = DEFAULT_DATA
  return function(dispatch) {
    dispatch({type: "FETCH_BANKRATES"})
    dispatch({type: "FETCH_DATA_FULFILLED", payload: data })
  }
}
