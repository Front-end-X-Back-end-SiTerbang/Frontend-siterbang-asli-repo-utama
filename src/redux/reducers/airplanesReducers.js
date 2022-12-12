import { GET_AIRPLANES_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const airplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRPLANES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default airplanesReducer;
