// Navbar.jsx
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const useStyles = makeStyles({
  appbar: {
    background:
      "linear-gradient(to bottom right, #312e81, #581c87, #9d174d) !important",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: "6px 0",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
  },
  navbarLogo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  navbarLinks: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    gap: "25px",
    margin: 0,
    padding: 0,
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  navbarLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 500,
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#d1d5db",
    },
  },
  applyBtn: {
    background: "#7D26CD",
    color: "#ffffff",
    padding: "8px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#5A189A",
    },
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  menuButton: {
    color: "#ffffff !important",
    "@media (max-width: 2560px)": {
      display: "none !important",
    },
    "@media (max-width: 950px)": {
      display: "block !important",
    },
  },
  drawerPaper: {
    width: 240,
    background: "#312e81 !important",
    color: "#ffffff",
  },
  drawerLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": {
      color: "#d1d5db",
    },
  },
});

function Navbar() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navbarLogo}>GigaLabs</div>

          {/* Desktop Links */}
          <ul className={classes.navbarLinks}>
            <li>
              <a href="#hero" className={classes.navbarLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#resume-builder" className={classes.navbarLink}>
                Resume Builder
              </a>
            </li>
            <li>
              <a href="#jobportal" className={classes.navbarLink}>
                Job Portal
              </a>
            </li>
            <li>
              <a href="#lms" className={classes.navbarLink}>
                LMS
              </a>
            </li>
            <li>
              <a href="#gigaspace" className={classes.navbarLink}>
                Giga Space
              </a>
            </li>
            <li>
              <a href="#prescreen" className={classes.navbarLink}>
                Prescreen Tool
              </a>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className={classes.applyBtn}>Apply</button>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {[
            { text: "Home", href: "#hero" },
            { text: "Resume Builder", href: "#resume-builder" },
            { text: "Job Portal", href: "#jobportal" },
            { text: "LMS", href: "#lms" },
            { text: "Giga Space", href: "#gigaspace" },
            { text: "Prescreen Tool", href: "#prescreen" },
          ].map((item) => (
            <ListItem button key={item.text}>
              <a href={item.href} className={classes.drawerLink}>
                <ListItemText primary={item.text} />
              </a>
            </ListItem>
          ))}
          <ListItem>
            <button className={classes.applyBtn}>Apply</button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
