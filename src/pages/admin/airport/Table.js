import React, { useEffect } from "react";
import "../../../assets/css/styleku.css";
import { Row, Space, Table } from "antd";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListAirport } from "../../../redux/actions/airportActions";

function TableAir() {
  const dispatch = useDispatch();
  const airport = useSelector((state) => {
    return state.listAirport.data;
  });

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
      title: "destination",
      dataIndex: "destination_id",
    },
    {
      key: "4",
      title: "Action",
      render: () => (
        <Space size="middle">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <Container>
        <div className="card">
          <h5 className="text-center mb-5">List Airport</h5>
          <div className="card-body">
            <Row>
              <div className="col d-flex">
                <button className="btn btn-primary">Tambah</button>
              </div>
              <div className="d-flex justify-content-end">
                <input type="text" placeholder="cari" />
                <button className="d-flex btn btn-primary">Cari</button>
              </div>
            </Row>
            <Table
              className="mt-5"
              columns={columns}
              dataSource={airport}
            ></Table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default TableAir;
