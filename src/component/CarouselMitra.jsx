import { Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styles from "./CarouselMitra.module.css";
import InfiniteCarousel from "react-leaf-carousel";
// import { AppContext } from "../../../../context/Provider";
import { Link } from "react-router-dom";

export const CarouselMitra = () => {
  // const { setSearchedCity } = useContext(AppContext);

  return (
    <Container className={styles.india_Dest_Cont} maxWidth="md">
      <Typography className={styles.india_dest_heading} variant="h5">
        Maskapai Partner
      </Typography>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0}
        // sideSize={0.1}
        slidesToScroll={6}
        slidesToShow={6}
        scrollOnDevice={true}
      >
      
          <div   
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Lion-Air-1.png"
            />
          </div>
        
     
          <div
           
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Garuda-Indonesia-1.png"
            />        
          </div>
      
      
          <div        
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/07/tenant-citilink.png"
            />
            
          </div>
     

          <div
            
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/07/tenant-batik-air.png"
            />
          </div>

  
          <div     
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Susi-Air-1.png"
            />
          </div>

     
          <div     
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Sriwijaya-Air-1.png"
            />
          </div>
    
          <div          
            className={styles.carouselItems}
          >
            <img
              className={styles.carouselImg}
              alt=""
              src="https://hangnadim.bpbatam.go.id/wp-content/uploads/2021/05/Malindo-Air-1.png"
            />
          </div>
    
    
      </InfiniteCarousel>
    </Container>
  );
};
