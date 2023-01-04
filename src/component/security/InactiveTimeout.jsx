import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function InactiveTimeout() {
  const navigate = useNavigate();
  const inactiveTimeout = 2 * 60 * 1000; // 2 minutes in milisecond
  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    let activityTimeout;
    let inactivityTimeout;

    function resetTimeout() {
      console.error("Error: something went wrong");
      // menghapus seluruh timeout yang ada
      clearTimeout(activityTimeout);
      clearTimeout(inactivityTimeout);

      // Set a new timeout
      activityTimeout = setTimeout(() => {
        // pengguna selama 2 menit tidak melakukan apa apa akan terlogout
        logout();
      }, inactiveTimeout);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        console.log(`Browser visibility: ${document.visibilityState}`);
        // reset timeout selama pengguna melalkukan interaksi terhadap halaman siterbang
        resetTimeout();
      } else {
        // dan jika tidak ada interaksi diclose dan semacamnya selama 2 menit maka terlogout
        inactivityTimeout = setTimeout(() => {
          logout();
        }, inactiveTimeout);
      }
    }

    // Reset the timeout whenever the user is active
    document.addEventListener("click", resetTimeout);
    document.addEventListener("keydown", resetTimeout);

    // Set a timeout to log out the user if they are inactive for 2 minutes
    // while the window is not focused
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up event listeners when the component unmounts
    return () => {
      clearTimeout(activityTimeout);
      clearTimeout(inactivityTimeout);
      document.removeEventListener("click", resetTimeout);
      document.removeEventListener("keydown", resetTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}

export default InactiveTimeout;
