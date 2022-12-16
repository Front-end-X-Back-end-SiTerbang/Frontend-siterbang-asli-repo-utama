import { GET_AIRLINE_SUCCESS } from "../types";

const initialState = {
  result: [],
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRLINE_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
      };
    default:
      return state;
  }
};

export default airlineReducer;
