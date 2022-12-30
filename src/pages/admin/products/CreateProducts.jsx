import React from "react";
import { useNavigate } from "react-router-dom";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import Logo from "../../../assets/img-plane/siterbang.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { createproductions } from "../../../redux/actions/productionActions";
import { Select } from "antd";
import { useSelector } from "react-redux";

function CreateProductionss() {
  const navigate = useNavigate();
  const [origin_id, setOrigin_id] = useState("");
  const [destination_id, setDestination_id] = useState("");
  const [price, setPrice] = useState("");
  const [transit_total, setTransit_total] = useState("");
  const [flight_date, setFlight_date] = useState("");
  const [depature_hours, setDepature_hours] = useState("");
  const [airplane_id, setAirplane_id] = useState("");
  const [airline_id, setAirline_id] = useState("");
  const [code, setCode] = useState("");
  const [estimation, setEstimation] = useState("");
  const [terminal, setTerminal] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState([]);

  const Airplanes = useSelector((state) => {
    return state.listAirplanes.data;
  });

  const Maskapai = useSelector((state) => {
    return state.listAirline.result;
  });

  const onChangeAirplanesId = (value) => {
    setAirplane_id(value);
  };

  const onChangeAirlineId = (value) => {
    setAirline_id(value);
  };

  const options = [];
  Airplanes &&
    Airplanes.map((item) => {
      return options.push({
        label: `${item.name}`,
        value: `${item.id}`,
      });
    });

  const optionsGetAirlineId = [];
  Maskapai &&
    Maskapai.map((item) => {
      return optionsGetAirlineId.push({
        label: `${item.name}`,
        value: `${item.id}`,
      });
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (origin_id === "") {
      toast.error("oirigin is required");
      return;
    }
    if (destination_id === "") {
      toast.error("destination is required");
      return;
    }
    if (price === "") {
      toast.error("price is required");
      return;
    }
    if (transit_total === "") {
      toast.error("transit is required");
      return;
    }
    if (flight_date === "") {
      toast.error("tanggal penerbangan is required");
      return;
    }
    if (depature_hours === "") {
      toast.error("depature_hours is required");
      return;
    }
    if (airplane_id === "") {
      toast.error("airplane is required");
      return;
    }
    if (estimation === "") {
      toast.error("estimation is required");
      return;
    }
    if (type === "") {
      toast.error("type is required");
      return;
    }
    if (origin_id !== "" && destination_id !== "") {
      const body = {
        origin_id,
        destination_id,
        price,
        transit_total,
        flight_date,
        depature_hours,
        airplane_id,
        airline_id,
        code,
        estimation,
        terminal,
        type,
        stock,
      };
      const createProductionTouser = await createproductions(body, setError);
      if (createProductionTouser) {
        toast.success("Berhasil Menambah Data Users");
        return navigate("/admin");
      }
    }
  };

  const validateCodePenerbangan = (coders) => {
    const regex = /^(?=.*\d)[A-Z]{4,5}$/;
    if (!regex.test(coders)) {
      if (coders.length < 4) {
        setError("Kode Minimal 4 Karakter");
      } else {
        if (coders.length > 5) {
          setError("Kode Maksimal 5 Karakter");
        } else {
          if (!/[A-Z]/.test(coders)) {
            setError("Kode Harus Huruf Besar Semua");
          } else {
            if (!/\d/.test(coders)) {
              setError("Kode Harus Memiliki Angka");
            }
          }
        }
      }
      return false;
    }
    return true;
  };

  const HandleCodePenerbangan = (e) => {
    const inputCode = e.target.value;

    const isValid = validateCodePenerbangan(inputCode);
    setCode(inputCode);

    if (!isValid) {
      return;
    }
    setError("");
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
                navigate("/productions");
              }}
            >
              <i class="fal fa-shopping-cart bear"></i> Productions
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
                <div className="card-title text-center">Tambahkan User</div>
                <div className="ms-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/productions");
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
                      <label className="form-label">Origin</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name="name"
                        placeholder="Jakarta"
                        onChange={(e) => setOrigin_id(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Destination</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        placeholder="Destination"
                        onChange={(e) => setDestination_id(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Price</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name="airline"
                        placeholder="500000"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Transit</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name="airline"
                        placeholder="2"
                        onChange={(e) => setTransit_total(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Flight Date</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Alamat"
                        onChange={(e) => setFlight_date(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">
                        Flight Depature Hours
                      </label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="20:45"
                        onChange={(e) => setDepature_hours(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Airplanes</label>
                    </div>
                    <div className="col-lg-9">
                      <Select
                        showSearch
                        placeholder="Pilih Nama Maskapai"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        onChange={onChangeAirplanesId}
                        options={options}
                        listHeight={500}
                        style={{ width: 730 }}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Airline</label>
                    </div>
                    <div className="col-lg-9">
                      <Select
                        showSearch
                        placeholder="Pilih Nama Pesawat"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                          (optionA?.label ?? "")
                            .toLowerCase()
                            .localeCompare((optionB?.label ?? "").toLowerCase())
                        }
                        onChange={onChangeAirlineId}
                        options={optionsGetAirlineId}
                        listHeight={500}
                        style={{ width: 730 }}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Estimation</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="2.5"
                        onChange={(e) =>
                          setEstimation(e.target.value.toUpperCase())
                        }
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Code</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="BH56"
                        onChange={HandleCodePenerbangan}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Terminal</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Terminal"
                        onChange={(e) =>
                          setTerminal(e.target.value.toUpperCase())
                        }
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">type</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="First Class"
                        onChange={(e) => setType(e.target.value.toUpperCase())}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Stock Ticket</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name="airline"
                        placeholder="5000"
                        onChange={(e) => setType(e.target.value)}
                      />
                      <h6 class="err">{error}</h6>
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

export default CreateProductionss;
