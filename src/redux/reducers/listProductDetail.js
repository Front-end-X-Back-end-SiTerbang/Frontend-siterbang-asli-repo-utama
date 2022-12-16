import { GET_DETAIL_PRODUCT_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const listDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default listDetailReducer;
