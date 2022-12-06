import React from "react";
import "../assets/css/styleku.css";
import Logo from "../assets/img/home-1.jpg";
import Footer from "../component/Footer";
// import Navigation from "../component/Nav";
// import Nav from "../component/Nav"
import Navbar2 from "../component/Navbar2"
import Header from "../component/MainSection"

// import { Container, Grid } from "@material-ui/core";
import styles from "./landingPage.module.css";
import {CarouselMitra} from "../component/CarouselMitra"
// Update 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <>
    <div className={styles.body}> 
      <Navbar2 />
      <Header />
      <Container maxWidth="lg">
        <Grid container>
          <div className={styles.advertImg}>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://braze-images.com/appboy/communication/assets/image_assets/images/6360905d1415b13299423cb9/original.png?1667272797"
                alt=""
              />
            </Grid>
            <Grid
              item
              className={styles.advertGrid}
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <img
                src="https://cdn6.agoda.net/images/WebCampaign/wcSP20210824EUv2/en-us.png"
                alt=""
              />
            </Grid>
          </div>
        </Grid>
      </Container>

      <CarouselMitra />

    

      {/* <Navigation /> */}
      {/* <img src={Logo} width="100%" alt="sda" /> */}
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default Home;
