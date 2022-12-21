import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../redux/actions/product";
// import { getListAirline } from "../redux/actions/airline";
import Navbar2 from "../component/Navbar2";
import Product from "./Product";
import styles from "../pages/landingPage.module.css";

const SearchFlightForm = ({ isSearchPage }) => {
  const dispatch = useDispatch();
  // const { listProduct, listAirline, passenger } = useSelector((state) => state);
  const listProduct = useSelector((state) => {
    return state.listProduct;
  });
  console.log(listProduct);

  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    document.title = `Search Result`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL}/products/search?`;
    if (queryParams.get("origin_id")) {
      url += `&origin_id=${queryParams.get("origin_id")}`;
    }

    if (queryParams.get("destination_id")) {
      url += `&destination_id=${queryParams.get("destination_id")}`;
    }

    if (queryParams.get("page")) {
      url += `&page=${queryParams.get("page")}`;
    }

    dispatch(getListProduct(url, navigate));
  }, [dispatch, navigate, queryParams]);

  return (
    // <div> HELLO</div>
    <div className={styles.body}>
      <Navbar2 />

      <Container className="homepage ">
        {/* <div className="col-12 col-md-12 col-lg-9  ">  */}
        <Product listProduct={listProduct} />
        {/* </div> */}
        <b> </b>
      </Container>
    </div>
  );
};

export default SearchFlightForm;
