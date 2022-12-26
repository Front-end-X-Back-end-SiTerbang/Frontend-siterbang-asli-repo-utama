import React, { useEffect } from "react";
import "../assets/css/mybooking.css";
import airplane from "../assets/img/airplane.svg";
import { useDispatch, useSelector } from "react-redux";
// import { getDetailUser } from "../redux/actions/user";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../component/Navbar2";
// import Footer from "../components/Footer";
import { getMyBooking } from "../redux/actions/transaksiActions";

export default function MyBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myBooking = useSelector((state) => {
    return state.myBooking;
  });

  useEffect(() => {
    dispatch(getMyBooking(navigate));
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar />

      <div class="container mt-5 mb-5">
        <h5>MY BOOKING</h5>
        <div class="d-flex justify-content-center row">
          {myBooking.data.map((item, index) => {
            return (
              <div class="col-md-10" key={index}>
                <div class="row p-2 bg-white border rounded mt-2">
                  <div class="col-md-3 mt-1">
                    <img
                      class="img-fluid img-responsive rounded product-image"
                      src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"
                    />
                  </div>
                  <div class="col-md-6 mt-1 ">
                    <div class="d-flex flex-row">
                      <h5>{item.product.origin.city}</h5>{" "}
                      <h5>({item.product.origin.iata_code})</h5>
                      <img src={airplane} alt="" class="mx-3" />
                      <h5>{item.product.destination.city}</h5>{" "}
                      <h5>({item.product.destination.iata_code})</h5>
                    </div>
                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/color/48/null/airport-building.png" />
                      <p class="mt-3">{item.product.origin.name}</p>
                    </div>
                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/fluency/48/null/airport-building.png" />
                      <p class="mt-3">{item.product.destination.name}</p>
                    </div>

                    <div class="d-flex flex-row">
                      <img src="https://img.icons8.com/color/48/null/airplane-take-off--v1.png" />
                      <p class="mt-2"> {item.product.airline.name}</p>
                    </div>

                    <div class="mt-1 mb-1 spec-1"></div>
                  </div>
                  <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                      <h4 class="mr-1">Rp.{item.total_order}</h4>
                    </div>
                    <h6 class="text-success">{item.product.type}</h6>
                    <p class="mt-2">{item.product.flight_date}</p>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        LUNAS
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick={() => {
                          navigate(`/detailpesanan/${item.id}`);
                        }}
                      >
                        Detail Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div class="col-md-10">
            <div class="row p-2 bg-white border rounded mt-2">
                <div class="col-md-3 mt-1">
                    <img class="img-fluid img-responsive rounded product-image" src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"/>
                    </div>
                <div class="col-md-6 mt-1">
                    <h5>Quant olap shirts</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"> <span>100% cotton</span> </div>
                    <div class="mt-1 mb-1 spec-1"><span class="dot"></span> <span>For men</span><span class="dot"></span><span>Casual</span></div>
                    <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">$13.99</h4><span class="strike-text">$20.99</span>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                </div>
            </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
