import React, { useEffect, useState } from "react";
import Logo from "../assets/img/undraw_Aircraft_re_m05i.png";
import Banner from "../assets/img/undraw_connected_world_wuay.svg";
import "../assets/css/styleku.css";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");

  useEffect(() => {
    document.title = `Register`;
    window.scrollTo(0, 0);
  }, []);
  const onSubmitted = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Nama is required");
      return;
    }
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (password === "") {
      toast.error("Password is required");
      return;
    }
    if (confirm_password === "") {
      toast.error("Confirm Password is required");
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
        name,
        confirm_password,
      };
      setErrors([]);
      setIsLoading(true);
      register(data, setErrors).then((res) => {
        if (res === true) {
          Swal.fire({
            title: "Register Success",
            text: "Please check your email to activate your account",
            icon: "success",
          });
          return navigate("/login");
        }
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black card-phone-xs">
                <div class="row g-0">
                  <div class="col-lg-6 card-phone-xs">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img src={Logo} width="185" alt="logo" />
                        <h4 class="mt-1 mb-5 pb-1 siTerbang">SiTerbang</h4>
                      </div>

                      <form onSubmit={(e) => onSubmitted(e)}>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control input-login"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control input-login"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control input-login"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            class="form-control input-login"
                            placeholder="confirm password"
                            onChange={(e) =>
                              setconfirm_password(e.target.value)
                            }
                          />
                        </div>
                        <h6 className="err">{errors}</h6>
                        <div class="text-center pt-1 mb-5 pb-1 ">
                          {isLoading ? (
                            <button
                              className="btn btn-success btn-lg ms-2"
                              type="button"
                              disabled
                            >
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}
                              Loading...
                            </button>
                          ) : (
                            <button type="submit" className="btn-login">
                              Register
                            </button>
                          )}
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Have already an account?</p>
                          <button
                            type="button"
                            class="btn-create"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2 card-phone">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4 real">
                      <h4>Ramah Di kantong, Memudahkan anda</h4>
                      <p>
                        <img src={Banner} alt="" width={400} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
