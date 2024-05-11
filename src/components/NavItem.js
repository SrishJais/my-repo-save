import { Button } from '@mui/material';
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
const NavItem = () => {

      //Arrays for menuItems and Menu links
  const menuItems = ["Home", "Bus Info", "Track Bus", "About", "Contact"];
  const menuItemUrl = [
    "/",
    "/manageBus",
    "/bustrack",
    "/about",
    "/contact",
  ];


  return (
        <ul id="navlinks">
          {menuItems.map((menuElm, index) => (
            <li>
              <NavLink  to={menuItemUrl[index]} className="nav-item">
                {menuElm}
              </NavLink>
            </li>
          ))}
          {/* ___________________Nav login button____________  */}
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
  )
}

export default NavItem;