import React from "react";
import Logo from "../assets/img/jkw.JPG"
import "../assets/css/styleku.css";

function Profile() {
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
            <div class="card mb-3">
                <div  class="card-body">
                    <div class="row">
                        <div class="col-sm">
                        <h6 class="mb-0">Full Name</h6>
                        <input
                            type="text"
                            class="form-control input login"
                        />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm">
                            <h6 class="mb-0">Email</h6>
                            <input
                            type="text"
                            class="form-control input login"
                        />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm">
                            <h6 class="mb-0">Phone</h6>
                            <input
                            type="text"
                            class="form-control input login"
                        />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm">
                            <h6 class="mb-0">Address</h6>
                            <input
                            type="text"
                            class="form-control input login"
                        />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-12">
                        <a class="btn btn-info " target="__blank" href="/">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
    
    </>
  );
}

export default Profile;