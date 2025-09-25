import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    "@media (max-width:1200px)": {
      padding: "2.5rem 3rem",
    },
    "@media (max-width:960px)": {
      padding: "2rem 2.5rem",
    },
    "@media (max-width:600px)": {
      padding: "1.5rem 1.5rem",
    },
    "@media (max-width:480px)": {
      padding: "1rem",
    },
    "@media (max-width:375px)": {
      padding: "0.8rem",
    },
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
    "@media (max-width:1200px)": {
      gap: "0.8rem",
    },
    "@media (max-width:960px)": {
      flexDirection: "row",
    },
    "@media (max-width:600px)": {
      flexDirection: "column !important",
      textAlign: "center",
    },
    "@media (max-width:480px)": {
      gap: "0.6rem",
    },
    "@media (max-width:375px)": {
      gap: "0.5rem",
    },
  },
  reverse: {
    flexDirection: "row-reverse",
    "@media (max-width:600px)": {
      flexDirection: "column !important",
    },
  },
  text: {
    flex: 1,
    minWidth: "280px",
    "@media (max-width:600px)": {
      minWidth: "100%",
    },
  },
  title1: {
    fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
    fontSize: "2.8rem !important",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    color: "#000000",
    fontWeight: "600 !important",
    "@media (max-width:1200px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width:960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width:600px)": {
      fontSize: "1.9rem !important",
    },
    "@media (max-width:480px)": {
      fontSize: "1.7rem !important",
    },
    "@media (max-width:375px)": {
      fontSize: "1.5rem !important",
    },
  },
  title2: {
    fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
    fontSize: "2.8rem !important",
    marginBottom: "1rem",
    textAlign: "right",
    color: "#000000",
    paddingBottom: "0.5rem",
    fontWeight: "600 !important",
    "@media (max-width:1200px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width:960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width:600px)": {
      fontSize: "1.9rem !important",
      textAlign: "center",
    },
    "@media (max-width:480px)": {
      fontSize: "1.7rem !important",
    },
    "@media (max-width:375px)": {
      fontSize: "1.5rem !important",
    },
  },
  paragraph1: {
    fontSize: "1.2rem !important",
    fontFamily: `"Inter", sans-serif !important`,
    color: "#333333c7",
    "@media (max-width:1200px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width:960px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width:600px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width:480px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width:375px)": {
      fontSize: "0.85rem !important",
    },
  },
  paragraph2: {
    fontSize: "1.2rem !important",
    fontFamily: `"Inter", sans-serif !important`,
    color: "#333333c7",
    textAlign: "right",
    "@media (max-width:1200px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width:960px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width:600px)": {
      textAlign: "center",
      fontSize: "0.95rem !important",
    },
    "@media (max-width:480px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width:375px)": {
      fontSize: "0.85rem !important",
    },
  },
  imageBox: {
    flex: 0.8,
    minWidth: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:600px)": {
      minWidth: "150px",
    },
    "@media (max-width:480px)": {
      minWidth: "120px",
    },
    "@media (max-width:375px)": {
      minWidth: "100px",
    },
  },
  imagePlaceholder: {
    width: "180px",
    height: "180px",
    borderRadius: "16px",
    background: "none !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.2rem",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
    "@media (max-width:600px)": {
      width: "150px",
      height: "150px",
    },
    "@media (max-width:480px)": {
      width: "130px",
      height: "130px",
    },
    "@media (max-width:375px)": {
      width: "110px",
      height: "110px",
    },
  },
});

const sectionOneTitle = "Technology Innovations at GigaLabs";
const sectionOneText =
  "At its core, GigaLabs is a space for bold experiments and practical outcomes. Every solution is rooted in technology innovations that redefine how students learn, how professionals prepare, and how industries adopt new methods. From resume builders enhanced with AI to AI labs conducting skill assessments, we are committed to making the future accessible today.";

const sectionTwoTitle = "Product Innovation and Research";
const sectionTwoText =
  "What sets GigaLabs apart is our commitment to real product innovation. Unlike conventional setups, our team at Gigaversity combines deep academic expertise with hands-on industry knowledge. This dual approach makes our research laboratory not just a place for theories but a launchpad for viable products.";

const Innovations1 = () => {
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
            <img
              src="/ignite.svg"
              alt="Idea"
              style={{ width: "50%", height: "50%" }}
            />
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
            <img
              src="/rocket.svg"
              alt="Rocket"
              style={{ width: "60%", height: "60%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Innovations1;
