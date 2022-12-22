import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Protected({ children }) {
  // Navigate
  const navigate = useNavigate();

  // Get token from local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      const results = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/get`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (!results.data.role === "ADMIN") {
        return <Navigate to={`/`} />;
      }
    })();
  }, [token, navigate]);

  // If no token
  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
