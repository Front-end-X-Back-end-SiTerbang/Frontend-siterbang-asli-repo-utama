import { GET_DETAIL_AIRPORT_SUCCESS } from "../types";

const initialState = {
  data: {},
};

const AirportDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_AIRPORT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default AirportDetailReducer;
