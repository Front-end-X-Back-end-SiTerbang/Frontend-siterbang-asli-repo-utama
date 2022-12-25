import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Protected({ children }) {
  // Navigate
  const navigate = useNavigate();

  // Get token from local storage
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("role");

  useEffect(() => {
    if (roles !== "ADMIN") {
      navigate("/");
    }
  }, [token, navigate, roles]);

  // If no token
  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
