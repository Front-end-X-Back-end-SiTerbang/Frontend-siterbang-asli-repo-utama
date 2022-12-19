import {
    // GET_DETAIL_USER_FAILED,
    // GET_DETAIL_USER_PENDING,
    GET_DETAIL_USER_SUCCESS,
} from '../types';

const initialState = {

    data: [],
   
};

const detailUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data,
            };
        default:
            return state;
    }
};

export default detailUserReducer;