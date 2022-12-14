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
    const results = await axios.get(url, 
      {
        headers: {
          Authorization: `${token}`,
        },
      });
      // console.log(result)
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: results.result,
    });
  } catch (error) {
    // console.log(error.response.result.message);
  }
};

