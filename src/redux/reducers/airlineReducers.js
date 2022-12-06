import { GET_AIRLINE_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRLINE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default airlineReducer;
