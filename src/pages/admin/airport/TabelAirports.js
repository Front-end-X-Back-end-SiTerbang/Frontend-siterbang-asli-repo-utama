import { Space, Table } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  deleteAirports,
  getListAirports,
} from "../../../redux/actions/airportActions";

function TabelAirports() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const Airports = useSelector((state) => {
    return state.listAirports.data;
  });

  useEffect(() => {
    dispatch(getListAirports());
  }, [dispatch]);

  const onDelete = (iata_code) => {
    Swal.fire({
      title: "Anda Yakin Ingin Menghapus Airline ini?",
      icon: "Peringatan",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAirports(iata_code)
          .then((response) => {
            Swal.fire({
              title: response.message,
              icon: "success",
            });
            dispatch(getListAirports());
          })
          .catch((err) => {
            Swal.fire({
              title: "Delete failed!",
              icon: "error",
            });
          });
      }
    });
  };

  const columns = [
    {
      key: "1",
      titile: "no",
      render: (text, record, index) => {
        return index + (pagination.current - 1) * pagination.pageSize + 1;
      },
    },
    {
      key: "2",
      title: "IATA",
      dataIndex: "iata_code",
    },
    {
      key: "3",
      title: "Nama Bandara",
      dataIndex: "name",
    },
    {
      key: "4",
      title: "Kota",
      dataIndex: "city",
    },
    {
      key: "5",
      title: "Negara",
      dataIndex: "country",
    },
    {
      key: "6",
      title: "Action",
      render: (item, index) => (
        <Space size="middle">
          <div key={index}>
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate(`/editairport/${item.iata_code}`);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(item.iata_code);
              }}
            >
              Delete
            </button>
          </div>
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
                  Airports
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/createairport");
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
              <Table
                pagination={{
                  current: pagination.current,
                  pageSize: pagination.pageSize,
                  onChange: (page) =>
                    setPagination({ ...pagination, current: page }),
                }}
                columns={columns}
                dataSource={Airports}
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TabelAirports;
