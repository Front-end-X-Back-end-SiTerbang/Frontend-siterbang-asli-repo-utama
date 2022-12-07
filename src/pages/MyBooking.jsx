import React from "react";
import Logo from "../assets/img/jkw.JPG"
import "../assets/css/styleku.css";

function MyBooking(){
    return (
        <>
        <div class="container">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src={Logo}  alt="" class="rounded-circle mt-5" width="150px" />
                                    <div class="mt-3">
                                        <button class="btn btn-info">Edit Profile</button>
                                        <h4>John Doe</h4>
                                        <p class="text-secondary mb-1">Frontend Developer</p>
                                        <p class="text-muted font-size-sm">Bobotsari, San Francisco, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h3>MY BOOKING</h3>
                        <div class="card mb-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyBooking;
   
