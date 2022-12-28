import { Radio, Timeline } from "antd";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";
import Lgo from "../assets/img/undraw_Aircraft_re_m05i.png";
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
      {listProduct.result.map((product) => (
        <div key={product.id} className="card mt-2">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm text-center">
                <h5>{product.airline.name}</h5>
                <img
                  className="text-center mb-3"
                  src={Lgo}
                  alt=""
                  width={100}
                />
              </div>
              <div className="col-lg-3 col-md-4 col-sm">
                <h6>
                  {product.origin.name} (<strong>{product.origin.city}</strong>)
                </h6>
              </div>
              <div className="col-lg-3 col-md-4 col-sm">
                <div className="">
                  <div className="card-body">
                    <div className="row text-center">
                      <div className="col-lg-4 col-sm-6 col xs-12">
                        <h6 className="mt-3">{product.origin.iata_code}</h6>
                      </div>
                      <div className="col-lg-4 col-sm-6 col xs-12">
                        <h6 className="type-siterbang ">
                          {product.type} | {product.code}
                        </h6>
                        <hr />
                        <h6 className="text-center">
                          {convertNumberToTime(product.estimation)}
                        </h6>
                      </div>
                      <div className="col-lg-4 col-sm-6 col xs-12">
                        <h6 className="mt-3">
                          {product.destination.iata_code}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm mb-4">
                {product.destination.name} (
                <strong>{product.destination.city}</strong>)
                <h6 className="mt-4 text-center mb-3 bg-terbang">
                  {rupiah(product.price)}
                </h6>
              </div>
              <div className="text-end">
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
          </div>
        </div>
      ))}

      {/* {listProduct.result.map((product) => (
          <div
            key={product.id}
            className="product-item d-md-block my-3 bg-white mb-3 rounded border border-primary"
          >
            <img
              src="https://braze-images.com/appboy/communication/assets/image_assets/images/6360905d1415b13299423cb9/original.png?1667272797"
              width={100}
              alt=""
            />
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 ">hahahah</div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">hahahah</div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">hahahah</div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">hahahah</div>
            </div>
          </div>
        ))} */}
    </React.Fragment>
  );
}
