import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import idea from "../assets/idea.svg";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    height: "auto",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 4rem",
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: "4rem",
    gap: "1rem",
    flexWrap: "wrap",
    "@media (max-width:768px)": {
      flexDirection: "column !important",
      textAlign: "center",
    },
  },
  reverse: {
    flexDirection: "row-reverse",
    "@media (max-width:768px)": {
      flexDirection: "column !important",
    },
  },
  text: {
    flex: 1,
    minWidth: "280px",
  },
  title1: {
    fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
    fontSize: "2rem !important",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    color: "#000000",
    fontWeight: '600 !important',
    "@media (max-width:768px)": {
      fontSize: "1.5rem",
    },
  },
  title2: {
    fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
    fontSize: "2rem !important",
    marginBottom: "1rem",
    textAlign: "right",
    color: "#000000",
    paddingBottom: "0.5rem",
    fontWeight: '600 !important',
    "@media (max-width:768px)": {
      fontSize: "1.5rem",
    },
  },
  paragraph1: {
    fontSize: "1rem !important",
    fontFamily: `"Inter", sans-serif !important`,
    color: "#333333c7",
    
  },
  paragraph2: {
    fontSize: "1rem !important",
    fontFamily: `"Inter", sans-serif !important`,
    color: "#333333c7",
    textAlign: "right",
  },
  img: {
    // width: "100%",
    // height: "auto",

  },
  imageBox: {
    flex: 0.8,
    minWidth: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    width: "180px",
    height: "180px",
    borderRadius: "16px",
    // background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
    background:"none !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.2rem",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
    "@media (max-width:768px)": {
      width: "150px",
      height: "150px",
    },
  },
});

/* -------------------------
   Content (Editable Here)
-------------------------- */
const sectionOneTitle = "Technology Innovations at GigaLabs";
const sectionOneText =
  "At its core, GigaLabs is a space for bold experiments and practical outcomes. Every solution is rooted in technology innovations that redefine how students learn, how professionals prepare, and how industries adopt new methods. From resume builders enhanced with AI to AI labs conducting skill assessments, we are committed to making the future accessible today.";

const sectionTwoTitle = "Product Innovation and Research";
const sectionTwoText =
  "What sets GigaLabs apart is our commitment to real product innovation. Unlike conventional setups, our team at Gigaversity combines deep academic expertise with hands-on industry knowledge. This dual approach makes our research laboratory not just a place for theories but a launchpad for viable products.";

const Innovations = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        {/* Section 1 */}
        <Box className={classes.section}>
          <Box className={classes.text}>
            <Typography className={classes.title1}>{sectionOneTitle}</Typography>
            <Typography className={classes.paragraph1}>
              {sectionOneText}
            </Typography>
          </Box>
          <Box className={classes.imageBox}>
            {/* <Paper elevation={6} className={classes.imagePlaceholder}> */}
              <img 
                src="/ignite.svg" 
                alt="Idea" 
                style={{ width: "50%", height: "50%" }} 
              />
            {/* </Paper> */}
          </Box>
        </Box>

        {/* Section 2 */}
        <Box className={`${classes.section} ${classes.reverse}`}>
          <Box className={classes.text}>
            <Typography className={classes.title2}>{sectionTwoTitle}</Typography>
            <Typography className={classes.paragraph2}>
              {sectionTwoText}
            </Typography>
          </Box>
          <Box className={classes.imageBox}>
            {/* <Paper elevation={6} className={classes.imagePlaceholder}> */}
              <img 
                src="/rocket.svg" 
                alt="Idea" 
                style={{ width: "60%", height: "60%" }} 
              />
            {/* </Paper> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Innovations;
