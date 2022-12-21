import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.css";

export default function Product({ listProduct }) {
  const navigate = useNavigate();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

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
            <div className="container">
              <div className="row g-3 ms-5 mt-5 mb-5">
                <div className="col-lg-3 xr">
                  <h6>
                    {product.origin.city} <span>🛬</span>
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
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
