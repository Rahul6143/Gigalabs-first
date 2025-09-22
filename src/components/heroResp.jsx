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
import "@fontsource/roboto";

const useStyles = makeStyles({
  root: {
    Height: "auto",
    paddingTop: "4rem",
    // overflowX: "hidden",
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

  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(10px)" },
    "100%": { transform: "translateY(0px)" },
  },

  floatingIcon: {
    animationName: "$float",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  icon1: {
    position: "absolute",
    top: 80,
    left: 80,
    height: "40px !important",
    width: "40px !important",
    color: "#60a5fa",
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
    height: "40px !important",
    width: "40px !important",
    color: "#a78bfa",
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
    height: "40px !important",
    width: "40px !important",
    color: "#facc15",
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
    height: "40px !important",
    width: "40px !important",
    color: "#f97316",
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
    height: "40px !important",
    width: "40px !important",
    color: "#4ade80",
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
    padding: "8px 16px !important",
    fontWeight: "400 !important",
    borderRadius: "9999px",
  },
  heading1: {
    fontFamily: "Roboto",
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
    fontWeight: "400 !important",
    color: "rgba(255,255,255,0.8)",
    padding: "1rem 12rem",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "1.5rem !important",
    lineHeight: "1.7 !important",
  },
  featureStack: {
    justifyContent: "center",
    color: "rgba(255,255,255,0.9)",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },
  featureChip: {
    backgroundColor: "#ffffff1a !important",
    color: "rgba(255, 255, 255, 0.9) !important",
    border: "1px solid #ffffff4a!important",
    backdropFilter: "blur(8px)",
    padding: "16px 16px !important",
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
    fontWeight: "bold !important",
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
  },

  /* ---------------- RESPONSIVENESS ---------------- */
  "@media (max-width: 1200px)": {
    subtitle: {
      padding: "1rem 8rem",
      fontSize: "1.2rem !important",
    },
    heading1: {
      fontSize: "2.8rem !important",
    },
    heading2: {
      fontSize: "2rem !important",
    },
  },
  "@media (max-width: 960px)": {
    subtitle: {
      padding: "1rem 4rem",
      fontSize: "1.1rem !important",
    },
    heading1: {
      fontSize: "2.4rem !important",
    },
    heading2: {
      fontSize: "1.8rem !important",
    },
    button: {
      padding: "14px 36px !important",
      fontSize: "1rem !important",
    },
  },
  "@media (max-width: 600px)": {
    subtitle: {
      padding: "1rem 2rem",
      fontSize: "1rem !important",
    },
    heading1: {
      fontSize: "2rem !important",
    },
    heading2: {
      fontSize: "1.5rem !important",
    },
    chipBadge: {
      fontSize: "0.85rem !important",
    },
    featureChip: {
      fontSize: "0.85rem !important",
      padding: "10px 12px !important",
    },
  },
  "@media (max-width: 480px)": {
    subtitle: {
      padding: "1rem 1rem",
      fontSize: "0.95rem !important",
    },
    heading1: {
      fontSize: "1.7rem !important",
    },
    heading2: {
      fontSize: "1.3rem !important",
    },
    button: {
      padding: "12px 28px !important",
      fontSize: "0.95rem !important",
    },
  },
  "@media (max-width: 375px)": {
    subtitle: {
      padding: "0.5rem 0.8rem",
      fontSize: "0.9rem !important",
    },
    heading1: {
      fontSize: "1.5rem !important",
    },
    heading2: {
      fontSize: "1.1rem !important",
    },
    featureChip: {
      fontSize: "0.75rem !important",
      padding: "8px 10px !important",
    },
    button: {
      padding: "10px 20px !important",
      fontSize: "0.9rem !important",
    },
  },
});

const HeroSection1 = () => {
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
              "Product Development",
              "AI Lab",
            ].map((text, index) => (
              <Chip key={index} label={text} className={classes.featureChip} />
            ))}
          </Stack>

          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            className={classes.button}
          >
            Get Started
          </Button>
        </Box>
      </Container>

      {/* Bottom Gradient */}
      <Box className={classes.bottomGradient} />
    </Box>
  );
};

export default HeroSection1;
