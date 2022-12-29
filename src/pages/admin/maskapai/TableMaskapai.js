import React, { useEffect, useState } from "react";
import "../../../assets/css/styleku.css";
import { Space, Table } from "antd";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getListAirline,
  deleteAirline,
} from "../../../redux/actions/airlineActions";
import Swal from "sweetalert2";

function TableMaskapai() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });
  const airline = useSelector((state) => {
    return state.listAirline.result;
  });
  console.log(airline);

  useEffect(() => {
    dispatch(getListAirline());
  }, [dispatch]);

  const onDelete = (id) => {
    Swal.fire({
      title: "Anda Yakin Ingin Menghapus Airline ini?",
      icon: "Peringatan",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAirline(id)
          .then((response) => {
            Swal.fire({
              title: response.message,
              icon: "success",
            });
            dispatch(getListAirline());
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
      title: "no",
      render: (text, record, index) => {
        return index + (pagination.current - 1) * pagination.pageSize + 1;
      },
    },
    {
      key: "2",
      title: "Nama Maskapai",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      key: "3",
      title: "Nomor Telepon",
      dataIndex: "phone",
    },
    {
      key: "4",
      title: "Action",
      render: (item, index) => (
        <Space size="middle">
          <div key={index}>
            <button
              className="btn btn-warning"
              onClick={() => {
                // e.preventDefault();
                navigate(`/editmaskapai/${item.id}`);
                // console.log(`${item.id}`)
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={(e) => {
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
              <Table
                pagination={{
                  current: pagination.current,
                  pageSize: pagination.pageSize,
                  onChange: (page) =>
                    setPagination({ ...pagination, current: page }),
                }}
                columns={columns}
                dataSource={airline}
              ></Table>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableMaskapai;
