import { combineReducers } from "redux";
import listAirlineReducer from "./airlineReducers";

export default combineReducers({
  listAirline: listAirlineReducer,
});
