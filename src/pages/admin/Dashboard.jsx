import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListAirline } from "../../redux/actions/airlineActions";
import { getListAirplanes } from "../../redux/actions/airplanesActions";
import { getListAllAdmin } from "../../redux/actions/adminActions";

import Logo from "../../assets/admin-img/undraw_aircraft_re_m05i.svg";
import LogoAdmin from "../../assets/admin-img/undraw_metrics_re_6g90.svg";
import LogoAirplanes from "../../assets/admin-img/undraw_light_the_fire_gt58.svg";
import LogoAirport from "../../assets/admin-img/undraw_airport_re_oqk1.svg";
import LogoAllAdmin from "../../assets/admin-img/undraw_designer_re_5v95.svg";

import "../../assets/css/styleku.css";
import { getListAirports } from "../../redux/actions/airportActions";

function Dahsboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const airline = useSelector((state) => {
    return state.listAirline.data;
  });

  const airports = useSelector((state) => {
    return state.listAirports.data;
  });

  const airplanes = useSelector((state) => {
    return state.listAirplanes.data;
  });

  const admin = useSelector((state) => {
    return state.listAdmin.data;
  });

  useEffect(() => {
    dispatch(getListAirline());
    dispatch(getListAirports());
    dispatch(getListAirplanes());
    dispatch(getListAllAdmin());
  }, [dispatch]);

  // handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    // dispatch(logout());
    // navigate("/loginAdmin");
    console.log("adaahha");
  };

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
            <li className="beruang px-3 py-2">
              <i className="fal fa-user-headset bear"></i> Admin
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
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <div className="d-flex justify-content-between d-block">
                <img
                  src={Logo}
                  alt=""
                  width="100px"
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
                  <li className="nav-item nav-link phone d-md-none yui">
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
            <h2 className="fs-5">Dashboard</h2>
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                        <div className="mb-2">
                          <img src={Logo} alt="MasakpaiLogo" width="50" />
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Maskapai</h6>
                        <h6 className="font-extrabold mb-0">
                          {airline?.length}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                        <div className="mb-2">
                          <img src={LogoAirport} alt="AirportLogo" width="30" />
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Airport</h6>
                        <h6 className="font-extrabold mb-0">
                          {airports?.length}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                        <div className="mb-2">
                          <img
                            src={LogoAirplanes}
                            alt="AirportLogo"
                            width="40"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Airplanes</h6>
                        <h6 className="font-extrabold mb-0">
                          {airplanes?.length}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                        <div className="mb-2">
                          <img
                            src={LogoAllAdmin}
                            alt="AirportLogo"
                            width="30"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Admin</h6>
                        <h6 className="font-extrabold mb-0">{admin?.admin}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dahsboard;
