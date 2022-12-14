import { GET_MYBOOKING_SUCCESS } from "../types";

const initialState = {
  data: [],
  total: 0,
};

const listMyBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MYBOOKING_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default listMyBookingReducer;
