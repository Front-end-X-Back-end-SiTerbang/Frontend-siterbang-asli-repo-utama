import React from "react";
import { useNavigate } from "react-router-dom";
import LogoAdmin from "../../../assets/admin-img/undraw_metrics_re_6g90.svg";
import Logo from "../../../assets/img-plane/siterbang.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../redux/actions/auth";

function CreateUsers() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [is_verified, setis_verified] = useState(true);
  const [error, setError] = useState([]);

  const validatePassword = (password) => {
    // Regex untuk password yang harus memiliki:
    // - Setidaknya 8 karakter
    // - Setidaknya 1 huruf kecil
    // - Setidaknya 1 huruf besar
    // - Setidaknya 1 angka
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(password)) {
      // cek apakah password kurang dari 8
      if (password.length < 8) {
        setError("Password Minimal 8 Karakter");
      } else {
        // cek apakah password tidak memiliki huruf kecil
        if (!/[a-z]/.test(password)) {
          setError("Password harus memiliki huruf kecil");
        } else {
          // cek apakah password tidak memiliki huruf besar
          if (!/[A-Z]/.test(password)) {
            setError("Password harus memiliki huruf besar");
          } else {
            // cek apakah password tidak memiliki angka
            if (!/\d/.test(password)) {
              setError("Password harus memiliki angka");
            }
          }
        }
      }
      return false;
    }
    return true;
  };

  const handleChangePassword = (e) => {
    // ambil nilai dari password yang ingin kita masukan
    const inputPassword = e.target.value;
    // validasi password menggunakan regex yang kita buat
    const isValid = validatePassword(inputPassword);
    setPassword(inputPassword);

    if (!isValid) {
      return;
    }
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Nama is required");
      return;
    }
    if (email === "") {
      toast.error("email is required");
      return;
    }
    if (password === "") {
      toast.error("password is required");
      return;
    }
    if (confirm_password === "") {
      toast.error("Konfirmasi Password is required");
      return;
    }
    if (phone === "") {
      toast.error("phone is required");
      return;
    }
    if (address === "") {
      toast.error("address is required");
      return;
    }
    if (gender === "") {
      toast.error("gender is required");
      return;
    }
    if (role === "") {
      toast.error("role is required");
      return;
    }
    if (is_verified === "") {
      toast.error("is_verified is required");
      return;
    }
    if (name !== "" && email !== "") {
      const body = {
        name,
        email,
        password,
        confirm_password,
        phone,
        address,
        gender,
        role,
        is_verified,
      };
      const createUserToAdmin = await register(body, setError);
      if (createUserToAdmin) {
        toast.success("Berhasil Menambah Data Users");
        return navigate("/admin");
      }
    }
  };

  const handleChangeBoolean = (e) => {
    const selectedValue = e.target.value;
    // Konversi nilai tersebut menjadi boolean
    const booleanValue = Boolean(selectedValue);
    // Set nilai baru ke dalam state
    setis_verified(booleanValue);
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
                      navigate("/admin");
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
                      <label className="form-label">Nama Lengkap</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Masukkan Nama "
                        onChange={(e) => setName(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Email</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="email"
                        className="form-control"
                        name=""
                        placeholder="Masukkan Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Password</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="password"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Password"
                        onChange={handleChangePassword}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Konfirmasi Password</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="password"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Konfirmasi Password"
                        onChange={(e) => setConfirm_password(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Alamat</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Alamat"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nomor Telepon</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="number"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Nomor Telepon"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Jenis Kelamin</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Jenis Kelamin"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Hak Akses</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Hak Akses"
                        onChange={(e) => setRole(e.target.value.toUpperCase())}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Verifikasi</label>
                    </div>
                    <div className="col-lg-9">
                      <select
                        class="form-select"
                        value={is_verified}
                        id="select-true-false"
                        onChange={handleChangeBoolean}
                      >
                        <option selected>Verifikasi</option>
                        <option value="true">Acc</option>
                        <option value="false">Reject</option>
                      </select>
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

export default CreateUsers;
