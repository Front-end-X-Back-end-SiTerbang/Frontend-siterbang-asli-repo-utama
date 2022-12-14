import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Product({
  listProduct,
}) {
  function timeConvert(num) {
    const sec = parseInt(num / 1000, 10);
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    // let seconds = sec - hours * 3600 - minutes * 60; //  get seconds

    return hours + " Hours " + minutes + " Minutes";
  }

  return (
    <>
      <div className="d-flex justify-content-between my-3 d-none d-lg-flex">
        <h5>
          <b>Select Ticket</b>
          <small className="ms-2 text-secondary" style={{ fontSize: "14px" }}>
            ({listProduct.result.length} Ticket Found)
          </small>
        </h5>
      </div>


{/* desktop */}

      <div>
        {listProduct.result.map((product) => (
          <div
            key={product.id}
            className="product-item d-none d-md-block my-3 bg-white mb-3 rounded border border-primary"
          >
            <img
              src="https://braze-images.com/appboy/communication/assets/image_assets/images/6360905d1415b13299423cb9/original.png?1667272797"
              height={"80px"}
              alt=""
            />
            {/* <span className="ms-3">{product.code}</span> */}
            <span className="ms-3 text-danger">
              <b>
                PROMO
              </b>
              
            </span>
            <div className="d-flex align-items-center my-4">
              <div className="d-flex">
                <div className="d-flex flex-column me-5 ms-5">
                  <h4 className="text-primary">
                    <b>{product.origin.city}</b>
                  </h4>
                  <b></b>
                  {/* <p
                    className="text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={moment(product.flight_date).format("LLLL")}
                  >
                    {moment(product.flight_date).format("LL")}
                  </p> */}
                </div>
                <svg
                  width="30"
                  height="38"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                    fill="#979797"
                  />
                </svg>
                <div className="d-flex flex-column ms-5">
                  <h4 className="text-primary">
                    <b>{product.destination.city}</b>
                  </h4>
                  <b></b>
                  {/* <p
                    className="text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={moment(product.estimation).format("LLLL")}
                  >
                    {moment(product.estimation).format("LL")}
                  </p> */}
                </div>
              </div>
              <div className="ms-5 text-secondary p-5 ">
                {/* <p>
                  {timeConvert(
                    new Date(product.estimation).getTime() -
                      new Date(product.flight_date).getTime()
                  )}
                </p> */}
                <p className="text-center">
                  <small>{product.transit_total} Transittt</small> |{" "}
                  <small>{product.stock} Stock</small>
                </p>
              </div>
              <div className="mx-5 text-primary">
                <h5>
                <b>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(product.price)}
                  /perorang
                  </b>
                </h5>
              </div>
              <div className="ms-5 me-5 mb-4">
                <Link
                  className="btn btn-primary px-5 py-3"
                  to={""}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#6C63FF",
                  }}
                >
                  <b>Select</b>
                </Link>
              </div>
            </div>
          </div>
        ))}
           
      </div>


{/* mobile */}
      {/* {listProduct.isLoading ? (
        <div className="bg-white d-md-none my-4 p-4">
          <h1 className="d-md-none">Loading...</h1>
        </div>
      ) : (
        <>
          {!listProduct.data.length ? (
            <div className="bg-white d-md-none my-4 p-4">
              <h1 className="d-md-none ">No Ticket Found</h1>
            </div>
          ) : (
            <>
              {listProduct.data.map((product) => (
                <Fragment key={product.id}>
                  <Link
                    className="text-dark text-decoration-none"
                    to={`/ticket-detail/${product.id}`}
                  >
                    <div className="bg-white d-md-none my-4">
                      <div className="border rounded p-4">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <div className="me-3">
                              <h3>
                                <b>{product.origin}</b>
                              </h3>
                              <p
                                className="text-secondary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={moment(product.flight_detail).format(
                                  "LLLL"
                                )}
                              >
                                {moment(product.flight_detail).format("LL")}
                              </p>
                            </div>
                            <div className="mt-2">
                              <svg
                                width="20"
                                height="18"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                                  fill="#979797"
                                />
                              </svg>
                            </div>
                            <div className="ms-3">
                              <h3>
                                <b>{product.destination}</b>
                              </h3>
                              <p
                                className="text-secondary"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={moment(product.estimation).format(
                                  "LLLL"
                                )}
                              >
                                {moment(product.estimation).format("LL")}
                              </p>
                            </div>
                          </div>
                          <div className="text-end">
                            <p>
                              Terminal <strong>{product.terminal}</strong>
                            </p>
                            <p>
                              Gate <strong>{product.gate}</strong>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <p>{product.name}</p>
                          <p className="text-primary">
                            {new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(product.price)}
                            /pax
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Fragment>
              ))}
            </>
          )}
        </>
      )} */}
    </>
  );
}
