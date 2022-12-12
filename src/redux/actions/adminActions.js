import axios from "axios";
import { GET_ALL_ADMIN_SUCCESS } from "../types";

// READ
export const getListAllAdmin = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/total-user`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_ALL_ADMIN_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
