import { GET_AIRPORT_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRPORT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default airportReducer;
