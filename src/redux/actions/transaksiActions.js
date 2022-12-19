import axios from "axios";
import {
  GET_MYBOOKING_SUCCESS,
} from "../types"

// create
export const createTransaksi = async (body, setErrors) => {
  try {
    console.log(body)
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
      console.log(res)

      dispatch({
          type: GET_MYBOOKING_SUCCESS,
          payload: res.data,
      });
  } catch (error) {
    throw error;
  }
};
