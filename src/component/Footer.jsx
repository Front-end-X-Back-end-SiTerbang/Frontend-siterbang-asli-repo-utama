import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/css/home.css";
import Logo from "../assets/img-plane/cart.png";
import Ig from "../assets/img-plane/instagram.png";
import Wa from "../assets/img-plane/whatsapp.png";
import Tw from "../assets/img-plane/twitter.png";
import Gt from "../assets/img-plane/github.png";
import Fb from "../assets/img-plane/facebook.png";
import Mp from "../assets/img-plane/google-maps.png";
import Bu from "../assets/img-plane/dudu-bubu.gif";
function Footer() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <footer className="text-center text-lg-start siterbang-bg mt-5">
        <div className="container text-center mt-5">
          <div className="row text-white ">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
              <h6 className>About</h6>
              <p className="bgry">
                siterbang merupakan aplikasi yang dibuat oleh 6 dari kelompok 3
                yang dimana aplikasi tersebut dibuat selama 42 hari, kolaborasi
                antara frontend dan backend. dimana aplikasi ini merupakan
                aplikasi booking ticket yang menggunakan react js, aplikasi di
                buat berdasarkan finall project yang telah di tentukan. untuk
                mengetahui nama dev silahkan klik di bagian contact Us
              </p>
              <div className="text-center">
                <img src={Logo} alt="" width="200" />
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              <h6>Sosial Media</h6>
              <p>
                <img src={Ig} alt="" width="20" /> <span>Instagram</span>
              </p>
              <p>
                <img src={Wa} alt="" width="20" /> <span>Whatsapp</span>
              </p>
              <p>
                <img src={Fb} alt="" width="20" /> <span>Facebook</span>
              </p>
              <p>
                <img src={Gt} alt="" width="20" /> <span>Github</span>
              </p>
              <p>
                <img src={Tw} alt="" width="20" /> <span>Twitter</span>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              <h6>Location</h6>
              <p>
                <img src={Mp} alt="" width="20" /> <span>Indonesia </span>
              </p>
              <p>
                <img src={Bu} alt="" width="100" />
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
              <h6>Links</h6>
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("")}>Profile</p>
              <p onClick={() => navigate("")}>My Booking</p>
              <p onClick={() => navigate("")}>Contact Us</p>
              <p onClick={() => navigate("/login")}>Login</p>
              <p onClick={() => navigate("/register")}>Register</p>
            </div>
          </div>
        </div>

        <section className=" text-center p-4 border-top mb-0 ">
          <div className="me-5 d-lg block">
            <h6 className="text-white ">
              &copy; siterbang - by designed FExBE-2
            </h6>
          </div>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
