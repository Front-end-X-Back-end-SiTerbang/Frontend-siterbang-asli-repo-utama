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
import React,{ useContext, useState, useEffect } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../redux/actions/product";
// import { getListAirline } from "../redux/actions/airline";
import Navbar2 from "../component/Navbar2"



const SearchFlightForm = ({ isSearchPage }) => {
  // React Router

  const dispatch = useDispatch();
  const { listProduct, listAirline, passenger } = useSelector((state) => state);
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Search Result`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/products/search?`;
   
    if (queryParams.get("origin")) {
      url += `&origin=${queryParams.get("origin")}`;
    }

    if (queryParams.get("destination")) {
      url += `&destination=${queryParams.get("destination")}`;
    }
  
    if (queryParams.get('page')) {
      url += `&page=${queryParams.get('page')}`;
    }

    dispatch(getListProduct(url, navigate));
  }, [dispatch, navigate, queryParams]);


  // console.log(getListProduct)


  let normalGridSpan = 6,
    seatsGridSpan = 3,
    ticketTypeGridSpan = 3;

  if (isSearchPage) {
    normalGridSpan = 2;
    seatsGridSpan = 2;
    ticketTypeGridSpan = 2;
  }




  return (
    // <div> HELLO</div>
    <Container className="homepage mt-5" >
      <Paper sx={{ overflow: "hidden"}} elevation={10} >
        <h1> HELLO</h1>
      </Paper>
    </Container>




  );
};

export default SearchFlightForm;