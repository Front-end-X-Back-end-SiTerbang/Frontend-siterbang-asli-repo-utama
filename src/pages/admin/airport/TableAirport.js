import React, { useEffect } from "react";
import "../../../assets/css/styleku.css";
import { Space, Table } from "antd";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAirport,
  getListAirport,
} from "../../../redux/actions/airportActions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function TableAir() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const airport = useSelector((state) => {
    return state.listAirport.data;
  });

  const onDelete = (id) => {
    Swal.fire({
      title: "Anda Yakin Ingin Menghapus Airline ini?",
      icon: "Peringatan",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAirport(id)
          .then((response) => {
            Swal.fire({
              title: response.message,
              icon: "success",
            });
            dispatch(getListAirport());
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

  useEffect(() => {
    dispatch(getListAirport());
  }, [dispatch]);

  const columns = [
    {
      key: "1",
      title: "Nama Airport",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "type",
      dataIndex: "type",
    },
    {
      key: "3",
      title: "capacity",
      dataIndex: "capacity",
    },
    {
      key: "4",
      title: "Nama Maskapai",
      dataIndex: "airline_id",
    },
    {
      key: "5",
      title: "Action",
      render: (item, index) => (
        <Space size="middle">
          <div key={index}>
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate(`/editairport/${item.id}`);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(item.id);
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
                  Airport
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
              <Table columns={columns} dataSource={airport}></Table>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableAir;
