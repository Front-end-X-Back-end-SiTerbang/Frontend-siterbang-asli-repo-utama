import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getListProductions } from "../../../redux/actions/productionActions";

function TableProducts(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const productions = useSelector((state) => {
    return state.listProductions.data;
  });

  console.log(productions);

  const columns = [
    {
      key: "1",
      title: "no",
      render: (text, record, index) => {
        return index + (pagination.current - 1) * pagination.pageSize + 1;
      },
    },
    {
      key: "airline_id",
      title: "Nama Maskapai",
      dataIndex: "airline_id",
    },
    {
      key: "2",
      title: "gate",
      dataIndex: "gate",
    },
    {
      key: "3",
      title: "Penerbangan",
      render: (item, index) => (
        <div key={index}>
          {item.origin_id} 🛬 {item.destination_id}
        </div>
      ),
    },
    {
      key: "airplane_id",
      title: "Nama Pesawat",
      dataIndex: "airplane_id",
    },
    {
      key: "4",
      title: "Kode",
      dataIndex: "code",
    },
    {
      key: "5",
      title: "Airport",
      dataIndex: "terminal",
    },
    {
      key: "6",
      title: "Jenis Pesawat",
      dataIndex: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      key: "7",
      title: "Keberangkatan",
      dataIndex: "depature_hours",
    },
  ];

  useEffect(() => {
    dispatch(getListProductions());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center card-title font-weight-bold">
                  Productions
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/createproductions");
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
                dataSource={productions}
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableProducts;
