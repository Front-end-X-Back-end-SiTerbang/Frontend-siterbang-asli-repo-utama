import { GET_ALL_ADMIN_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const airportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADMIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default airportsReducer;
