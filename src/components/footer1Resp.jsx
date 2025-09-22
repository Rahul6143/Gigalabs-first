import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Container, Link, List, ListItem } from "@mui/material";
import MailIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#1f2937", // gray-900
    color: "#ffffff",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  columns: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  column: {
    flex: "1 1 200px",
    minWidth: "200px",
  },
  heading: {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  text: {
    color: "#9ca3af", // gray-400
    fontSize: "0.875rem",
    lineHeight: "1.5",
    // paddingTop: "0.25rem",
  },
  link: {
    color: "#9ca3af !important",
    fontSize: "0.875rem",
    textDecoration: "none !important",
    "&:hover": {
      color: "#ffffff",
    },
  },
  list: {
    padding: 0,
    listStyle: "none",
    margin: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "left !important",
    marginBottom: "0.5rem",
    paddingLeft : '0 !important',
  },
  icon: {
    fontSize: "1rem",
    color: "#9ca3af",
    marginRight: "0.5rem",
  },

  /* 📱 RESPONSIVENESS */
  "@media (max-width: 1200px)": {
    container: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  "@media (max-width: 960px)": {
    columns: {
      gap: "1.5rem",
    },
    heading: {
      fontSize: "1rem",
    },
    text: {
      fontSize: "0.8rem",
    },
  },
  "@media (max-width: 600px)": {
    columns: {
      flexDirection: "column",
      gap: "2rem",
      alignItems: "center", // ✅ center align columns
      textAlign: "center", // ✅ center align text
    },
    column: {
      minWidth: "100%",
      maxWidth: "500px",
    },
    listItem: {
      justifyContent: "center", // ✅ center icons + text
    },
  },
  "@media (max-width: 480px)": {
    heading: {
      fontSize: "0.95rem",
    },
    text: {
      fontSize: "0.75rem",
    },
    link: {
      fontSize: "0.75rem",
    },
    icon: {
      fontSize: "0.9rem",
    },
  },
  "@media (max-width: 375px)": {
    container: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
    heading: {
      fontSize: "0.9rem",
    },
    text: {
      fontSize: "0.7rem",
    },
    link: {
      fontSize: "0.7rem",
    },
    columns: {
      gap: "1rem",
    },
  },
});

export default function GigaLabsFooter1() {
  const classes = useStyles();

  useEffect(() => {
    // No initialization needed for MUI icons
  }, []);

  return (
    <Box component="footer" className={classes.footer} id="contact">
      <Container className={classes.container}>
        <Box className={classes.columns}>
          {/* Column 1: About */}
          <Box className={classes.column}>
            <Typography className={classes.heading}>About GigaLabs</Typography>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Typography className={classes.text}>
                  GigaLabs is the innovation hub of Gigaversity, dedicated to creating
                  cutting-edge solutions that drive progress and transformation.
                </Typography>
              </ListItem>
            </List>
            
          </Box>

          {/* Column 2: Quick Links */}
          <Box className={classes.column}>
            <Typography className={classes.heading}>Quick Links</Typography>
            <List className={classes.list}>
              {[
                { href: "#hero", text: "Home" },
                { href: "#resume", text: "Resume Builder" },
                { href: "#gigaspace", text: "Gigaspace" },
                { href: "#jobs", text: "Job Portal" },
                { href: "#lms", text: "LMS" },
                { href: "#prescreener", text: "Prescreener Tool" },
              ].map((item, index) => (
                <ListItem key={index} className={classes.listItem}>
                  <Link href={item.href} className={classes.link}>
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Column 3: Resources */}
          <Box className={classes.column}>
            <Typography className={classes.heading}>Resources</Typography>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Link href="#" className={classes.link}>
                  Blog
                </Link>
              </ListItem>
            </List>
          </Box>

          {/* Column 4: Contact */}
          <Box className={classes.column}>
            <Typography className={classes.heading}>Contact Us</Typography>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <MailIcon className={classes.icon} />
                <Typography className={classes.text}>
                  info@gigaversity.in
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <PhoneIcon className={classes.icon} />
                <Typography className={classes.text}>+91 80621 79357</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <LocationOnIcon className={classes.icon} />
                <Typography className={classes.text}>
                  The Headquarters, Dwaraka Pride, Hitech City, 500081, Hyderabad,
                  Telangana, India
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
