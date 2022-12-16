import axios from "axios";
// import { GET_TRANSAKSI_PRODUCT_SUCCESS } from "../types";

// create
export const createTransaksi = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${process.env.REACT_APP_API_URL}/transactions`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;
  } catch (error) {
    setErrors(error.response.data.message);
  }
};
