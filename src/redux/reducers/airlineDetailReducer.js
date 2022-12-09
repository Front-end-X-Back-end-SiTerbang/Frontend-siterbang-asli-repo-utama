import { GET_DETAIL_AIRLINE_SUCCESS } from "../types";

const initialState = {
  data: {},
};

const AirlineDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_AIRLINE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default AirlineDetailReducer;
