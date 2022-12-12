import { GET_DETAIL_AIRPLANES_SUCCESS } from "../types";

const initialState = {
  data: {},
};

const AirplanesDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_AIRPLANES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default AirplanesDetailReducer;
