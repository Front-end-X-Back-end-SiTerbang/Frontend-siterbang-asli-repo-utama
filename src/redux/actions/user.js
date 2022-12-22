import axios from "axios";
import {
  GET_DETAIL_USER_SUCCESS,

} from "../types";

export const getDetailUser = (id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user
      `,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (body, setErrors) => {
    try {
      const token = localStorage.getItem("token")
    //   const id = localStorage.getItem("id")
  
      await axios.put(`${process.env.REACT_APP_API_URL}/user/profile`, body, 
      {
        headers: {
          Authorization: `${token}`,
        },
      }
      )
  
      return true;
  
    } catch (error) {
        throw error;
      }
  };

  export const updatePhoto = async (body, setErrors) => {
    try {
      const token = localStorage.getItem("token")
  
      await axios.put(`${process.env.REACT_APP_API_URL}/user/profile/photo`, body,
       {
        headers: {
            Authorization: `${token}`,
          },
      }
      )
  
      return true;
  
    } catch (error) {
        throw error;
      }
  };

