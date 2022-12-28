import { GET_ALL_USERS } from "../types";

const initialState = {
  data: [],
};

const listUsersAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default listUsersAllReducer;
