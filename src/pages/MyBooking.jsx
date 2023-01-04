import React, { useEffect, useState } from "react";
import "../assets/css/mybooking.css";
import airplane from "../assets/img/airplane.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar2";
import {
  getMyBooking,
  deleteTransaksi,
} from "../redux/actions/transaksiActions";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import Footer from "../component/Footer";
import Swal from "sweetalert2";

export default function MyBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/my-transactions`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setItems(res.data.data);
    };

    fetchItems();
  }, []);

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePageChange(event) {
    setCurrentPage(Number(event.target.text));
  }

  useEffect(() => {
    dispatch(getMyBooking(navigate));
  }, [dispatch, navigate]);

  const onDelete = (id) => {
    Swal.fire({
      title: "Anda Yakin Ingin Mengcancel Ticket ?",
      icon: "Peringatan",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTransaksi(id)
          .then((response) => {
            Swal.fire({
              title: "Cancel Success",
              icon: "success",
            });
            dispatch(getMyBooking());
          })
          .catch((err) => {
            Swal.fire({
              title: "Cancel failed!",
              icon: "error",
            });
          });

        navigate("/");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div class="container mt-5 mb-5">
        <h5>MY BOOKING</h5>
        <div class="d-flex justify-content-center row">
          {currentItems.map((item, index) => {
            return (
              <div class="col-md-10" key={index}>
                <div class="row p-2 bg-white border rounded mt-2">
                  <div class="col-md-3 mt-1">
                    <img
                      class="img-fluid img-responsive rounded product-image"
                      src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"
                      alt=""
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
                      <img
                        src="https://img.icons8.com/color/48/null/airport-building.png"
                        alt=""
                      />
                      <p class="mt-3">{item.product.origin.name}</p>
                    </div>
                    <div class="d-flex flex-row">
                      <img
                        src="https://img.icons8.com/color/48/null/airport-building.png"
                        alt=""
                      />
                      <p class="mt-3">{item.product.destination.name}</p>
                    </div>

                    <div class="d-flex flex-row">
                      <img
                        src="https://img.icons8.com/color/48/null/airplane-take-off--v1.png"
                        alt=""
                      />
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
                      <button
                        class="btn btn-outline-danger btn-sm mt-2"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          onDelete(item.id);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
              />
              <Pagination.Item
                active={currentPage === 1}
                onClick={handlePageChange}
              >
                1
              </Pagination.Item>
              <Pagination.Item
                active={currentPage === 2}
                onClick={handlePageChange}
              >
                2
              </Pagination.Item>
              <Pagination.Item
                active={currentPage === 3}
                onClick={handlePageChange}
              >
                3
              </Pagination.Item>
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </Pagination>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
