import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getListAllTransaksiBerhasil } from "../../../redux/actions/listTransaksiBerhasil";
import { getListAccountUsers } from "../../../redux/actions/listAccountActions";

function TabelHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const history = useSelector((state) => {
    return state.listTransaksiBerhasil.data;
  });
  const accountUsers = useSelector((state) => {
    return state.listAccountUsers.data;
  });

  const Airports = useSelector((state) => {
    return state.listAirports.data;
  });

  const Maskapai = useSelector((state) => {
    return state.listAirline.result;
  });

  const Airplanes = useSelector((state) => {
    return state.listAirplanes.data;
  });

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(getListAllTransaksiBerhasil());
    dispatch(getListAccountUsers());
  }, [dispatch]);

  const columns = [
    {
      key: "1",
      title: "no",
      render: (text, record, index) => {
        return index + (pagination.current - 1) * pagination.pageSize + 1;
      },
    },
    {
      key: "maskapai",
      title: "Nama Maskapai",
      render: (item, index) => {
        const HB = Maskapai.find((HB) => HB.id === item.product.airline_id);
        return HB ? HB.name : item.product.airline_id;
      },
    },
    {
      key: "pesawat",
      title: "Nama Pesawat",
      render: (item, index) => {
        const HB = Airplanes.find((HB) => HB.id === item.product.airplane_id);
        return HB ? HB.name : item.product.airplane_id;
      },
    },
    {
      key: "2",
      title: "Nama Pelanggan",
      render: (item, index) => {
        const HB = accountUsers.find((HB) => HB.id === item.user_id);
        return HB ? HB.name : item.user_id;
      },
    },
    {
      key: "3",
      title: "Penerbangan",
      render: (item, index) => {
        const origin = Airports.find(
          (origin) => origin.id === item.product.origin_id
        );
        const destination = Airports.find(
          (destination) => destination.id === item.product.destination_id
        );
        return origin && destination
          ? `${origin.city} 🛫 ${destination.city}`
          : `${item.product.origin_id} - ${item.product.destination_id}`;
      },
    },
    {
      key: "4",
      title: "Kode",
      render: (item, index) => {
        const HB = accountUsers.find((HB) => HB.id === item.product.code);
        return HB ? HB.name : item.product.code;
      },
    },
    {
      key: "5",
      title: "Terminal",
      render: (item, index) => {
        const HB = accountUsers.find((HB) => HB.id === item.product.terminal);
        return HB ? HB.name : item.product.terminal;
      },
    },
    {
      key: "type",
      title: "Jenis Ticket",
      render: (item, index) => {
        const HB = accountUsers.find((HB) => HB.id === item.product.type);
        return HB ? HB.name : item.product.type;
      },
    },
    {
      key: "passengers",
      title: "Total Passengers",
      render: (item, index) => {
        const HB = accountUsers.find((HB) => HB.id === item.total_passenger);
        return HB ? HB.name : item.total_passenger;
      },
    },
    {
      key: "order",
      title: "Total Harga",
      render: (item, index) => {
        const HB = accountUsers.find(
          (HB) => HB.id === rupiah(item.total_order)
        );
        return HB ? HB.name : rupiah(item.total_order);
      },
    },
  ];

  // handle searching
  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = history.filter((item) => {
      return item.product.code.toLowerCase().includes(value.toLowerCase());
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
                  History Booking Pelanggan
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto"></div>
                  <div className="col-sm">
                    <form>
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="search"
                            className="form-control search"
                            name="search"
                            placeholder="Search Nama Pelanggan"
                            onChange={(e) =>
                              handleSearch(e.target.value.toUpperCase())
                            }
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
                dataSource={searchText ? filteredData : history}
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TabelHistory;
