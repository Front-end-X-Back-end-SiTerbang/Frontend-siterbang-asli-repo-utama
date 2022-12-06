import React, { useEffect } from "react";
import "../../../assets/css/styleku.css";
import { Space, Table } from "antd";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListAirline } from "../../../redux/actions/airlineActions";

function TableMaskapai() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const airline = useSelector((state) => {
    return state.listAirline.data;
  });
  console.log(airline);

  useEffect(() => {
    dispatch(getListAirline());
  }, [dispatch]);

  const columns = [
    {
      key: "1",
      title: "Nama Maskapai",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Nomor Telepon",
      dataIndex: "phone",
    },
    {
      key: "3",
      title: "Action",

      render: () => (
        <Space size="middle">
          <button
            className="btn btn-warning"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/editmaskapai/${airline.id}`);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger">Delete</button>
        </Space>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center card-title font-weight-bold">
                  Maskapai
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/createmaskapai");
                      }}
                    >
                      <i className="fal fa-plus"></i> Create
                    </button>
                  </div>
                  <div className="col-sm">
                    <form action="">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="search"
                            className="form-control search"
                            name="search"
                            placeholder="Search...."
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-1 btn-rounded"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <Table columns={columns} dataSource={airline}></Table>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableMaskapai;
