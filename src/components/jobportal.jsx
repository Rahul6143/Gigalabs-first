import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome icons

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        background: "#060810",
        color: "#fff",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(90deg, #ffffff, #c1c1c1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Giga Job Portal
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ maxWidth: "900px", mx: "auto", color: "#cfd3d6" }}
        >
          The GiGa Job Portal is a complete ecosystem for students and
          professionals aiming for career success. With thousands of jobs
          available across all domains, it brings opportunities from over 33
          leading platforms in India— including Indeed, Naukri, Shine, and
          Apna—all into one place. This ensures that learners and job seekers
          have diverse career options at their fingertips, without the need to
          navigate multiple websites.
        </Typography>

        {/* Features */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            mt: 6,
          }}
        >
          {featuresData.map((f, index) => (
            <Paper
              key={index}
              onClick={() => setCurrent(index)}
              sx={{
                background: current === index ? "#2b3138" : "#1a1f24",
                color: "#fff",
                px: 2,
                py: 1,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow:
                  current === index ? "0 0 10px #4ade80" : "0 0 0 transparent",
                transform: current === index ? "scale(1.05)" : "scale(1)",
                "&:hover": {
                  transform: "scale(1.08)",
                  background: "#2b3138",
                },
              }}
            >
              <i className={`fa-solid ${f.icon}`} style={{ color: "#4ade80" }} />
              {f.text}
            </Paper>
          ))}
        </Box>

        {/* Arrows (SVGs inlined) */}
        <Box
          className="feature-arrows"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            mt: 3,
          }}
        >
          {/* Arrow 1 */}
          <Box className={`arrow-container ${current === 0 ? "active" : ""}`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 20 H70 L60 10 M70 20 L60 30"
                stroke={current === 0 ? "#4ade80" : "#555"}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </Box>

          {/* Arrow 2 */}
          <Box className={`arrow-container ${current === 1 ? "active" : ""}`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 20 H70 L60 10 M70 20 L60 30"
                stroke={current === 1 ? "#4ade80" : "#555"}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </Box>

          {/* Arrow 3 */}
          <Box className={`arrow-container ${current === 2 ? "active" : ""}`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 20 H70 L60 10 M70 20 L60 30"
                stroke={current === 2 ? "#4ade80" : "#555"}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </Box>

          {/* Arrow 4 */}
          <Box className={`arrow-container ${current === 3 ? "active" : ""}`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 20 H70 L60 10 M70 20 L60 30"
                stroke={current === 3 ? "#4ade80" : "#555"}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </Box>

          {/* Arrow 5 */}
          <Box className={`arrow-container ${current === 4 ? "active" : ""}`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 20 H70 L60 10 M70 20 L60 30"
                stroke={current === 4 ? "#4ade80" : "#555"}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </Box>
        </Box>

        {/* Cards */}
        <Box
          className="cards"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "200px",
            mt: 4,
          }}
        >
          {cardsData.map((text, index) => (
            <Paper
              key={index}
              className={`card ${current === index ? "active" : ""}`}
              sx={{
                position: "absolute",
                width: "600px",
                maxWidth: "90%",
                background: "#1a1f24",
                p: 3,
                borderRadius: "16px",
                border: "2px solid #8d8d8d1e",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                opacity: current === index ? 1 : 0,
                transform: current === index ? "scale(1)" : "scale(0.95)",
                transition: "all 0.6s ease",
                zIndex: current === index ? 10 : 1,
              }}
            >
              <Typography sx={{ color: "#d1d5db" }}>{text}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Logo Carousel */}
        <Box
          className="logo-carousel"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            mt: 6,
            position: "relative",
            width: "90%",
            mx: "auto",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <Box
            className="logo-track"
            sx={{
              display: "inline-flex",
              gap: "3rem",
              animation: "scroll 55s linear infinite",
              "@keyframes scroll": {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(-50%)" },
              },
            }}
          >
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
