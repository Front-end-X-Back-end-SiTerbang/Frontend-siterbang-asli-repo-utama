import { combineReducers } from "redux";
import listAirlineReducer from "./airlineReducers";
import AirlineDetailReducer from "./airlineDetailReducer";
import airportReducer from "./airportReducers";
import AirportDetailReducer from "./airportReducers";

export default combineReducers({
  listAirline: listAirlineReducer,
  detailAirline: AirlineDetailReducer,
  listAirport: airportReducer,
  detailAirport: AirportDetailReducer,
});
