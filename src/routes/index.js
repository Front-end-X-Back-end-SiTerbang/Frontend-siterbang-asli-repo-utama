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
import Protected from "../component/security/Protected";
import DetailTicket from "../pages/detailTicket";
import Admins from "../pages/admin/admins/Admin";
import CreateUsers from "../pages/admin/admins/CreateUsers";
import Products from "../pages/admin/products/Products";
import CreateProductions from "../pages/admin/products/CreateProducts";
import { Button, Result } from "antd";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
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
          <Route
            index
            element={
              <PrivateRoute>
                <SearchProduct />
              </PrivateRoute>
            }
          />
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
            <Protected>
              <Dahsboard />
            </Protected>
          }
        />

        <Route
          path="/createproductions"
          element={
            <Protected>
              <CreateProductions />
            </Protected>
          }
        />

        <Route
          path="/maskapai"
          element={
            <Protected>
              <Maskapai />
            </Protected>
          }
        />

        <Route
          path="/productions"
          element={
            <Protected>
              <Products />
            </Protected>
          }
        />

        <Route
          path="/createadmin"
          element={
            <Protected>
              <CreateUsers />
            </Protected>
          }
        />

        <Route
          path="/admin"
          element={
            <Protected>
              <Admins />
            </Protected>
          }
        />

        <Route
          path="/airplanes"
          element={
            <Protected>
              <Airplanes />
            </Protected>
          }
        />

        <Route path="/detailpesanan/:id" element={<DetailTicket />} />

        <Route
          path="/createmaskapai"
          element={
            <Protected>
              <CreateMaskapai />
            </Protected>
          }
        />
        <Route
          path="/editmaskapai/:id"
          element={
            <Protected>
              <EditMaskapai />
            </Protected>
          }
        />
        <Route
          path="/createairplanes"
          element={
            <Protected>
              <CreateAirplanes />
            </Protected>
          }
        />
        <Route path="/editairplanes/:id" element={<EditAirplanes />} />
        <Route
          path="/airport"
          element={
            <Protected>
              <Airports />
            </Protected>
          }
        />
        <Route
          path="/createairport"
          element={
            <Protected>
              <CreateAirports />
            </Protected>
          }
        />
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
        <Route
          path="/*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>}
            />
          }
        />
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
