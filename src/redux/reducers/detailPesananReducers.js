import { GET_DETAIL_TICKET_SUCCESS } from "../types";

const initialState = {
  data: {},
};

const detailTicketPesananReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_TICKET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default detailTicketPesananReducers;
