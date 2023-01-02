import { FormControlLabel, Box, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DatePicker, Select } from "antd";
import "../assets/css/home.css";
import TripTypeInput from "./TripTypeInput";
import { useDispatch, useSelector } from "react-redux";
import { getListAirports } from "../redux/actions/airportActions";

const SearchFlightForm = ({ isSearchPage }) => {
  // React Router
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const [transitFiltered, setTransitFiltered] = useState("");
  //  ------TES----
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dateFlexible, setDateFlexible] = useState("");
  const [tripType, setTripType] = useState(true);
  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const Airports = useSelector((state) => {
    return state.listAirports.data;
  });
  // handle get airport
  useEffect(() => {
    dispatch(getListAirports());
  }, [dispatch]);

  useEffect(() => {
    document.title = `Siterbang`;
    window.scrollTo(0, 0);
  }, []);

  const applyFilter = (page = "") => {
    let url = "/products/search?";
    if (transitFiltered || transitFiltered === 0) {
      url += `&transit=${transitFiltered}`;
    }
    if (originId) {
      url += `&origin_id=${originId}`;
    }
    if (destinationId) {
      url += `&destination_id=${destinationId}`;
    }

    // if (page) {
    //   url += `&page=${page}`;
    // }
    return navigate(url);
  };

  const flexibleDatesComponent = (
    <FormControlLabel
      control={
        <Checkbox
          checked={dateFlexible}
          onChange={(e) => setDateFlexible(e.target.checked)}
        />
      }
      label="My dates are flexibleee"
    />
  );

  // control date
  const onChangeDep = (date, dateString) => {
    setDepartureDate(date, dateString);
  };

  const onChangeReturn = (date, dateString) => {
    setReturnDate(date, dateString);
  };

  // controllll select
  const onOriginChange = (value) => {
    setOriginId(value);
  };
  const onDastiChange = (value) => {
    setDestinationId(value);
  };

  const options = [];
  Airports &&
    Airports.map((item) => {
      return options.push({
        label: `${item.city} 🛬 ${item.iata_code}`,
        value: `${item.id}`,
      });
    });

  return (
    <React.Fragment>
      <div id="bg-sIterbang">
        <div className="bearer">
          <h1 className="container">SELAMAT DATANG DI Siterbang </h1>
          <h5 className="container">The Choice is Yours</h5>
        </div>
        <div className="xysss">
          <div className="container">
            <div className="card blous">
              <h6>Cari Tiket Murah Ada Disini 🎫</h6>
              <form onSubmit={applyFilter}>
                <div className="ms-5 mt-5 mb-5">
                  {isSearchPage ? (
                    <Box sx={{ display: "flex" }}>
                      <TripTypeInput
                        tripType={tripType}
                        setTripType={setTripType}
                      />
                      {flexibleDatesComponent}
                    </Box>
                  ) : (
                    <TripTypeInput
                      tripType={tripType}
                      setTripType={setTripType}
                    />
                  )}
                </div>
                <div className="row g-3 mb-5 slebew">
                  <div className="col-lg-3 col-sm-6 col-xs-12 phones">
                    <label className="mx-2 days">Dari</label>
                    <Select
                      showSearch
                      placeholder="Kota Atau Kode Bandara 🛫"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      onChange={onOriginChange}
                      options={options}
                      listHeight={500}
                      style={{ width: 250 }}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12 phones">
                    <label className="mx-2 col-xs-12 days">Ke</label>
                    <Select
                      showSearch
                      placeholder="Kota Atau Kode Bandara 🛬"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      onChange={onDastiChange}
                      options={options}
                      listHeight={500}
                      style={{ width: 250 }}
                      required
                    />
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12 phones">
                    <label className="mx-2 days">Berangkat</label>
                    <DatePicker onChange={onChangeDep} style={{ width: 250 }} />
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12 phones">
                    <label className="mx-2 days">Pulang</label>
                    <DatePicker
                      onChange={onChangeReturn}
                      style={{ width: 250 }}
                      disabled={tripType === "one-way"}
                      required={tripType === "round-trip"}
                    />
                  </div>
                  <div className="mt-5 mb-3 text-end">
                    <button className="btn-searchings" type="submit">
                      Cari Penerbangan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchFlightForm;
