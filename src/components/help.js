import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Fab, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

const Header = () => {
  const [hambergerClickState, setHambergerClickState] = useState(false);

  const handleHambergerClick = () => {
    setHambergerClickState(!hambergerClickState);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Link to="/" className="navbar-brand">
        <DirectionsBusIcon style={{ height: 40, width: 38 }} />
        <Typography style={{ fontSize: 22, margin: 3 }}>BusHub</Typography>
      </Link>

      <div>
        <ul
          id="navlinks"
          className={hambergerClickState ? "#navlinks active" : "#navlinks"}
        >
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/manageBus" className="nav-item">
              Bus Info
            </Link>
          </li>
          <li>
            <Link to="/bustrack" className="nav-item">
              Track Bus
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </li>
          <div className="d-flex align-items-center justify-content-start">
            <Button
              variant="contained"
              className="my-2 mx-2"
              style={{ backgroundColor: "white" }}
            >
              <Link
                to="/login"
                style={{
                  color: "rgb(18, 185, 182)",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Link>
            </Button>
          </div>
          {/* <React.Fragment id="profile_avatar">
            <Box>
              <Tooltip title="My account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment> */}
        </ul>
      </div>

      <div id="mobile" onClick={handleHambergerClick} className="mx-2">
        <i id="bar">
          {hambergerClickState ? (
                        <Fab
                        className="muiIcon"
                        size="small"
                        aria-label="cancel"
                        style={{ fontSize: "15px",color:"rgb(18, 185, 182)",backgroundColor:"white"}}
                      >
 <CloseIcon sx={{ fontSize: 33}} />
                      </Fab>
           
          ) : (
            <MenuIcon sx={{ fontSize: 33,color:"white"  }} />
          )}
        </i>
      </div>
    </nav>
  );
};

export default Header;
