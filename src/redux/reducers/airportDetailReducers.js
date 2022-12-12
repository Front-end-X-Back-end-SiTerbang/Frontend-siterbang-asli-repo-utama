import { GET_DETAIL_AIRPORTS_SUCCESS } from "../types";

const initialState = {
  data: {},
};

const AirportsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_AIRPORTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default AirportsDetailReducer;
