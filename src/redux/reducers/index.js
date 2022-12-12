import { combineReducers } from "redux";
import listAirlineReducer from "./airlineReducers";
import AirlineDetailReducer from "./airlineDetailReducer";
import AirplanestReducer from "./airplanesReducers";
import AirplanestDetailReducer from "./airplanesDetailReducers";
import AirportReducers from "./airportReducers";
import AirportsDetailReducer from "./airportDetailReducers";
import GetAllAdmin from "./adminReducers";

export default combineReducers({
  listAirline: listAirlineReducer,
  listAirplanes: AirplanestReducer,
  listAirports: AirportReducers,
  listAdmin: GetAllAdmin,
  detailAirline: AirlineDetailReducer,
  detailAirplanes: AirplanestDetailReducer,
  detailAirports: AirportsDetailReducer,
});
