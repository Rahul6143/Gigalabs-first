/* eslint-disable no-dupe-keys */
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Container, Button, Chip, Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import '@fontsource/roboto/300.css'; // Light
import '@fontsource/roboto'; // Regular
// import '@fontsource/roboto/700.css'; // Bold



const useStyles = makeStyles({
  root: {
    Height: "auto",
    paddingTop: "4rem",
    overflowX: "hidden",
    background: "linear-gradient(to bottom right, #312e81, #581c87, #9d174d)",
    position: "relative",
    alignItems: "center",
  },
  pattern: {
    position: "relative",
    alignContent: "center",
    inset: 0,
    opacity: 0.2,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
  },
  // Animation definition
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(10px)" },
    "100%": { transform: "translateY(0px)" },
  },

  // Floating icon base styles
  floatingIcon: {
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon1: {
    position: "absolute",
    top: 80,
    left: 80,
    height: '40px !important',
    width: '40px !important',
    // fontS'ize: '50 !important',
    color: "#60a5fa", // primary.light
     animationDuration: "4s",
    animationDelay: "0s",
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon2: {
    position: "absolute",
    top: 130,
    right: 160,
    height: '40px !important',
    width: '40px !important',
    color: "#a78bfa", // secondary.light
    animationDuration: "5s",
    animationDelay: "1s",
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon3: {
    position: "absolute",
    top: 160,
    left: "33%",
    height: '40px !important',
    width: '40px !important',
    color: "#facc15", // warning.light
    animationDuration: "4.5s",
    animationDelay: "0.5s",
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon4: {
    position: "absolute",
    top: 190,
    right: 80,
    height: '40px !important',
    width: '40px !important',
    color: "#f97316", // orange
     animationDuration: "5.2s",
    animationDelay: "0.2s",
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon5: {
    position: "absolute",
    top: 320,
    left: 160,
    height: '40px !important',
    width: '40px !important',
    color: "#4ade80", // success.light
     animationDuration: "4.8s",
    animationDelay: "0.8s",
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  container: {
    position: "center",
    zIndex: 10,
    paddingTop: "3rem",
    paddingBottom: "2rem",
    textAlign: "center",
  },
  chipBadge: {
    marginBottom: "1.5rem",
    backgroundColor: "#ffffff1a !important",
    color: "#fff !important",
    border: "1px solid #ffffff4a!important",
    backdropFilter: "blur(8px)",
    padding:"8px 16px !important",
    fontWeight: "400 !important",
    borderRadius: "9999px",
  },
  heading1: {
    // fontWeight: 700,
    fontFamily: 'Roboto',
    fontWeight: "bold !important",
    marginBottom: "0.5rem !important",
    background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heading2: {
    color: "rgba(255,255,255,0.9)",
    fontWeight: "bold !important",
    marginBottom: "1.5rem !important",
  },
  subtitle: {
    fontSize: "1.3rem !important",
    fontWeight: "400 !important" ,
    color: "rgba(255,255,255,0.8)",
    padding: "1rem 12rem",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "1.5rem !important",
    lineHeight: '1.7 !important',
  },
  featureStack: {
    justifyContent: "center",
    color: "rgba(255,255,255,0.9)",
    flexWrap: "wrap",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: "1.5rem",
  },
  featureChip: {
    backgroundColor: "#ffffff1a !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    border: "1px solid #ffffff4a!important",
    backdropFilter: "blur(8px)",
    padding:"16px 16px !important",
    margin: "0.5rem !important",
    fontWeight: "400 !important",
    fontSize: "1rem !important",
    borderRadius: "9999px",
  },
  button: {
    backgroundColor: "#ffffff !important ",
    color: "#581c87 !important",
    padding: "16px 48px !important",
    fontSize: "1.1rem !important",
    fontWeight: 'bold !important',
    borderRadius: "99px !important",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.9)",
      boxShadow: "0px 8px 12px rgba(0,0,0,0.2)",
    },
    marginTop: "1.5rem !important",
    marginBottom: "2rem !important",
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // height: "1rem",
    // background: "linear-gradient(to top, white, rgba(255,255,255,0.95) 10%, transparent)",
  },
});

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* Animated Background Pattern */}
      <Box className={classes.pattern} />

      {/* Floating Icons */}
      <PsychologyIcon className={classes.icon1} />
      <CodeIcon className={classes.icon2} />
      <LightbulbIcon className={classes.icon3} />
      <RocketLaunchIcon className={classes.icon4} />
      <TrendingUpIcon className={classes.icon5} />

      {/* Main Content */}
      <Container className={classes.container}>
        <Box>
          <Chip
            icon={<BoltIcon style={{ fontSize: 20, color: "white" }} />}
            label="Innovation Lab by Gigaversity"
            className={classes.chipBadge}
          />

          <Typography variant="h2" className={classes.heading1}>
            GigaLabs
          </Typography>
          <Typography variant="h3" className={classes.heading2}>
            Innovation Hub
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Welcome to GigaLabs, the dedicated innovation hub of Gigaversity,
            where ideas transform into impactful solutions. As one of the most
            dynamic innovation labs, GigaLabs is designed to bridge the gap
            between imagination and execution.
          </Typography>

          <Stack direction="row" spacing={2} className={classes.featureStack}>
            {[
              "Technology Innovations",
              "Research Labs",
              "AI Lab",
              "Product Development",
              
            ].map((text, index) => (
              <Chip
                key={index}
                label={text}
                className={classes.featureChip}
              />
            ))}
          </Stack>

          <Button variant="contained" endIcon={<ChevronRightIcon />} className={classes.button}>
            Get Started
          </Button>
        </Box>
      </Container>

      {/* Bottom Gradient */}
      <Box className={classes.bottomGradient} />
    </Box>
  );
};

export default HeroSection;
