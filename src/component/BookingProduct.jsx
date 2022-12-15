import React, { useEffect, useState } from "react";
import LogoTerbang from "../assets/admin-img/undraw_aircraft_re_m05i.svg";
// import Ceklist from "../assets/img/checklist-removebg-preview.png";
import { Button, Form, Input, Radio } from "antd";
import Navbar from "./Navbar2";
import "../assets/css/styleku.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/actions/product";
import { useNavigate, useParams } from "react-router-dom";

function DetailProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const detailproduct = useSelector((state) => {
    return state.detailByProduct.data;
  });
  useEffect(() => {
    dispatch(getDetailProduct(id, navigate));
  }, [dispatch, id, navigate]);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // control passenger
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <React.Fragment>
      <Navbar />
      <div class="container-xl px-4 mt-4">
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <h4 className="mb-4 mt-2 text-center">Pessengers</h4>
              <div class="card-body">
                {/* card passenger */}
                <Form
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  initialValues={{
                    layout: formLayout,
                  }}
                  onValuesChange={onFormLayoutChange}
                >
                  <Form.Item label="Form Layout" name="layout">
                    <Radio.Group value={formLayout}>
                      <Radio.Button value="horizontal">Horizontal</Radio.Button>
                      <Radio.Button value="vertical">Vertical</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Jumlah Passenger">
                    <Input placeholder="input placeholder" type="number" />
                  </Form.Item>
                  <Form.Item {...buttonItemLayout}>
                    <Button type="primary">Submit</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div class="card mb-4">
              {/*  */}
              <div class="card-body">
                <form action="#">
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="firstnamefloatingInput"
                          placeholder="Enter your firstname"
                        />
                        <label for="firstnamefloatingInput">First Name</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="lastnamefloatingInput"
                          placeholder="Enter your Lastname"
                        />
                        <label for="lastnamefloatingInput">Last Name</label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="date"
                          class="form-control"
                          id="emailfloatingInput"
                          placeholder="Enter your email"
                        />
                        <label for="emailfloatingInput">Tanggal Lahir</label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="passwordfloatingInput"
                          placeholder="Enter your password"
                        />
                        <label for="passwordfloatingInput">
                          Kewarganegaraan
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="passwordfloatingInput1"
                          placeholder="Confirm password"
                        />
                        <label for="passwordfloatingInput1">Nomor Paspor</label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="cityfloatingInput"
                          placeholder="Enter your nomor hp"
                        />
                        <label for="zipfloatingInput">Negara Penerbit</label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="zipfloatingInput"
                          placeholder="Enter your zipcode"
                        />
                        <label for="cityfloatingInput">Nomor Hp</label>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="zipfloatingInput"
                          placeholder="Enter your zipcode"
                        />
                        <label for="zipfloatingInput">Email</label>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="text-end">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body">
                <div className="text-center">
                  <img
                    src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"
                    alt="Garuda"
                    className="img-fluid"
                    width="200"
                  />
                  <h5>
                    {detailproduct?.origin.city} <span>===========</span>{" "}
                    {detailproduct?.destination.city}
                  </h5>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs 12 d-flex">
                    <h6 className="font-monospace mt-3 ms-auto">
                      {detailproduct?.flight_date}
                    </h6>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs 12 d-flex">
                    <h6 className="font-monospace mt-3">
                      {detailproduct?.depature_hours}
                    </h6>
                  </div>
                  <div className="text-center mt-3">
                    <h5>{detailproduct?.type}</h5>
                  </div>
                  <hr className="mt-5" />
                </div>

                <div className="d-flex">
                  <h5>Total Payment</h5>
                  <div className="ms-auto">{rupiah(detailproduct?.price)}</div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <div className="text-center mt-2">
                  <img
                    src={LogoTerbang}
                    alt=""
                    width="200"
                    className="img-fluid"
                  />
                </div>
                <div className="mt-5">
                  <ul id="refund">
                    <li>Menerima Refound</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DetailProduct;
