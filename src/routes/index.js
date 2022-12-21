import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import route page
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import Dahsboard from "../pages/admin/Dashboard";
import Maskapai from "../pages/admin/maskapai/Maskapai";
import Airplanes from "../pages/admin/airplanes/Airplanes";
import LoginAdmin from "../pages/LoginAdmin";
import CreateMaskapai from "../pages/admin/maskapai/CreateMaskapai";
import EditMaskapai from "../pages/admin/maskapai/EditMaskapai";
import CreateAirplanes from "../pages/admin/airplanes/CreateAirplanes";
import EditAirplanes from "../pages/admin/airplanes/EditAirplanes";
import Airports from "../pages/admin/airport/Airports";
import CreateAirports from "../pages/admin/airport/CreateAirports";
import EditAirports from "../pages/admin/airport/EditAirports";
import SearchProduct from "../component/SearchProduct";
import BookingProduct from "../component/BookingProduct";
import MyBooking from "../pages/MyBooking";
import Profile from "../pages/Profile";
import axios from "axios";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/loginAdmin" />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
}

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>

        <Route path="/products/search">
          <Route index element={<SearchProduct />} />
        </Route>

        <Route path="/productdetail/:id">
          <Route index element={<BookingProduct />} />
        </Route>

        {/* registrer */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PublicRoute>
              <Reset />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/auth/reset-password/:token"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        {/* control routes all page admin */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dahsboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/maskapai"
          element={
            <PrivateRoute>
              <Maskapai />
            </PrivateRoute>
          }
        />

        <Route
          path="/airplanes"
          element={
            <PrivateRoute>
              <Airplanes />
            </PrivateRoute>
          }
        />

        <Route
          path="/loginAdmin"
          element={
            <PublicRoute>
              <LoginAdmin />
            </PublicRoute>
          }
        />
        <Route path="/createmaskapai" element={<CreateMaskapai />} />
        <Route path="/editmaskapai/:id" element={<EditMaskapai />} />
        <Route path="/createairplanes" element={<CreateAirplanes />} />
        <Route path="/editairplanes/:id" element={<EditAirplanes />} />
        <Route path="/airport" element={<Airports />} />
        <Route path="/createairport" element={<CreateAirports />} />
        <Route path="/editairport/:iata_code" element={<EditAirports />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/mybooking">
          <Route
            index
            element={
              <PrivateRoute>
                <MyBooking />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton
        theme="dark"
        position="top-right"
      />
    </BrowserRouter>
  );
}
