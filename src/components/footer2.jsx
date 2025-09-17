import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles({
  bottomSection: {
    backgroundColor: "#1f2937", // gray-900
    color: "#ffffff",
    borderTop: "1px solid #374151", // slightly lighter gray for border
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (min-width: 768px)": {
      flexDirection: "row",
    },
  },
  text: {
    color: "#9ca3af", // gray-400
    fontSize: "0.875rem",
    marginBottom: "1rem",
    "@media (min-width: 768px)": {
      marginBottom: 0,
    },
  },
  iconContainer: {
    display: "flex",
    gap: "1rem",
  },
  iconButton: {
    color: "#9ca3af !important", // gray-400
    "&:hover": {
      color: "#ffffff",
    },
  },
});

export default function GigaLabsBottom() {
  const classes = useStyles();

  return (
    <Box className={classes.bottomSection}>
      <Container className={classes.container}>
        <Typography className={classes.text}>
          &copy; 2023 GigaLabs. All rights reserved.
        </Typography>

        <Box className={classes.iconContainer}>
          <Link href="#" underline="none">
            <IconButton className={classes.iconButton}>
              <XIcon />
            </IconButton>
          </Link>
          <Link href="#" underline="none">
            <IconButton className={classes.iconButton}>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="#" underline="none">
            <IconButton className={classes.iconButton}>
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="#" underline="none">
            <IconButton className={classes.iconButton}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
