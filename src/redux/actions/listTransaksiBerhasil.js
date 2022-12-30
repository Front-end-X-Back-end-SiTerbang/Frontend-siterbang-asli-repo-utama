import axios from "axios";
import { GET_ALL_TRANSAKSI_SUCCESS } from "../types";

export const getListAllTransaksiBerhasil = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/transactions/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_ALL_TRANSAKSI_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
