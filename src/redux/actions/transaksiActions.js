import axios from "axios";
import { GET_MYBOOKING_SUCCESS, GET_DETAIL_TICKET_SUCCESS } from "../types";

// create
export const createTransaksi = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/transactions`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const getMyBooking = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/my-transactions`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_MYBOOKING_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getDetailTicket = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/transactions/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_DETAIL_TICKET_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};


export const updateNotifikasi = async (id) => {
  try { 
    const token = localStorage.getItem("token");
    console.log("Token Notif: ", token)
    console.log("Token ID: ", id)
    await axios.put(`${process.env.REACT_APP_API_URL}/transactions/notif/${id}`, 
    { is_read: true },
    {
      headers: {
        Authorization: `${token}`,
      },
    });

    return true;
  } catch (error) {
    throw error;
  }
};
