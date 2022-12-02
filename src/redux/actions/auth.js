import axios from "axios";

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data
    );

    localStorage.setItem("token", res.data.data.token);
    localStorage.setItem("email", res.data.data.email);
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
    console.log(data);

    throw error;
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
    // if (error.response) {
    //   if (Array.isArray(error.response.data.error)) {
    //     setErrors(error.response.data.error);
    //   } else {
    //     setErrors([{ msg: error.response.data.error }]);
    //   }
    // } else {
    //   setErrors([{ msg: error.message }]);
    // }

    // return false;

    throw error;
  }
};
