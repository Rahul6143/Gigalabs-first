/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome icons

const useStyles = makeStyles({
  root: {
    background: "#060810 !important",
    color: "#ffffff",
    // minHeight: "700px",
    height: "auto",
    paddingTop: "80px !important",
    paddingBottom: "32px",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold !important",
    marginBottom: "16px !important",
    background: "linear-gradient(90deg, #ffffff, #c1c1c1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    maxWidth: "1200px",
    margin: "0 126px",
    paddingLeft: "16px",
    color: "#cfd3d6 !important",
    textAlign: "center",
  },
  featuresBox: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "48px",
  },
  featurePaper: {
    background: "#1a1f24 !important",
    color: "#ffffff !important",
    padding: "8px 16px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.3s ease !important",
    "&:hover": {
      transform: "scale(1.08) !important",
      background: "#2b3138 !important",
    },
  },
  featurePaperActive: {
    background: "#2b3138 !important",
    boxShadow: "0 0 10px #4ade80 !important",
    transform: "scale(1.05) !important",
  },
  icon: {
    color: "#4ade80 !important",
  },
  arrowsBox: {
    display: "flex",
    justifyContent: "center",
    gap: "120px",
    // marginTop: "24px",
  },
  arrowContainer: {
    "& svg": {
      // width: "100px",
      // height: "100px",
    },
  },
  cardBox: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    position: "relative",
    height: "200px",
    // paddingTop: "-50px",
    marginTop: "-32px",
    
  },
  card: {
    position: "absolute",
    width: "600px",
    maxWidth: "90%",
    background: "#1a1f24 !important",
    padding: "24px",
    borderRadius: "16px",
    border: "2px solid #8d8d8d1e !important",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4) !important",
    opacity: 0,
    transform: "scale(0.95)",
    transition: "all 0.6s ease",
    zIndex: 1,
  },
  cardActive: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: 10,
  },
  cardText: {
    color: "#d1d5db !important",
  },
  logoCarousel: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "48px",
    position: "relative",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "42px",
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  },
  logoTrack: {
    display: "inline-flex",
    gap: "3rem",
    animation: "$scroll 55s linear infinite",
  },
  "@keyframes scroll": {
    from: {
      transform: "translateX(0)",
    },
    to: {
      transform: "translateX(-50%)",
    },
  },
});

const featuresData = [
  { icon: "fa-robot", text: "AI Mock Interviews" },
  { icon: "fa-brain", text: "Skill-Based Assessments" },
  { icon: "fa-list", text: "Extensive Listings" },
  { icon: "fa-compass", text: "Effortless Navigation" },
  { icon: "fa-bell", text: "Job Notifications" },
];

const cardsData = [
  "Simulate real job interviews with our AI-powered interviewer, practice your answers, and get instant feedback to improve performance.",
  "Take industry-standard tests to evaluate your skills and receive personalized job recommendations based on your strengths.",
  "Browse thousands of job openings across 33+ platforms, all consolidated in one seamless experience.",
  "Our intuitive interface makes it easy to filter, search, and apply to jobs, saving you valuable time.",
  "Stay updated with instant alerts whenever new job opportunities matching your skills are posted.",
];

const logos = [
  "hiring-partners/accenture-logo.png",
  "hiring-partners/Adidas-logo.svg",
  "hiring-partners/Adobe.svg",
  "hiring-partners/adp.svg",
  "hiring-partners/amazon-logo-transparent.png",
  "hiring-partners/applexus.png",
  "hiring-partners/BharatPe1.png",
  "hiring-partners/biznext.png",
  "hiring-partners/capgemini.svg",
  "hiring-partners/caterpillar-preview.svg",
  "hiring-partners/Cred1.png",
  "hiring-partners/deloitte.svg",
  "hiring-partners/Dell.svg",
  "hiring-partners/Flipkart.svg",
  "hiring-partners/goldman-sachs1.png",
  "hiring-partners/happyfox.svg",
  "hiring-partners/Infosys.svg",
  "hiring-partners/Infrrt.svg",
  "hiring-partners/meesho.png",
  "hiring-partners/Medplus_logo.svg",
  "hiring-partners/Mu-Sigma.svg",
  "hiring-partners/Tech_Mahindra.svg",
  "hiring-partners/nielseniq.webp",
  "hiring-partners/paytm.svg",
  "hiring-partners/pharmeasy.svg",
  "hiring-partners/PhonePe.svg",
  "hiring-partners/skillventory.png",
  "hiring-partners/Synopsys_Logo.svg",
  "hiring-partners/tcs.svg",
  "hiring-partners/Wipro-2.svg",
  "hiring-partners/zoho.svg",
];

const GigaJobPortal = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Giga Job Portal
        </Typography>

        <Typography variant="body1" className={classes.description}>
          The GiGa Job Portal is a complete ecosystem for students and
          professionals aiming for career success. With thousands of jobs
          available across all domains, it brings opportunities from over 33
          leading platforms in India—including Indeed, Naukri, Shine, and
          Apna—all into one place. This ensures that learners and job seekers
          have diverse career options at their fingertips, without the need to
          navigate multiple websites.
        </Typography>

        <Box className={classes.featuresBox}>
          {featuresData.map((f, index) => (
            <Paper
              key={index}
              onClick={() => setCurrent(index)}
              className={`${classes.featurePaper} ${
                current === index ? classes.featurePaperActive : ""
              }`}
            >
              <i className={`fa-solid ${f.icon} ${classes.icon}`} />
              {f.text}
            </Paper>
          ))}
        </Box>

        <Box className={classes.arrowsBox}>
          {cardsData.map((_, index) => (
            <Box key={index} className={classes.arrowContainer}>
              {index === 0 && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.9445661388727 232.21544479424125" width="120" height="100">
                  <g strokeLinecap="round">
                    <g transform="translate(21.075 10)">
                      <path d="M0 0 C2.16 14.82, -33.54 53.57, 12.94 88.94 C59.41 124.3, 234.55 191.67, 278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M253.9 210.89 C262.45 211.34, 270.99 211.8, 278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M260.6 195.15 C266.85 200.99, 273.1 206.83, 278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                    </g>
                  </g>
                </svg>
              )}
              {index === 1 && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.5041901698314 307.31977189286783" width="80" height="75">
                  <g strokeLinecap="round">
                    <g transform="translate(10 10)">
                      <path d="M0 0 C43.58 47.89, 217.92 239.43, 261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M239.37 275.7 C247.66 280.05, 255.95 284.41, 261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M252.01 264.19 C255.57 272.85, 259.12 281.52, 261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                    </g>
                  </g>
                </svg>
              )}
              {index === 2 && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.059643361439157 348.2948698282619" width="20" height="75">
                  <g strokeLinecap="round">
                    <g transform="translate(10 10)">
                      <path d="M0 0 C0.18 54.72, 0.88 273.58, 1.06 328.29"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M-7.57 304.83 C-4.24 313.88, -0.91 322.92, 1.06 328.29"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M9.53 304.78 C6.27 313.84, 3 322.91, 1.06 328.29"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                    </g>
                  </g>
                </svg>
              )}
              {index === 3 && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.5041901698314 307.31977189286783" width="80" height="75">
                  <g strokeLinecap="round">
                    <g transform="translate(271.5 10)">
                      <path d="M0 0 C-43.58 47.89, -217.92 239.43, -261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M-252.01 264.19 C-255.57 272.85, -259.12 281.52, -261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M-239.37 275.7 C-247.66 280.05, -255.95 284.41, -261.5 287.32"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                    </g>
                  </g>
                </svg>
              )}
              {index === 4 && (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.94456613887087 232.21544479424125" width="120" height="100">
                  <g strokeLinecap="round">
                    <g transform="translate(288.87 10)">
                      <path d="M0 0 C-2.16 14.82, 33.54 53.57, -12.94 88.94 C-59.41 124.3, -234.55 191.67, -278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M-260.6 195.15 C-266.85 200.99, -273.1 206.83, -278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                      <path d="M-253.9 210.89 C-262.45 211.34, -270.99 211.8, -278.87 212.22"  stroke={current === index ? "#4ade80" : "#1e1e1e"} strokeWidth="4" fill="none"/>
                    </g>
                  </g>
                </svg>
              )}
            </Box>
          ))}
        </Box>

        <Box className={classes.cardBox}>
          {cardsData.map((text, index) => (
            <Paper
              key={index}
              className={`${classes.card} ${
                current === index ? classes.cardActive : ""
              }`}
            >
              <Typography className={classes.cardText}>{text}</Typography>
            </Paper>
          ))}
        </Box>

        <Box className={classes.logoCarousel}>
          <Box className={classes.logoTrack}>
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                style={{
                  height: "50px",
                  filter: "grayscale(100%) brightness(80%)",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GigaJobPortal;
