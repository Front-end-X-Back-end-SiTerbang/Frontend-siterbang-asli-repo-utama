import axios from "axios";
import { GET_ALL_PRODUCTS_SUCCESS } from "../types";

// read
export const getListProductions = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// create
export const createproductions = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/products`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};
