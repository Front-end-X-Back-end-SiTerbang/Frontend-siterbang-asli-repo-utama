import React, { useState } from "react";
import { toast } from "react-toastify";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import Logo from "../../../assets/admin-img/undraw_aircraft_re_m05i.svg";
import { useNavigate } from "react-router-dom";
import { createairports } from "../../../redux/actions/airportActions";

function CreateAirports() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [iata_code, setiata_code] = useState("");
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (iata_code === "") {
      toast.error("IATA is required");
      return;
    }
    if (name === "") {
      toast.error("Nama Bandara is required");
      return;
    }
    if (city === "") {
      toast.error("Kota is required");
      return;
    }
    if (country === "") {
      toast.error("Negara is required");
      return;
    }
    if (iata_code !== "" && name !== "") {
      const body = {
        iata_code,
        name,
        city,
        country,
      };
      const createAirportsStatus = await createairports(body, setError);
      if (createAirportsStatus) {
        toast.success("Berhasil Menambah Data Airports");
        return navigate("/airport");
      }
    }
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
          <nav className="navbar navbar-expand-lg bg-white">
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
                  <li className="nav-item nav-link phone d-md-none yui">
                    Airport
                  </li>
                  <li className="nav-item nav-link phone">
                    <button className="btn btn-danger btn-sm">
                      <i className="fal fa-power-off text-light"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="dashboard-content px-3 pt-4 my-content">
            <div className="card">
              <div className="card-header">
                <div className="card-title text-center">Tambahkan Airports</div>
                <div className="ms-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/airport");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="row mb-3">
                    <div className="col-lg-3">
                      <label className="form-label">IATA</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Masukkan kode Bandara"
                        onChange={(e) =>
                          setiata_code(e.target.value.toUpperCase())
                        }
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nama Bandara</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Masukkan Nama Bandara"
                        onChange={(e) => setname(e.target.value.toUpperCase())}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nama Kota</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Nama Kota"
                        onChange={(e) => setcity(e.target.value.toUpperCase())}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nama Negara</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Nama Negara"
                        onChange={(e) =>
                          setcountry(e.target.value.toUpperCase())
                        }
                      />
                      <h6 className="err">{error}</h6>
                      <br />
                    </div>
                    <div className="text-end">
                      <React.Fragment>
                        <button
                          className="btn btn-success btn-sm"
                          type="submit"
                        >
                          Submit
                        </button>
                      </React.Fragment>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateAirports;
