import axios from "axios";
import { GET_AIRPORTS_SUCCESS, GET_DETAIL_AIRPORTS_SUCCESS } from "../types";

// READ
export const getListAirports = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/airports/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_AIRPORTS_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// create
export const createairports = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/airports`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

// get by id

export const getDetailAirports = (iata_code, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/airports/${iata_code}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_DETAIL_AIRPORTS_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateAirports = async (iata_code, body, setErrors) => {
  try {
    console.log(body);
    const token = localStorage.getItem("token");

    await axios.put(
      `${process.env.REACT_APP_API_URL}/airports/${iata_code}`,
      body,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const deleteAirports = (iata_code) => {
  const token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/airports/${iata_code}`, {
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
