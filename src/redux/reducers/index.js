import { combineReducers } from "redux";
import scraper from "./scraper";

export default combineReducers({
  data: scraper
});
