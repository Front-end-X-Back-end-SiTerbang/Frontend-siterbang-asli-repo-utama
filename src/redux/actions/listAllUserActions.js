import axios from "axios";
import { GET_ALL_USERS } from "../types";

// getAllListAdmin
export const getListAllUserss = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth/get`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_ALL_USERS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};
