import { combineReducers } from "redux";
import listAirlineReducer from "./airlineReducers";
import AirlineDetailReducer from "./airlineDetailReducer";
import AirplanestReducer from "./airplanesReducers";
import AirplanestDetailReducer from "./airplanesDetailReducers";
import AirportReducers from "./airportReducers";
import AirportsDetailReducer from "./airportDetailReducers";
import GetAllAdmin from "./adminReducers";
import listProductReducer from "./listProduct";
import listProductDetail from "./listProductDetail";
import listMyBookingReducer from "./transaksiReducers";
import detailUserReducer from "./userReducers";
import detailTicketPesananReducers from "./detailPesananReducers";
import listUserAll from "./listUsersReducers";
import listProduk from "./productionsReducers";
import listAllTransaksi from "./listTransaksiBerhasil";
import listAccountPelanggan from "./listAccountReducers";

export default combineReducers({
  listAirline: listAirlineReducer,
  listAirplanes: AirplanestReducer,
  listAirports: AirportReducers,
  listAdmin: GetAllAdmin,
  detailAirline: AirlineDetailReducer,
  detailAirplanes: AirplanestDetailReducer,
  detailAirports: AirportsDetailReducer,
  listProduct: listProductReducer,
  detailByProduct: listProductDetail,
  myBooking: listMyBookingReducer,
  detailUser: detailUserReducer,
  detailPesanan: detailTicketPesananReducers,
  listAllUser: listUserAll,
  listProductions: listProduk,
  listTransaksiBerhasil: listAllTransaksi,
  listAccountUsers: listAccountPelanggan,
});
