import axios from "axios";
import { GET_AIRPORT_SUCCESS } from "../types";

// READ
export const getListAirport = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/airplanes/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_AIRPORT_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// create
