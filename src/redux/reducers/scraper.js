import { FETCH_DATA, LOAD_SPINNER, KILL_SPINNER } from "../actions/types";

const INIT_STATE = {
  data: "",
  isFecthing: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload, isFecthing: false };
    case LOAD_SPINNER:
      return { ...state, isFecthing: true };
    case KILL_SPINNER:
      return { ...state, isFecthing: false, data: "" };
    default:
      return state;
  }
};
