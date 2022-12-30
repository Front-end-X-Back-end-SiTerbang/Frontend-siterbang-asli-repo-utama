import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getListProductions } from "../../../redux/actions/productionActions";

function TableProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const productions = useSelector((state) => {
    return state.listProductions.data;
  });

  const Airports = useSelector((state) => {
    return state.listAirports.data;
  });

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
      render: (item) => <div>{item.airline.name}</div>,
    },
    {
      key: "2",
      title: "gate",
      dataIndex: "gate",
    },
    {
      key: "3",
      title: "Penerbangan",
      render: (item, index) => {
        const origin = Airports.find((origin) => origin.id === item.origin_id);
        const destination = Airports.find(
          (destination) => destination.id === item.destination_id
        );
        return origin && destination
          ? `${origin.city} 🛫 ${destination.city}`
          : `${item.origin_id} - ${item.destination_id}`;
      },
    },
    {
      key: "airplane_id",
      title: "Nama Pesawat",
      render: (item) => <div>{item.airplane.name}</div>,
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

  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = productions.filter((item) => {
      return item.airline.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filteredData);
  };
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
                    <form onSubmit={handleSearch}>
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="search"
                            className="form-control search"
                            name="search"
                            placeholder="Search Nama Maskapai..."
                            onChange={(e) => handleSearch(e.target.value)}
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
                dataSource={searchText ? filteredData : productions}
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableProducts;
