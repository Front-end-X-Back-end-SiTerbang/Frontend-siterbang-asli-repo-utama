import axios from "axios";
import { GET_AIRPLANES_SUCCESS, GET_DETAIL_AIRPLANES_SUCCESS } from "../types";

// READ
export const getListAirplanes = () => async (dispatch) => {
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
      type: GET_AIRPLANES_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// create
export const createAirplanes = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/airplanes`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const getDetailAirplanes = (id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/airplanes/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_DETAIL_AIRPLANES_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateAirplanes = async (id, body, setErrors) => {
  try {
    console.log(body);
    const token = localStorage.getItem("token");

    await axios.put(`${process.env.REACT_APP_API_URL}/airplanes/${id}`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });

    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const deleteAirplanes = (id) => {
  const token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/airplanes/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
