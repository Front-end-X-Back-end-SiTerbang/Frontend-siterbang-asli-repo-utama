import axios from "axios";

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data
    );

    localStorage.setItem("token", res.data.data.token);
    localStorage.setItem("role", res.data.data.role);
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

// handle login Google
// export const GoogleAuth = async (token, setErrors) => {
//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_API_URL}/auth/google`,
//       JSON.stringify({ access_token: token }),
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     localStorage.setItem("token", res.data.data.token);
//     localStorage.setItem("role", res.data.data.role);
//     return true;
//   } catch (error) {
//     throw error;
//   }
// };
