import { Radio, Timeline } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";

export default function Product({ listProduct }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // handle DataSet Dropdown ticket
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  // Tentukan apakah nilai angka merupakan jam, menit, atau detik
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
      <div className="d-flex justify-content-between my-3 d-lg-flex mb-5">
        <h5>
          <b>Select Ticket</b>
          <small className="ms-2 text-secondary" style={{ fontSize: "14px" }}>
            ({listProduct.result.length} Ticket Found)
          </small>
        </h5>
      </div>
      <div>
        {listProduct.result.map((product) => (
          <div
            key={product.id}
            className="product-item d-md-block my-3 bg-white mb-3 rounded border border-primary"
          >
            <img
              src="https://braze-images.com/appboy/communication/assets/image_assets/images/6360905d1415b13299423cb9/original.png?1667272797"
              width={100}
              alt=""
            />
            <span className="ms-3 codeR ">
              <span className="">{product.code}</span> | {product.type} 💺
            </span>
            <span>
              ({product.origin.iata_code}) - ({product.destination.iata_code})
            </span>
            <div className="container">
              <div className="row g-3 ms-5 mt-5 mb-5">
                <div className="col-lg-3 xr">
                  <h6>
                    {product.origin.city}
                    <span> 🛬 </span>
                    {product.destination.city}
                  </h6>
                </div>
                <div className="col-lg-3 xr">
                  <h6>⏲ {product.depature_hours}</h6>
                </div>
                <div className="col-lg-3 xr">
                  <h6>{rupiah(product.price)}</h6>
                </div>
                <div className="col-lg-3">
                  <button
                    className="btn-ticket"
                    onClick={() => {
                      navigate(`/productdetail/${product.id}`);
                    }}
                  >
                    Pilih
                  </button>
                </div>
              </div>
              {/* buuttonnya disini guys */}
              <button className="btn btn-primary" onClick={handleButtonClick}>
                Detail Ticket
              </button>
              {showForm && (
                <>
                  <Timeline className="ms-5 mt-4">
                    <Timeline.Item>
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <div className="mt-2">
                            <h6>
                              {product.origin.name} ({product.origin.iata_code})
                            </h6>
                            <span>
                              <h6>{product.terminal}</h6>
                            </span>
                            <div className="mt-5 tickets">
                              <div className="row ms-5">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                  {product.airline.name}
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                  {product.code} | {product.type}
                                </div>
                              </div>
                              <hr />
                              <div className="text-center">
                                {convertNumberToTime(product.estimation)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                          <div className="mt-2">
                            <h6>{product.gate}</h6>
                          </div>
                        </div>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item>
                      <h6>
                        {product.destination.name} (
                        {product.destination.iata_code})
                      </h6>
                    </Timeline.Item>
                  </Timeline>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
