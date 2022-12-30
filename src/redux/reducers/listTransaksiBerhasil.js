import { GET_ALL_TRANSAKSI_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const listAllTransaksi = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSAKSI_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default listAllTransaksi;
