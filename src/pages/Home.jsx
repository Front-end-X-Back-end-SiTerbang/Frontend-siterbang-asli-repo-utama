import React from "react";
import "../assets/css/styleku.css";
import Navbar2 from "../component/Navbar2";
import Header from "../component/MainSection";
import Footer from "../component/Footer";
import "../assets/css/home.css";
import bn1 from "../assets/img-plane/fly_img02.jpg";
import bn2 from "../assets/img-plane/fly_img04.jpg";
import bn3 from "../assets/img-plane/fly_img05.jpg";
import bn4 from "../assets/img-plane/fly_img08.jpg";
import btnBanner from "../assets/img-plane/siterbang.png";
import { CarouselMitra } from "../component/CarouselMitra";

function Home() {
  return (
    <React.Fragment>
      <Navbar2 />
      <div id="ticket">
        <Header />
      </div>
      {/* handle brand siterbang yaw */}

      <div className="container-fluid mt-5 bg-white">
        <div className="container mt-5">
          <div className="row sledir">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card brand-siterbang">
                <img className="card-img-top" alt="brand siterbang" src={bn1} />
                <div className="card-body">
                  <h6 className="brands mt-3">Siterbang</h6>
                  <div className="text-center mt-4">
                    <img src={btnBanner} alt="" width="100px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card brand-siterbang phoneT">
                <img className="card-img-top" alt="brand siterbang" src={bn2} />
                <div className="card-body">
                  <h6 className="brands mt-3">Siterbang</h6>
                  <div className="text-center mt-4">
                    <img src={btnBanner} alt="" width="100px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card brand-siterbang phoneT tablet-brand">
                <img className="card-img-top" alt="brand siterbang" src={bn3} />
                <div className="card-body">
                  <h6 className="brands mt-3">Siterbang</h6>
                  <div className="text-center mt-4">
                    <img src={btnBanner} alt="" width="100px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card brand-siterbang phoneT tablet-brand">
                <img className="card-img-top" alt="brand siterbang" src={bn4} />
                <div className="card-body">
                  <h6 className="brands mt-3">Siterbang</h6>
                  <div className="text-center mt-4">
                    <img src={btnBanner} alt="" width="100px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* handle maskapai */}
      <div className="maskapais phone-maskapai">
        <CarouselMitra />
      </div>
      {/* handle booking otw raw */}
      <div className="this-yours">
        <h1>The Choice is Yours</h1>
      </div>
      {/* handle traveling */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card brand-siterbang xyrea">
              <img className="card-img-top" alt="brand siterbang" src={bn1} />
              <div className="card-body">
                <h6 className="brands mt-3">Siterbang</h6>
                <div className="text-center mt-4">
                  <img src={btnBanner} alt="" width="100px" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card brand-siterbang phone-branded">
              <img className="card-img-top" alt="brand siterbang" src={bn2} />
              <div className="card-body">
                <h6 className="brands mt-3">Siterbang</h6>
                <div className="text-center mt-4">
                  <img src={btnBanner} alt="" width="100px" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card brand-siterbang phone-branded tablet-brand">
              <img className="card-img-top" alt="brand siterbang" src={bn3} />
              <div className="card-body">
                <h6 className="brands mt-3">Siterbang</h6>
                <div className="text-center mt-4">
                  <img src={btnBanner} alt="" width="100px" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="card brand-siterbang phone-branded tablet-brand">
              <img className="card-img-top" alt="brand siterbang" src={bn4} />
              <div className="card-body">
                <h6 className="brands mt-3">Siterbang</h6>
                <div className="text-center mt-4">
                  <img src={btnBanner} alt="" width="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
