import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Product({
  listProduct,
}) {
  // function timeConvert(num) {
  //   const sec = parseInt(num / 1000, 10);
  //   let hours = Math.floor(sec / 3600); // get hours
  //   let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  //   // let seconds = sec - hours * 3600 - minutes * 60; //  get seconds

  //   return hours + " Hours " + minutes + " Minutes";
  // }

  return (
    <>
      <div className="d-flex justify-content-between my-3 d-none d-lg-flex">
        <h1>HANYA TES. PROGRES...</h1>
        <h5>
          <b>Select Ticket</b>
          <small className="ms-2 text-secondary" style={{ fontSize: "14px" }}>
            ({listProduct.result.length} Ticket Found)
          </small>
        </h5>

        <div> 
        {listProduct.result.map((product) => (
                  <div
                    key={product.id}
                    className="product-item d-none d-md-block my-3"
                  >

                    <span className="ms-3">{product.destination.city}</span>


                    <div className="d-flex align-items-center">
                      <Link
                        className="text-primary me-2 fw-bold"
                        to={""}
                      >
                        View Details
                      </Link>
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9999 1.07107L9.58757 7.43757C9.19565 7.82669 8.56021 7.82669 8.16829 7.43757L1.75597 1.07107"
                          stroke="#2395FF"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>
                ))}

        </div>
  
      </div>
    </>
  );
}
