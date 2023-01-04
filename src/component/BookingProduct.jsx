import React, { useEffect, useState } from "react";
import LogoTerbang from "../assets/admin-img/undraw_aircraft_re_m05i.svg";
import Navbar from "./Navbar2";
import "../assets/css/styleku.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/actions/product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createTransaksi } from "../redux/actions/transaksiActions";
import Swal from "sweetalert2";
import Footer from "./Footer";

<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  ></link>
</head>;

function DetailProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPassagerForm, setTotalPassagerForm] = useState(0);
  const [error, setError] = useState([]);
  const { id } = useParams();
  //form Contact Person Details
  const [total_passenger, settotal_passenger] = useState(1);
  const [passengers, setPassengers] = useState([]);
  const product_id = id;

  const detailproduct = useSelector((state) => {
    return state.detailByProduct.data;
  });
  const detailOrigin = useSelector((state) => {
    return state.detailByProduct.data.origin;
  });
  const detailDestination = useSelector((state) => {
    return state.detailByProduct.data.destination;
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (total_passenger === "") {
      toast.error("Jumlah Passenger is required");
      return;
    }
    if (total_passenger !== "") {
      setTotalPassagerForm(Number(total_passenger));
    }
  };

  const passengerSubmit = async (e) => {
    e.preventDefault();

    const body = {
      product_id,
      total_passenger,
      passengers,
    };
    console.log(body);
    const createTransaksiStatus = await createTransaksi(body, setError);

    Swal.fire({
      title: "Anda Yakin Memboking Tiket?",
      icon: "Peringatan",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        const audio = new Audio(
          "https://drive.google.com/file/d/1qOsGT43XRXuMfiVHRe_muSAT2KbPD42D/view?usp=share_link"
        );
        audio.play();
        Swal.fire(
          {
            icon: "success",
          },
          createTransaksiStatus
        );

        return navigate("/mybooking");
      }
    });
  };

  const handlePassengersForm = (dataset, value, i) => {
    const newPassengers = passengers.map((passenger, index) => {
      if (index === i) {
        return {
          ...passenger,
          [dataset]: value,
        };
      }
      return passenger;
    });
    setPassengers(newPassengers);
  };

  useEffect(() => {
    const newPassengers = [];
    for (let i = 0; i < totalPassagerForm; i++) {
      const passenger = {
        nik: "",
        passenger_name: "",
        passenger_phone: "",
      };
      newPassengers.push(passenger);
    }
    setPassengers(newPassengers);
  }, [totalPassagerForm]);

  useEffect(() => {
    dispatch(getDetailProduct(id, navigate));
  }, [dispatch, id, navigate, detailproduct, detailDestination, detailOrigin]);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  function convertNumberToTime(number) {
    // Tentukan apakah nilai angka merupakan jam, menit, atau detik
    const hours = Math.floor(number);
    const minutes = Math.round((number - hours) * 60);

    // Format jam menjadi HH jam MM menit
    let time = "";
    if (hours > 0) {
      time += `${hours} jam `;
    }
    if (minutes > 0) {
      time += `${minutes} menit`;
    }

    return time;
  }

  return (
    <React.Fragment>
      <Navbar />
      <div class="container-xl px-4 mt-4">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <h4 className="mb-4 mt-2 text-center">Pessengers</h4>
              <div class="card-body">
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
              passengers.length > 0 &&
              Array.from(Array(totalPassagerForm).keys()).map((i) => (
                <div class="card mb-4" key={i}>
                  <div class="card-body">
                    <form
                      onSubmit={(e) => passengerSubmit(e)}
                      id="passengerForm"
                    >
                      <div class="row g-3">
                        <div class="col-lg-12">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="firstnamefloatingInput"
                              placeholder="Enter your firstname"
                              value={passengers[i]?.passenger_name}
                              onChange={(e) =>
                                handlePassengersForm(
                                  "passenger_name",
                                  e.target.value,
                                  i
                                )
                              }
                            />
                            <label for="firstnamefloatingInput">Name</label>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="passwordfloatingInput1"
                              placeholder="nik"
                              value={passengers[i]?.passenger_phone}
                              onChange={(e) =>
                                handlePassengersForm(
                                  "passenger_phone",
                                  e.target.value,
                                  i
                                )
                              }
                            />
                            <label for="passwordfloatingInput1">Nomor HP</label>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="zipfloatingInput"
                              placeholder="Enter your zipcode"
                              value={passengers[i]?.nik}
                              onChange={(e) =>
                                handlePassengersForm("nik", e.target.value, i)
                              }
                            />
                            <label for="NIK">KTP</label>
                          </div>
                        </div>

                        <div class="col-lg-12"></div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}

            <div class="card mb-3">
              <h4 className="mt-2 text-center">Payment</h4>
              <div className="">
                <div class="container py-3">
                  <div class="col-lg-12 mx-auto">
                    <div class="bg-white rounded-lg">
                      <img
                        class="img-fluid"
                        src="https://img.icons8.com/color/48/000000/visa.png"
                        alt=""
                      />
                      <img
                        class="img-fluid"
                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                        alt=""
                      />

                      <div class="tab-content">
                        <div
                          id="nav-tab-card"
                          class="tab-pane fade show active"
                        >
                          <form role="form">
                            <div class="form-group">
                              <label for="username">
                                Full name (on the card)
                              </label>
                              <input
                                type="text"
                                name="username"
                                placeholder="Your Name"
                                required
                                class="form-control"
                              />
                            </div>
                            <div class="form-group">
                              <label for="cardNumber">Card number</label>
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="cardNumber"
                                  placeholder="Your card number"
                                  class="form-control"
                                  required
                                />
                                <span class="input-group-text text-muted">
                                  <i class="fa fa-cc-paypal mx-1"></i>
                                  <i class="fa fa-cc-amex mx-1"></i>
                                  <i class="fa fa-cc-mastercard mx-1"></i>
                                </span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-8">
                                <div class="form-group">
                                  <label>
                                    <span class="hidden-xs">Expiration</span>
                                  </label>
                                  <div class="input-group">
                                    <input
                                      type="number"
                                      placeholder="MM"
                                      name=""
                                      class="form-control"
                                      required
                                    />
                                    <input
                                      type="number"
                                      placeholder="YY"
                                      name=""
                                      class="form-control"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div class="form-group mb-4">
                                  <label
                                    data-toggle="tooltip"
                                    title="Three-digits code on the back of your card"
                                  >
                                    CVV
                                    <i class="fa fa-question-circle"></i>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    class="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    {detailOrigin?.city} <span>🛫</span>
                    {detailDestination?.city}
                  </h5>
                </div>
                <h6 className="font-monospace mt-3">
                  <div className="text-center">
                    <strong>
                      {convertNumberToTime(detailproduct.estimation)}
                    </strong>
                  </div>
                </h6>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs 12 d-flex"></div>
                  <div className="text-center mt-3">
                    <h5>{detailproduct.type}</h5>
                  </div>
                  <hr className="mt-5" />
                </div>

                <div className="d-flex">
                  <h5>Total Payment</h5>
                  <div className="ms-auto">
                    {rupiah(detailproduct.price * total_passenger)}
                  </div>
                </div>
                <hr className="mt-2" />
                <div class="text-end" className="mb-2 mt-2 text-center">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    form="passengerForm"
                  >
                    Booking
                  </button>
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
                  <ul>
                    <li>
                      <strong>Menerima Refound</strong>
                    </li>
                    <li>
                      <strong>Aman Terpercaya</strong>
                    </li>
                    <li>
                      <strong>Ramah Dikantong</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default DetailProduct;
