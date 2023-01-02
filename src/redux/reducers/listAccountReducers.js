import { GET_ALL_ACCOUNT_USERDETAIL } from "../types";

const initialState = {
  data: [],
};

const userDetailAllAccount = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ACCOUNT_USERDETAIL:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default userDetailAllAccount;
