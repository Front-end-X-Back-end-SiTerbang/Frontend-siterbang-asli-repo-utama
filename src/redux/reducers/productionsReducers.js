import { GET_ALL_PRODUCTS_SUCCESS } from "../types";

const initialState = {
  data: [],
};

const productionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default productionsReducer;
