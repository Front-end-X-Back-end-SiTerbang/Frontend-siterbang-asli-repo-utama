import axios from "axios";
import {
  // GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  // GET_PRODUCT_FAILED,
  // GET_DETAIL_PRODUCT_PENDING,
  // GET_DETAIL_PRODUCT_SUCCESS,
  // GET_DETAIL_PRODUCT_FAILED,
} from "../types";

export const getListProduct = (url) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    // dispatch({
    //   type: GET_PRODUCT_PENDING,
    //   payload: null,
    // });
    console.log(url)
    const res = await axios.get(url, 
      {
        headers: {
          Authorization: `${token}`,
        },
      });

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    // dispatch({
    //   type: GET_PRODUCT_FAILED,
    //   payload: error.message,
    // });
  }
};

