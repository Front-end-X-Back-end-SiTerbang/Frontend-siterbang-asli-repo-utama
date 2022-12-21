import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reset } from "../redux/actions/auth";
import Swal from "sweetalert2";
import Logo from "../assets/img/undraw_Aircraft_re_m05i.png";
import Banner from "../assets/img/undraw_connected_world_wuay.svg";
import "../assets/css/styleku.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirm_new_password: "",
  });
  useEffect(() => {
    document.title = `Reset Password`;
    window.scrollTo(0, 0);
  }, []);
  const { token } = useParams();

  const onSubmitted = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    if (form.password === form.confirm_new_password) {
      reset(token, form, setErrors).then((res) => {
        if (res === true) {
          Swal.fire({
            title: "Success",
            text: "you success to reset password, now you can login",
            icon: "success",
          });
          return navigate("/login");
        }
        console.log(res);
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "password and confirm password are different",
        icon: "error",
      });
    }

    setIsLoading(false);
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
                            type="password"
                            id="new_password"
                            name="new_password"
                            class="form-control input-login"
                            placeholder="New Password"
                            onChange={(e) =>
                              setForm({ ...form, password: e.target.value })
                            }
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="confirm_new_password"
                            name="confirm_new_password"
                            class="form-control input-login"
                            placeholder="Confirm New Password"
                            onChange={(e) =>
                              setForm({
                                ...form,
                                confirm_new_password: e.target.value,
                              })
                            }
                          />
                        </div>
                        {errors.length > 0 && (
                          <div
                            className="alert alert-danger mx-50"
                            style={{ maxWidth: "350px", marginLeft: "10px" }}
                          >
                            <ul className="m-0">
                              {errors.map((error, index) => (
                                <li key={index}>{error.msg}</li>
                              ))}
                            </ul>
                          </div>
                        )}
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
                              Sign In
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
