import React, { useState } from "react";
import "../css/Header.css";
import "../css/NavItem.css";
import NavItem from "../components/NavItem";
import {Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Fab, Typography } from "@mui/material";


/* _______________________________________________header section___________________________________________ */
const Header = () => {

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <nav className="d-flex justify-content-between align-items-center px-3">
      {/* _____________________________________________logo and brand name section____________________________________ */}
<Link to="/" id="navbar-brand" className="d-flex">
        
        <Typography id="app_name" className="mx-1">BusHub</Typography>
      </Link>

      <Link to="/">
          {/* logo */}
          <div>
            <span className="navbar-brand">
            <DirectionsBusIcon id="logo" />
            </span>
            {/* app name  */}
            <span id="app_name"className="mx-1">BusHub</span>

          </div>
        </Link>

 {/*______________________________________________________nav menu items__________________________________________________ */}
  <div>
  <NavItem/>
  </div>

      {/* <div id="mobile" onClick={handleHambergerClick} className="mx-2">
        <i id="bar">
          {hambergerClickState ? (
            <Fab
              className="muiIcon"
              size="small"
              aria-label="cancel"
              style={{
                fontSize: "10px",
                color: "rgb(18, 185, 182)",
                backgroundColor: "white",
              }}
            >
              <CloseIcon />
            </Fab>
          ) : (
            <MenuIcon sx={{ fontSize: 33, color: "white"}} />
          )}
        </i>
      </div> */}
    </nav>
  );
};

export default Header;
