import {
  // GET_PRODUCT_FAILED,
  // GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
  // isLoading: false,
  isError: false,
  data: [],
  error: null,
  pagination: null,
};

const lietProductReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        isError: false,
        data: action.payload.data,
        // pagination: action.payload.pagination,
      };
    
    default:
      return state;
  }
};

export default lietProductReducer;
