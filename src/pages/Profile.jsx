/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "../assets/css/profile.css";
// import rightArrow from '../assets/icons/right-arrow.svg'
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser, updatePhoto, updateUser } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import iconMyTwiter from "../assets/img/twiter.svg";
import iconIg from "../assets/img/ig.svg";
import iconLogout from "../assets/img/icon-logout.svg";
import iconFb from "../assets/img/fb.svg";
import Swal from "sweetalert2";
import Navbar from "../component/Navbar2";
import Footer from "../component/Footer";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailUser = useSelector((state) => {
    return state.detailUser;
  });

  const [name, setName] = useState(detailUser.data.name);
  const [email] = useState(detailUser.data.email);
  const [phone, setPhone] = useState(detailUser.data.phone);
  const [address, setAddress] = useState(detailUser.data.address);
  const [postal_code, setPostalCode] = useState(detailUser.data.postal_code);
  const [gender, setGender] = useState(detailUser.data.gender);
  // const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  // photo
  const [photo, setPhoto] = useState("");
  const [isChangePhoto, setIsChangePhoto] = useState(false);

  useEffect(() => {
    dispatch(getDetailUser(localStorage.getItem("id"), navigate));
  }, [dispatch, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      postal_code: postal_code,
      gender: gender,
    };

    // setErrors([]);
    setIsLoading(true);

    const updateUserDetail = await updateUser(body);

    if (updateUserDetail) {
      Swal.fire({
        title: "Success",
        text: "Edit User Success",
        icon: "success",
      });
      setPhoto(" ");
      dispatch(getDetailUser(localStorage.getItem("id"), navigate));
    }

    setIsLoading(false);
  };

  const handleChangeImage = async () => {
    const formData = new FormData();
    formData.append("photo", photo);

    // setErrors([]);
    setIsLoading(true);

    const updatePhotoUser = await updatePhoto(formData);

    if (updatePhotoUser) {
      Swal.fire({
        title: "Success",
        text: "Update Photo User success",
        icon: "success",
      });
      setIsChangePhoto(false);
      dispatch(getDetailUser(localStorage.getItem("id"), navigate));
    }

    setIsLoading(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid hanifProfile ml-0 mr-0">
        {/* <Navbar /> */}
        <section className="d-flex w-100">
          <div className="row w-100">
            <div className="col-lg-4 col-12 side-content">
              <div className="card d-flex flex-column w-100">
                {
                  <div className="d-flex flex-column w-100">
                    {detailUser.data.photo && (
                      <>
                        <img
                          width={"200px"}
                          height={"200px"}
                          className="card-img-top"
                          src={`${detailUser.data.photo}`}
                          alt="Fotonya Mana Woyy"
                        />
                      </>
                    )}
                    <label className="select-foto" htmlFor="files">
                      Select Photo
                    </label>
                    <input
                      className="hidden"
                      hidden
                      type="file"
                      id="files"
                      onChange={(e) => {
                        setPhoto(e.target.files[0]);
                        setIsChangePhoto(true);
                      }}
                    />
                    {isLoading ? (
                      <button
                        className="btn btn-success btn-lg ms-2"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Loading...
                      </button>
                    ) : (
                      isChangePhoto && (
                        <button onClick={handleChangeImage} type="submit">
                          Save
                        </button>
                      )
                    )}
                    <div className="detail-profile">
                      {<h4>{detailUser.data.name}</h4>}
                      {<p>{detailUser.data.phone}</p>}
                    </div>
                  </div>
                }
                <div className="card-setting d-flex flex-column justify-content-start">
                  <div className="">
                    <img src={iconMyTwiter} alt="" />
                  </div>
                  <div>
                    <img src={iconIg} alt="" />
                  </div>
                  <div>
                    <img src={iconFb} alt="" />
                  </div>
                  <div>
                    <button onClick={logout}>
                      <img src={iconLogout} alt="" />
                      <label htmlFor="">Logout</label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 main-content d-flex flex-column">
              <div className="card w-100">
                <div className="row">
                  <div className="col-12">
                    <div className="header-booking d-flex">
                      <label className="my-booking">Profile</label>
                    </div>
                  </div>
                  <div className="col-12 fill-profile">
                    <div className="title d-flex flex-row">
                      <div className="col-6 contact">
                        <h6>Contact</h6>
                      </div>
                      <div className="spaci-header"></div>
                      <div className="col-6 biodata">
                        <h6>Biodata</h6>
                      </div>
                    </div>
                    <div className="col-12 form-input">
                      <form
                        onSubmit={(e) => onSubmit(e)}
                        className="d-flex flex-row"
                      >
                        {/* <form className="d-flex flex-row"> */}
                        <div className="form-contact col-6 d-flex flex-column">
                          <label>Email</label>
                          <input value={email} type="text" />
                          <label>Phone Number</label>
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            type="text"
                          />
                        </div>
                        <div className="spaci-content"></div>
                        <div className="col-6 d-flex flex-column">
                          <label>Username</label>
                          <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                          />
                          <label>Gender</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                          >
                            <option selected>Pilih jenis kelamin</option>
                            <option value="1">Laki-laki</option>
                            <option value="2">Perempuan</option>
                          </select>

                          <label>Post Code</label>
                          <input
                            onChange={(e) => setPostalCode(e.target.value)}
                            value={postal_code}
                            type="text"
                          />
                          <label>Address</label>
                          <input
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            type="text"
                          />
                          {<button type="submit">Save</button>}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
}
