import {
  // GET_PRODUCT_FAILED,
  // GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
  result: [],
};

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
      };
    
    default:
      return state;
  }
};

export default listProductReducer;
