import axios from "axios";

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data
    );

    localStorage.setItem("token", res.data.data.token);
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const register = async (data, setErrors) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, data);
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};
export const forgot = async (data, setErrors) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/forgot-password`,
      data
    );
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};

export const reset = async (token, data, setErrors) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/auth/reset-password/${token}`,
      data
    );
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
    throw error;
  }
};

// handle logout
export const logout = () => {
  localStorage.removeItem("token");
};

// get count admin
// export const getListAdmin = () => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");

//     const results = await axios.get(
//       `${process.env.REACT_APP_API_URL}/total-user`,
//       {
//         headers: {
//           Authorization: `${token}`,
//         },
//       }
//     );

//     dispatch({
//       type: GET_AIRLINE_SUCCESS,
//       payload: results.data,
//     });
//   } catch (error) {
//     console.log(error.response.data.message);
//   }
// };
