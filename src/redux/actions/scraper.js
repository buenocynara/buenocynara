import {
  FETCH_DATA,
  LOAD_SPINNER,
  KILL_SPINNER,
} from "./types";

import axios from "axios";

export const loginSpinner = () => {
  return {
    type: "LOAD_SPINNER",
    payload: true
  };
};

export const killSpinner = () => {
  return {
    type: "KILL_SPINNER",
    payload: false
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch(loginSpinner());
    axios
      .get(
        `https://www.instagram.com/cynarabueno/`
      )
      .then(response => {
        localStorage.setItem("data", response.data);
        dispatch({
          type: FETCH_DATA,
          payload: response.data
        });
      })
      .catch(e => {
        console.log("This page does not exist");
        dispatch(killSpinner());
      });
  };
};


