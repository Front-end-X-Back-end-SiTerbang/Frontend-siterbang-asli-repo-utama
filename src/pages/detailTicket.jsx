import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar2";
import Footer from "../component/Footer";
import { Space, Spin } from "antd";
import Logo from "../assets/img-plane/Dayss.png";
import Logo1 from "../assets/img-plane/Day1.png";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/home.css";
import { useParams } from "react-router-dom";
import { getDetailTicket } from "../redux/actions/transaksiActions";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import axios from "axios";

function DetailTicketPesanan() {
  const dispatch = useDispatch();
  const [data, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const detailPesanan = useSelector((state) => {
    return state.detailPesanan.data.booking_details;
  });

  console.log(detailPesanan);

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
    return (
      <div className="container">
        <div className="text-center">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Space>
              <Spin size="large">
                <div className="content" />
              </Spin>
            </Space>
          </Space>
        </div>
      </div>
    );
  }

  // hanlde format RP
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleDownload = () => {
    // Ambil element dengan id "my-element"
    const element = document.getElementById("bg-ticket");

    // Ubah element ke canvas
    html2canvas(element).then((canvas) => {
      // Buat file image dan simpan ke komputer pengguna
      canvas.toBlob((blob) => {
        saveAs(blob, "my-image.png");
      });
    });
  };

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
                <div className="container text-white">
                  <div id="bg-ticket" className="card-body bg-pesanan">
                    <div className="text-center bg-eco text-white mt-5">
                      <h4>
                        {data.product.type} | {data.product.gate}
                      </h4>
                    </div>
                    <div className="row text-center mt-3 py-2">
                      <div className="col-lg-4 col-sm-6 col-xs-12 ticket-fontsy">
                        <span>
                          <h1>Kode</h1>
                        </span>
                        <h1>{data.product.code}</h1>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-xs-12 ticket-fontsy">
                        <span>
                          <h1>terminal</h1>
                        </span>
                        <h1>{data.product.terminal}</h1>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-xs-12 ticket-fontsy">
                        <span>
                          <h1>perjalanan</h1>
                        </span>
                        <h1>{convertNumberToTime(data.product.estimation)}</h1>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-xs-12 ticket-fontsy">
                        <span>
                          <h1>penumpang</h1>
                        </span>
                        <h1>{data.total_passenger}</h1>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-xs-12 ">
                        <h1>
                          {data.is_paid ? (
                            <h1 className="text-success">Lunas</h1>
                          ) : (
                            "tidak lunas"
                          )}
                        </h1>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-xs-12 ticket-fontsy">
                        <span>
                          <h1>harga</h1>
                        </span>
                        <h1>{rupiah(data.total_order)}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="ms-5 mt-3 text-dark notes-siterbang">
                    <strong>*Note</strong>
                    <ul>
                      <li>Tidak Boleh Membawa Senjata Tajam di atas pesawat</li>
                      <li>Dilarang Membawa Narkoba</li>
                      <li>Dilarang Menyalakan HP saat di atas pesawat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-5">
              <h4 className="detail-penumpang">Detail Penumpang</h4>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead className=" table-pesanan">
                    <tr>
                      <th>No</th>
                      <th>NIK</th>
                      <th>Nomor Kursi</th>
                      <th>Nama Lengkap</th>
                      <th>Nomor Telepon</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {detailPesanan.map((item, index) => (
                      <tr>
                        <td key={item.id}>{index + 1}</td>
                        <td key={index}>{item.nik}</td>
                        <td key={index}>{item.seat_number}</td>
                        <td key={index}>{item.passenger_name}</td>
                        <td key={index}>{item.passenger_phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center">
                <button className="btn btn-success" onClick={handleDownload}>
                  Download Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default DetailTicketPesanan;
