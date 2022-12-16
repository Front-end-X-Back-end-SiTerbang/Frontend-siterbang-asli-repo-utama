import { GET_TRANSAKSI_PRODUCT_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const transaksiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSAKSI_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default transaksiReducer;
