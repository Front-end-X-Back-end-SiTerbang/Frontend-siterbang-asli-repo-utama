import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Logo from "../../../assets/img-plane/siterbang.png";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import "../../../assets/css/styleku.css";
import TabelHistory from "./TabelHistory";

function HistoryBooking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    // handle logout
  };

  useEffect(() => {
    document.title = `Dashboard`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main-container d-flex">
        <div className="sidebar" id="side_nav">
          <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
            <h1 className="fs-4">
              <span className="text-white text-center control-terbang">
                <img src={LogoAdmin} alt="" width="100px" />
              </span>
            </h1>
          </div>
          <ul className="list-unstyled px-2">
            <li
              className="beruang px-3 py-2 d-block"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <i className="fal fa-home bear"></i> Dashboard
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/admin");
              }}
            >
              <i className="fal fa-user-headset bear"></i> Admin
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/productions");
              }}
            >
              <i class="fal fa-shopping-cart bear"></i> Product
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/maskapai");
              }}
            >
              <i className="fal fa-plane-departure bear"></i> Maskapai
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/airplanes");
              }}
            >
              <i className="fal fa-solar-panel bear"></i> Airplanes
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/airport");
              }}
            >
              <i class="fal fa-place-of-worship bear"></i> Airport
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/historybooking");
              }}
            >
              <i class="fal fa-place-of-worship bear"></i> History Booking
            </li>
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <div className="d-flex justify-content-between d-block">
                <img
                  src={Logo}
                  alt=""
                  width="70px"
                  class="navbar-brand fs-4 px-2 py-0"
                />
              </div>
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fal fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item nav-link  phone d-md-none yui">
                    Dashboard
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/admin");
                    }}
                  >
                    Admin
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/maskapai");
                    }}
                  >
                    Maskapai
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/airport");
                    }}
                  >
                    Airport
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/productions");
                    }}
                  >
                    Production
                  </li>
                  <li className="nav-item nav-link phone">
                    <button
                      className="btn btn-danger btn-sm"
                      type="submit"
                      onClick={handleLogout}
                    >
                      <i className="fal fa-power-off text-light"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="dashboard-content px-3 pt-4 my-content">
            {/* content */}
            <TabelHistory />
          </div>
          <footer className="bg-light text-center text-white">
            <div class="text-center p-3" style={{ backgroundColor: "#FBFBFB" }}>
              <h6 className="text-dark">
                © 2022 Copyright: By designed siterbang FExBE
              </h6>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HistoryBooking;
