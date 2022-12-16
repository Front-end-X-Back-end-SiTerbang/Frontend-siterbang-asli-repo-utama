import axios from "axios";
import { GET_DETAIL_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "../types";

export const getListProduct = (url) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    console.log(url);
    const results = await axios.get(url, {
      headers: {
        Authorization: `${token}`,
      },
    });

    // console.log(results);

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: results.data,
    });
    console.log(dispatch);
  } catch (error) {
    throw error;
  }
};

export const getDetailProduct = (id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log(id);
    dispatch({
      type: GET_DETAIL_PRODUCT_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    throw error;
  }
};
