import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/css/styleku.css";
import Logo from "../assets/img-plane/siterbang.png";
import Banner from "../assets/img/undraw_connected_world_wuay.svg";
import { login } from "../redux/actions/auth";

function Login() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = `Login`;
    window.scrollTo(0, 0);
  }, []);

  const onSubmitted = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (password === "") {
      toast.error("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      setErrors([]);
      setIsLoading(true);
      login(data, setErrors).then(() => {
        const roles = localStorage.getItem("role");
        if (roles !== "ADMIN") {
          navigate("/");
        } else {
          navigate("/dashboard");
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
                      </div>
                      <form onSubmit={(e) => onSubmitted(e)}>
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
                          <h6 className="err">{errors}</h6>
                          {/* {errors.length > 0 && (
                            <div
                              className="alert alert-danger mx-0"
                              style={{ maxWidth: "350px", marginLeft: "10px" }}
                            >
                              <ul className="m-0">
                                {errors &&
                                  errors.map((error, index) => (
                                    <li key={index}>{error.message}</li>
                                  ))}
                              </ul>
                            </div>
                          )} */}
                        </div>
                        <div className="mt-2 d-flex justify-content-end text-forgot">
                          <p
                            onClick={() => {
                              navigate("/reset");
                            }}
                          >
                            Forgot Password
                          </p>
                        </div>
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
                              Login
                            </button>
                          )}
                        </div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            class="btn-create"
                            onClick={() => {
                              navigate("/register");
                            }}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2 card-phone text-center">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4 real">
                      <h4 className="text-center">The Choice is Yours</h4>
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

export default Login;
