import React, { useEffect, useState } from "react";
import "../../../assets/css/styleku.css";
import { Table } from "antd";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListAllUserss } from "../../../redux/actions/listAllUserActions";

function TableAir() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const allUsers = useSelector((state) => {
    return state.listAllUser.data;
  });

  // handle searching
  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = allUsers.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  useEffect(() => {
    dispatch(getListAllUserss());
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
      key: "2",
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      key: "3",
      title: "Nama Lengkap",
      dataIndex: "name",
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "role",
      sorter: (a, b) => a.role.localeCompare(b.role),
    },
    {
      key: "5",
      title: "Alamat",
      dataIndex: "address",
    },
    {
      key: "6",
      title: "Nomor Telepon",
      dataIndex: "phone",
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
                  Admin & Users
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/createadmin");
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
                            placeholder="Search Nama...."
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
                dataSource={searchText ? filteredData : allUsers}
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableAir;
