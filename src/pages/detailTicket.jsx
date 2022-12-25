import React from "react";
import Navbar from "../component/Navbar2";
import Footer from "../component/Footer";
import Logo from "../assets/img-plane/Dayss.png";
import Logo1 from "../assets/img-plane/Day1.png";

import "../assets/css/home.css";
import { Table } from "antd";

function detailTicket() {
  // handle table
  const columns = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
  ];

  const data = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
      ],
    },
  ];
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
                      <h4>GARUDA | EDYCYC6</h4>
                      <hr />
                    </div>

                    <div className="row ms-5">
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        <h4>KODE BOOKING</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        <h4>KODE BOOKING</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        <h4>KODE BOOKING</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12 ">
                        <h4>KODE BOOKING</h4>
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
              <Table columns={data} dataSource={columns} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default detailTicket;
