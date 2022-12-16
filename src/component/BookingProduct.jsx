import React, { useEffect, useState } from "react";
import LogoTerbang from "../assets/admin-img/undraw_aircraft_re_m05i.svg";
import Navbar from "./Navbar2";
import "../assets/css/styleku.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/actions/product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createTransaksi } from "../redux/actions/transaksiActions";

function DetailProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total_passenger, settotal_passenger] = useState("");
  const [totalPassagerForm, setTotalPassagerForm] = useState(0);
  const [error, setError] = useState([]);
  const { id } = useParams();
  const detailproduct = useSelector((state) => {
    return state.detailByProduct.data;
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (total_passenger === "") {
      toast.error("Jumlah Passenger is required");
      return;
    }
    if (total_passenger !== "") {
      // const body = {
      //   id,
      //   total_passenger,
      // };
      // const createTransaksiStatus = await createTransaksi(body, setError);
      // if (createTransaksiStatus) {
      //   toast.success("Success");
      // }
      setTotalPassagerForm(Number(total_passenger));
    }
  };

  useEffect(() => {
    dispatch(getDetailProduct(id, navigate));
  }, [dispatch, id, navigate]);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div class="container-xl px-4 mt-4">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <h4 className="mb-4 mt-2 text-center">Pessengers</h4>
              <div class="card-body">
                {/* card passenger */}
                <form onSubmit={(e) => onSubmit(e)}>
                  <label className="form-label">Jumlah Passenger</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => settotal_passenger(e.target.value)}
                  />
                  <h6 className="text-danger">{error}</h6>
                  <div className="d-grid g-2 mt-3">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {totalPassagerForm > 0 &&
              Array.from(Array(totalPassagerForm).keys()).map((i) => (
                <div class="card mb-4" key={i}>
                  {/*  */}
                  <div class="card-body">
                    <form action="#">
                      <div class="row g-3">
                        <div class="col-lg-6">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="firstnamefloatingInput"
                              placeholder="Enter your firstname"
                            />
                            <label for="firstnamefloatingInput">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="lastnamefloatingInput"
                              placeholder="Enter your Lastname"
                            />
                            <label for="lastnamefloatingInput">Last Name</label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="date"
                              class="form-control"
                              id="emailfloatingInput"
                              placeholder="Enter your email"
                            />
                            <label for="emailfloatingInput">
                              Tanggal Lahir
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="passwordfloatingInput"
                              placeholder="Enter your password"
                            />
                            <label for="passwordfloatingInput">
                              Kewarganegaraan
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="passwordfloatingInput1"
                              placeholder="Confirm password"
                            />
                            <label for="passwordfloatingInput1">
                              Nomor Paspor
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="cityfloatingInput"
                              placeholder="Enter your nomor hp"
                            />
                            <label for="zipfloatingInput">
                              Negara Penerbit
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="zipfloatingInput"
                              placeholder="Enter your zipcode"
                            />
                            <label for="cityfloatingInput">Nomor Hp</label>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-floating">
                            <input
                              type="email"
                              class="form-control"
                              id="zipfloatingInput"
                              placeholder="Enter your zipcode"
                            />
                            <label for="zipfloatingInput">Email</label>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="text-end">
                            <button type="submit" class="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}
          </div>
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body">
                <div className="text-center">
                  <img
                    src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"
                    alt="Garuda"
                    className="img-fluid"
                    width="200"
                  />
                  <h5>
                    {detailproduct?.origin.city} <span>===========</span>
                    {detailproduct?.destination.city}
                  </h5>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs 12 d-flex">
                    <h6 className="font-monospace mt-3 ms-auto">
                      {detailproduct?.flight_date}
                    </h6>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs 12 d-flex">
                    <h6 className="font-monospace mt-3">
                      {detailproduct?.depature_hours}
                    </h6>
                  </div>
                  <div className="text-center mt-3">
                    <h5>{detailproduct?.type}</h5>
                  </div>
                  <hr className="mt-5" />
                </div>

                <div className="d-flex">
                  <h5>Total Payment</h5>
                  <div className="ms-auto">{rupiah(detailproduct?.price)}</div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <div className="text-center mt-2">
                  <img
                    src={LogoTerbang}
                    alt=""
                    width="200"
                    className="img-fluid"
                  />
                </div>
                <div className="mt-5">
                  <ul id="refund">
                    <li>Menerima Refound</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DetailProduct;
