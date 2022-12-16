import PIA_IMG from "../assets/img/ungu.jpg";
import {
  Grid,
  Paper,
  Container,
  TextField,
  Typography,
  FormControlLabel,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Select } from "antd";

// import FlightContext from "../store/flight-context";
import FlightTypeInput from "./FlightTypeInput";
import LocationInput from "./LocationInput";
import SeatsInput from "./SeatsInput";
import TripTypeInput from "./TripTypeInput";

import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../redux/actions/product";
import { getListAirports } from "../redux/actions/airportActions";
import { render } from "@testing-library/react";

const SearchFlightForm = ({ isSearchPage }) => {
  // React Router
  const dispatch = useDispatch();
  const { listProduct, listAirline, passenger } = useSelector((state) => state);
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const [transitFiltered, setTransitFiltered] = useState("");
  //  ------TES----
  const [originFiltered, setOriginFiltered] = useState("");
  const [destinationFiltered, setDestinationFiltered] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dateFlexible, setDateFlexible] = useState("");
  const [seats, setSeats] = useState("");
  const [flight, setFlight] = useState("");
  const [tripType, setTripType] = useState("");
  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const Airports = useSelector((state) => {
    return state.listAirports.data;
  });
  console.log(Airports);
  // handle get airport
  useEffect(() => {
    dispatch(getListAirports());
  }, [dispatch]);

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - HOME`;
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

  let normalGridSpan = 6,
    seatsGridSpan = 3,
    ticketTypeGridSpan = 3;

  if (isSearchPage) {
    normalGridSpan = 2;
    seatsGridSpan = 2;
    ticketTypeGridSpan = 2;
  }

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

  // controllll select
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Container className="homepage mt-5">
      <Paper sx={{ overflow: "hidden" }} elevation={10}>
        <Grid container spacing={1} direction="row">
          <Grid xs={10} item>
            <form style={{ margin: "1em" }} onSubmit={applyFilter}>
              {/* onSubmit={formSubmitHandler}> */}
              <Typography variant="h5">Search a Flight</Typography>

              {isSearchPage ? (
                <Box sx={{ display: "flex" }}>
                  <TripTypeInput
                    tripType={tripType}
                    setTripType={setTripType}
                  />
                  {flexibleDatesComponent}
                </Box>
              ) : (
                <TripTypeInput tripType={tripType} setTripType={setTripType} />
              )}

              <Grid container rowSpacing={3} spacing={1}>
                <Grid item xs={12} md={normalGridSpan}>
                  {/* <LocationInput
                  label="Departure Location"
                  location={originFiltered}
                  setLocation={setOriginFiltered}
                  
                /> */}

                  {/* select */}
                </Grid>

                <Grid item xs={12} md={normalGridSpan}>
                  {/* <LocationInput
                  label="Destination"
                  location={destinationFiltered}
                  setLocation={setDestinationFiltered}
                /> */}
                  {/* seleect */}
                  {/* <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                   value
                  /> */}
                  <select
                    onChange={(e) => setOriginId(e.target.value.toUpperCase())}
                  >
                    <option>Pilih YAW</option>
                    {Airports &&
                      Airports.map((item, key) => {
                        return (
                          <option value={item.id}>
                            {item.city} <span>{item.iata_code}</span>
                          </option>
                        );
                      })}
                  </select>
                  <br />
                  <select
                    onChange={(e) =>
                      setDestinationId(e.target.value.toUpperCase())
                    }
                  >
                    <option>Pilih YAW</option>
                    {Airports &&
                      Airports.map((item, key) => {
                        return (
                          <option value={item.id}>
                            {item.city} <span>{item.iata_code}</span>
                          </option>
                        );
                      })}
                  </select>
                </Grid>

                <Grid item xs={12} md={seatsGridSpan}>
                  <TextField
                    name="departure-date"
                    variant="outlined"
                    label="Departure Date"
                    value={departureDate}
                    required
                    onChange={(e) => setDepartureDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    type="date"
                  />
                </Grid>
                <Grid item xs={12} md={seatsGridSpan}>
                  <TextField
                    variant="outlined"
                    label="Return Date"
                    name="return-date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    type="date"
                    disabled={tripType === "one-way"}
                    required={tripType === "round-trip"}
                  />
                </Grid>
                <Grid item xs={12} md={seatsGridSpan} sx={{ display: "flex" }}>
                  <SeatsInput seats={seats} setSeats={setSeats} />
                </Grid>
                <Grid item xs={12} md={ticketTypeGridSpan}>
                  <FlightTypeInput flight={flight} setFlight={setFlight} />
                </Grid>
              </Grid>

              {/* {!isSearchPage && flexibleDatesComponent} */}

              <Button
                sx={{
                  marginTop: "1em",
                  marginLeft: "auto",
                  marginRight: "0",
                  display: "block",
                  bgcolor: "#6C63FF",
                }}
                variant="contained"
                type="submit"
                fullWidth={!isSearchPage}
              >
                Search
              </Button>
            </form>
          </Grid>
          <Grid xs={2} item>
            <img
              src={PIA_IMG}
              className="pia-image "
              alt={PIA_IMG}
              style={{ width: 190 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SearchFlightForm;
