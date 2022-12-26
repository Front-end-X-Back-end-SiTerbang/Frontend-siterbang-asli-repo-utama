import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar2";
import Footer from "../component/Footer";
import Logo from "../assets/img-plane/Dayss.png";
import Logo1 from "../assets/img-plane/Day1.png";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import "../assets/css/home.css";
import { useParams } from "react-router-dom";
import { getDetailTicket } from "../redux/actions/transaksiActions";
import axios from "axios";

function DetailTicketPesanan() {
  const dispatch = useDispatch();
  const [data, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/transactions/${id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setDatas(response.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getDetailTicket(id));
  }, [dispatch, id]);

  // handle table
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <Navbar />
      {/* handle detail pemesanan ticket */}
      <div className="container-fluid bg-light mt-5">
        <div className="container mt-2">
          <div class="card ribbon-box border shadow-none mb-lg-0 mt-5">
            <div class="card-body">
              <div className="d-flex justify-content-end">
                <div className="col">
                  <img
                    src={Logo}
                    alt=""
                    width="180"
                    className="brand-pesanan"
                  />
                </div>
                <img src={Logo1} alt="" width="180" className="brand-pesanan" />
              </div>
              {/* content */}
              <div className="mt-5 py-3">
                <div className="container">
                  <div className="card-body bg-pesanan">
                    <div className="text-center">
                      <h4>{data.product.type}</h4>
                      <hr />
                    </div>

                    <div className="row ms-5">
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        {/* <h4>{detailPesanan.product.terminal}</h4> */}
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        {/* <h4>{detailPesanan.product.code}</h4> */}
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        {/* <h4>{detailPesanan.total_passenger}</h4> */}
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        <h4>
                          {
                            convertNumberToTime()
                            // detailPesanan.product.estimation
                          }
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="ms-5 mt-3">
                    <strong>*Note</strong>
                    <ul>
                      <li>ahhah</li>
                      <li>ahhah</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 ms-5 mb-5">
              <h4>Detail Penumpang</h4>
              <Table
                pagination={{
                  current: pagination.current,
                  pageSize: pagination.pageSize,
                  onChange: (page) =>
                    setPagination({ ...pagination, current: page }),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default DetailTicketPesanan;
