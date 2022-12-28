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
    return state.listAirline.result;
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

  console.log(airline);

  useEffect(() => {
    dispatch(getListAirline());
    dispatch(getListAirports());
    dispatch(getListAirplanes());
    dispatch(getListAllAdmin());
  }, [dispatch]);

  // handle logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
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
            <div className="row mb-3">
              <div className="col-6 col-lg-3 col-md-6 mb-3">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Maskapai
                        </p>
                      </div>
                      <div class="flex-shrink-0"></div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span>{airline.length}</span>
                        </h4>
                        <div
                          class="text-decoration-underline"
                          onClick={() => {
                            navigate("/maskapai");
                          }}
                        >
                          Lihat
                        </div>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-soft-success rounded fs-3">
                          <img
                            src="data:image/png;base64,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"
                            alt="Maskapai"
                            width={30}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 mb-3">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Airplanes
                        </p>
                      </div>
                      <div class="flex-shrink-0"></div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span>{airplanes.length}</span>
                        </h4>
                        <div
                          class="text-decoration-underline"
                          onClick={() => {
                            navigate("/airplanes");
                          }}
                        >
                          Lihat
                        </div>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-soft-success rounded fs-3">
                          <img
                            src="data:image/png;base64,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"
                            alt="airplanes"
                            width={30}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 mb-3">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Admin
                        </p>
                      </div>
                      <div class="flex-shrink-0"></div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span>{admin.admin}</span>
                        </h4>
                        <div
                          class="text-decoration-underline"
                          onClick={() => {
                            navigate("/admin");
                          }}
                        >
                          Lihat
                        </div>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-soft-success rounded fs-3">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAklEQVR4nO1aa4gcRRDu8x3fiq8oiC9EI74VQURFRFFEEVm8TPfeEh/nA6K5RLnsVC0D0Zj8Ec2fBAUV/aOIQhAfiAoRCYgIRgURNTkTfOahgtztVq2kpWZ64mZvbuZ2Zi+zQj5oOPa6auqb6uqqrh6l9mM//h/wGny5QQ400AYN/L0GmowGb9XIr3t+6w6l7JAaVOh6a4FBet8g26yhkddXAnukGjQYaN8gbz00FGiXRlpTxfatXtA8azSwh1fG7DwTNM8xPj9igHZEhGhKI78yXLcnq0HASJ0uiklo4Je85fa4tPmmwVdp4E0G6R/nnR9qgT1FlQ2N9EnkCX6hl7VvoHmmAfrMkXlLlYmqz1e45bQjz5oXTxikv0IyDb5SlQUDtMIReTa3DqSnXcw8o8qCBnpHjIi21PwbRRRf9KkqCxr4GzFiBOmCvDqqwdTpziO/qbKgkX8KiUDz7Lw6Fi+2hxqk3TIqY3aeKgMGeVu4LOqtBUX0xNt3LbDH9s+6XgxA/jok4tNleXVUAntInPGvC+xBqgxo4DdDI/zWXXl1RFtwGOyTqixopCfc9rui6K5lgD9XZcFD8opmZo3ccB5Z11/rejEC+AG3df6SWwfSRvcyXlRlwQB/5YiMFNBxtRSQGqkVBPYAVQY00O9hHvEnTyuiR0r/crdfoA1hiQJ0d14dw8HkqS5G/izt5KiBl7r1vcVDXtazPLZuj2PEIL+myoJZZo8wyF+4Q9WmXuU18KvRi6Cd1eWtc1WZqAT2eAPUlnHP4/ao2cpJYGugX6PqmS5RgwCD9LGLlftnKyNn+ryenPPEaIA31wJ7WNb80VF7cLwkqw1+UA0KKhV7oEb+0gX+G2Jo2nyNtNYR/zZr7j6Hh3RhGCvItjJuj0mbG53T6Y+kqtkTPV19sCrSpXNqfLKB2UQ08ERMQvJIZ/6oAlWmNfWAFv0nbYcimQEgUsXW+XFPTDowGumDuDrQrojcuzNJa0L9gT3JAL0rMiI750Q00kdZ5/iYRMdb32WQVsWnzi4i2zXQailOO+bPDRl5oxqJOx7O0urRgT06ae5eJHIOjbS9l9w1C9ihuGvYtbZJqtuk+RrpvcJEgJ/ri/kL663zakHzDPnbIA1H3ZCOhzV4dCZZaV7H1XNOEluTvN1bzvBbdxqgD8Vw6W3FCg3Syg63r83SpYFfzu8RWpWLgBhrkMcN8o8JSt+W2imsn5DXS2NbuiNJeqqN9s0GecwgP2+A/p7+pqmpfV4iTQnt2/kyV36bYQNYp5Ef1dC+aXYkkO4TwXRX02qZK8EX33kY4Ie6YyRzyfi8ZKbjQtpIJSCdvz0tn2xX75aaa8+bh/aNkum7s3KWnlrCXYnzTD4isjQkH/S4bqc0tK8PL3+QdspVXLfebI/Y+X0lYoCezB+I0fCwfVvPRICXTreFH8tFRGqZzuSWZ8gZPCngFwb2BA/42rCVBPxzglxTyIgXZMgRWjosCc+QCmBcNo8Zr+4Mcr2oN+Sic0Z392H71W5zSX9AH7KuAbo37RkG6eIw8xfweM0l4xQivKUokSrwNbM5IRbzOm1M7eAnJaBeR1r1G5UnPFGYCPBE6ff0siw6yUQJl1Ya4O8SjN6mgZ7qTMoim7m09hXC+0PgzfKNyqK6PVF+0w1+OGHjaMj/5GMEqXilYJSvKtQgofs84fntW6bHG1XSZAYScgzuJiINiSzBfwG3l9GNDPUfEwAAAABJRU5ErkJggg=="
                            alt="admin"
                            width={30}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6 mb-3">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Airport
                        </p>
                      </div>
                      <div class="flex-shrink-0"></div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span>{airports.length}</span>
                        </h4>
                        <div
                          class="text-decoration-underline"
                          onClick={() => {
                            navigate("/airport");
                          }}
                        >
                          Lihat
                        </div>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-soft-success rounded fs-3">
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVR4nO2Wz2sTQRTHpyho/YFSRUXxItpmp7YFBSkoiYcihbY2ET2ZUnRDLp7Emwr1Pygl7U6XKKlFpQQqpu4UpQfx0Evw5g9QyEEPlqrQZGd3UhF9smnSpsWkidkkDZ0vvMvuzNvvZ957u4uQUA0qNPEJrECbDaDp/vfdqJYBWhV2ACv6Q6zo/tbxuZ2oFlsoBUH0d5iwhESY2kyMNlRrM2BBSAp7jwmDpdDfWFU5rcKOXHv8M7BHfhFvQBtliE8G2cHVEAywwuJWVZpU1pJZJ0//bPVpPChTbvpocg4B1BX1IJeHQjFRNARhH1ZBEAbNowzOj7OYN8I/+mgSrJAp/y1THirKfLkBLOFh41AGokVl0PHIhL7IkumUcY0zH+Wqf2rRgf5HdgE4Aol9ue55Jo3Oi2EzcV1bMX71GYfOJ+Zb70so7W1lFwBW2C2JsBgm+pCksA5rYOXpxR6Z8pmVNknC5UkOZ8fMVCs5RhJdqFQ5PdrzwgG0qZyJAOokwiItqgEXHlttYv7JGPfR5I/+Ka6eChrLcyAR/QsKw5aSAc5d0o453VpyXfNuyq21+XK1DS7s7Z7g8Yzxvgj/JtOk72YY6ptH+NHsQZYU/S6ySy4PvbcegNOtDRR0IGPGYNeECe0PmNGo6vuz30hZp//rBDGP2AbQfiVc73LTWJ7Tj7n6X20vJJdE9N60yTvZ13Ew3pD1PXiK7Jazd7onD0B3oXkcgUQjVvSva/+F8PD8rmWAUaPTNuOZr26hsV4+1wBsxSOJa2uvHx+Cbene/2zL8JYLIKV//Q4A1KUBbttmvmwAOYSJzpsC5uFaBhhHdquyAPEzqJYByiIBUG2FRAtVWSFRgSorJCpQYc1G52EjBxIAUVEBqGgLeW+8Ljjs3jMrAKKiAlD1FpqtUHgFQFqiAlHRQlDSEAsJbTL9BWL+9/dNP1VKAAAAAElFTkSuQmCC"
                            alt="airport"
                            width={30}
                          />
                        </span>
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
