import { combineReducers } from "redux";
import listAirlineReducer from "./airlineReducers";
import AirlineDetailReducer from "./airlineDetailReducer"

export default combineReducers({
  listAirline: listAirlineReducer,
  detailAirline: AirlineDetailReducer,
});
