import axios from "axios";
import { GET_AIRLINE_SUCCESS, GET_DETAIL_AIRLINE_SUCCESS } from "../types";

// read (get) seluruh maskapai = airline
export const getListAirline = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const results = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_AIRLINE_SUCCESS,
      payload: results.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// create
export const createAirline = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/airlines`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

//GetDetail
export const getDetailAirline = (id, navigate) => async (dispatch) => {
  try {
      const token = localStorage.getItem("token");

      const results = await axios.get(
        `${process.env.REACT_APP_API_URL}/airlines/${id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      dispatch({
          type: GET_DETAIL_AIRLINE_SUCCESS,
          payload: results.data,
      });
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const updateAirline = async (id, body, setErrors) => {
  try {
    console.log(body)
      const token = localStorage.getItem("token")

      await axios.put(`${process.env.REACT_APP_API_URL}/airlines/${id}`, body, {
        headers: {
          Authorization: `${token}`,
        },
      })

      return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const deleteAirline = (id) => {
  const token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/airlines/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}