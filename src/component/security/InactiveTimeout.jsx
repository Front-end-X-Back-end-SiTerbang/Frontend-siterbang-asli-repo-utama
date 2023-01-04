import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Komponen ini akan membuat logout setelah 2 menit tidak ada aktivitas
function InactiveTimeout() {
  // Digunakan untuk mengarahkan pengguna ke halaman login
  const navigate = useNavigate();
  // Durasi timeout, 2 menit dalam milidetik
  const inactiveTimeout = 2 * 60 * 1000;

  // Fungsi untuk logout pengguna
  const logout = () => {
    console.log("Logging out...");
    // Hapus token yang tersimpan di localStorage
    localStorage.removeItem("token");
    // Bersihkan semua item yang tersimpan di localStorage
    localStorage.clear();
    // Arahkan pengguna ke halaman login
    navigate("/login");
  };

  useEffect(() => {
    let activityTimeout;
    let inactivityTimeout;
    let logoutTimeout;

    // Fungsi untuk reset timeout
    function resetTimeout() {
      clearTimeout(activityTimeout);
      clearTimeout(inactivityTimeout);
      clearInterval(logoutTimeout);

      // Buat timeout baru
      activityTimeout = setTimeout(() => {
        // Jika tidak ada aktivitas selama 2 menit, lakukan logout
        logout();
      }, inactiveTimeout);
    }

    // Fungsi untuk menangani perubahan visibilitas browser
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        // Jika browser kembali ke posisi visible, reset timeout
        resetTimeout();
      } else {
        // Jika tidak, mulai hitung mundur timeout untuk logout jika tidak ada aktivitas selama 2 menit
        inactivityTimeout = setTimeout(() => {
          // Mulai countdown sampai waktu logout
          let timeLeft = inactiveTimeout;
          logoutTimeout = setInterval(() => {
            timeLeft -= 1000;
            if (timeLeft <= 0) {
              // Waktu habis, lakukan logout
              logout();
            }
          }, 1000);
        }, inactiveTimeout);
      }
    }

    // Reset timeout setiap ada aktivitas pengguna
    document.addEventListener("click", resetTimeout);
    document.addEventListener("keydown", resetTimeout);
    window.addEventListener("focus", resetTimeout);

    // Buat timeout untuk logout jika tidak ada aktivitas selama 2 menit saat browser tidak fokus
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleVisibilityChange);

    // Bersihkan event listeners saat komponen dihapus
    return () => {
      clearTimeout(activityTimeout);
      clearTimeout(inactivityTimeout);
      clearInterval(logoutTimeout);
      document.removeEventListener("click", resetTimeout);
      document.removeEventListener("keydown", resetTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", resetTimeout);
      window.removeEventListener("blur", handleVisibilityChange);
    };
  }, []);

  // Komponen ini tidak menampilkan apa-apa
  return null;
}

export default InactiveTimeout;
