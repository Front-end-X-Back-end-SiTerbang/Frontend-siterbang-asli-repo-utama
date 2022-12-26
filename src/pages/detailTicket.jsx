// import React, { useEffect, useState } from "react";
// import Navbar from "../component/Navbar2";
// import Footer from "../component/Footer";
// import Logo from "../assets/img-plane/Dayss.png";
// import Logo1 from "../assets/img-plane/Day1.png";
// import { useDispatch, useSelector } from "react-redux";
// import { Table } from "antd";
// import "../assets/css/home.css";
// import { useParams } from "react-router-dom";
// import { getDetailTicket } from "../redux/actions/transaksiActions";

// function DetailTicket() {
//   const dispatch = useDispatch();
//   const [data, setDatas] = useState({});
//   const [pagination, setPagination] = useState({
//     current: 1,
//     pageSize: 10,
//   });

//   const { id } = useParams();

//   const detailPesanan = useSelector((state) => {
//     return state.detailPesanan.data;
//   });

//   useEffect(() => {
//     dispatch(getDetailTicket(id));
//   }, [dispatch, id]);

//   // handle table
//   const colums = [
//     {
//       key: "1",
//       title: "no",
//       render: (text, record, index) => {
//         return index + (pagination.current - 1) * pagination.pageSize + 1;
//       },
//     },
//     {
//       key: "2",
//       title: "NIK",
//       dataIndex: "nik",
//     },
//     {
//       key: "3",
//       title: "Nama Penumpang",
//       dataIndex: "passenger_name",
//     },
//     {
//       key: "4",
//       title: "Nomor Handphone",
//       dataIndex: "passenger_phone",
//     },
//   ];

//   function convertNumberToTime(number) {
//     // Tentukan apakah nilai angka merupakan jam, menit, atau detik
//     const hours = Math.floor(number);
//     const minutes = Math.round((number - hours) * 60);

//     // Format jam menjadi HH jam MM menit
//     let time = "";
//     if (hours > 0) {
//       time += `${hours} jam `;
//     }
//     if (minutes > 0) {
//       time += `${minutes} menit`;
//     }

//     return time;
//   }

//   return (
//     <React.Fragment>
//       <Navbar />
//       {/* handle detail pemesanan ticket */}
//       <div className="container-fluid bg-light mt-5">
//         <div className="container mt-2">
//           <div class="card ribbon-box border shadow-none mb-lg-0 mt-5">
//             <div class="card-body">
//               <div className="d-flex justify-content-end">
//                 <div className="col">
//                   <img
//                     src={Logo}
//                     alt=""
//                     width="180"
//                     className="brand-pesanan"
//                   />
//                 </div>
//                 <img src={Logo1} alt="" width="180" className="brand-pesanan" />
//               </div>
//               {/* content */}
//               <div className="mt-5 py-3">
//                 <div className="container">
//                   <div className="card-body bg-pesanan">
//                     <div className="text-center">
//                       {detailPesanan.product.type}
//                       <hr />
//                     </div>

//                     <div className="row ms-5">
//                       <div className="col-lg-3 col-sm-6 col-xs-12 ">
//                         <h4>{detailPesanan.product.terminal}</h4>
//                       </div>
//                       <div className="col-lg-3 col-sm-6 col-xs-12 ">
//                         <h4>{detailPesanan.product.code}</h4>
//                       </div>
//                       <div className="col-lg-3 col-sm-6 col-xs-12 ">
//                         <h4>{detailPesanan.total_passenger}</h4>
//                       </div>
//                       <div className="col-lg-3 col-sm-6 col-xs-12 ">
//                         <h4>
//                           {convertNumberToTime(
//                             detailPesanan.product.estimation
//                           )}
//                         </h4>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="ms-5 mt-3">
//                     <strong>*Note</strong>
//                     <ul>
//                       <li>ahhah</li>
//                       <li>ahhah</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-5 ms-5 mb-5">
//               <h4>Detail Penumpang</h4>
//               <Table
//                 pagination={{
//                   current: pagination.current,
//                   pageSize: pagination.pageSize,
//                   onChange: (page) =>
//                     setPagination({ ...pagination, current: page }),
//                 }}
//                 columns={colums}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }

// export default DetailTicket;
