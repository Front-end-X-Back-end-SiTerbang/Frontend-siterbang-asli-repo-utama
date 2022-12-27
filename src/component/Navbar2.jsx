import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LOGO from "../assets/img-plane/siterbang.png";
import uLOGO from "../assets/img/man.png";
import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { getMyBooking } from "../redux/actions/transaksiActions";
import { letterSpacing } from "@mui/system";


function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorE2User, setAnchorE2User] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu2 = (event) => {
    setAnchorE2User(event.currentTarget);
  };

  const handleCloseUserMenu2 = () => {
    setAnchorE2User(null);
  };

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const home = () => {
    navigate("/");
  };
  const profile1 = ()=> {
    navigate('/profile')
  };
  const mybooking = ()=> {
    navigate('/mybooking')
  };

  const myBooking = useSelector((state) => {
    return state.myBooking;
});

useEffect(() => {
    dispatch(getMyBooking(navigate));
}, [dispatch, navigate]);

console.log(myBooking)
// const statusLength= myBooking.data
// console.log("Jumlah : ", statusLength)
let [jumlahNotif] = useState(0);


{myBooking.data.map((item, index) => {

    if(item.is_paid ===  true){
      console.log("Berhasil")
      jumlahNotif =+ jumlahNotif + 1  ; 
    }

}
)}

const handleNotif= () =>{
  jumlahNotif =+ jumlahNotif - 1
  console.log("halo ini delete")
}
console.log("Jumlah Notif= ", jumlahNotif)

  return (
    // #A178DF
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            onClick={home}
            sx={{
              width: 70,
            }}
            alt="Your logo."
            src={LOGO}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "#6C63FF",
              textDecoration: "none",
            }}
          >
            SiTerbang
          </Typography>


          <Typography
            variant="h5"
            onClick={home}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#A178DF",
            }}
          >
            SiTerbang
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="blue"
              sx={{ mr: "10px" }}
              onClick={handleOpenUserMenu2}
            >
              <Badge badgeContent={jumlahNotif} color="error">
                <NotificationsIcon />
              </Badge>
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorE2User}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorE2User)}
                onClose={handleCloseUserMenu2}
              >
                {myBooking.data.map((item, index)=> {
                  return(
                    <MenuItem onClick={handleNotif}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="https://img.icons8.com/nolan/64/appointment-reminders.png" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Notifikasi"
                          secondary={
                            <React.Fragment>
                  
                            Transaksi {item.product.origin.city}  ✈️  {item.product.destination.city} Berhasil || Tipe {item.product.type}
                            </React.Fragment>
                          }
                        />
                      </ListItem>  
                    </MenuItem>                 
                  )
                })}
                
             </Menu>
            </Box>
          {!token ? (
            <Button
              variant="contained"
              href="/login"
              style={{ backgroundColor: "#A178DF" }}
            >
              Login
            </Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="U" src={uLOGO} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={profile1}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={mybooking}>
                  <Typography textAlign="center">My Booking</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
