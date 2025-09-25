// AiLabSection.jsx
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button, Modal } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    fontFamily: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif`,
    background:
      "linear-gradient(135deg, #0a0b1e 0%, #1a1b3a 30%, #2d2e5f 70%, #3f4075 100%)",
    color: "#e2e8f0",
    lineHeight: 1.6,
    fontWeight: 400,
    height: "auto",
  },
  section: {
    padding: "8rem 2rem 6rem",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    position: "relative",
    overflow: "hidden",
    "@media (max-width:1200px)": { padding: "6rem 2rem 5rem" },
    "@media (max-width:960px)": { padding: "5rem 1.5rem 4rem" },
    "@media (max-width:600px)": { padding: "4rem 1rem 3rem" },
    "@media (max-width:480px)": { padding: "3rem 1rem 2rem" },
    "@media (max-width:375px)": { padding: "2.5rem 0.8rem 2rem" },
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    "@media (max-width:1200px)": { gap: "4rem" },
    "@media (max-width:960px)": { gridTemplateColumns: "1fr", gap: "3rem" },
    "@media (max-width:600px)": { padding: "0 1rem", gap: "2.5rem" },
    "@media (max-width:480px)": { gap: "2rem" },
    "@media (max-width:375px)": { padding: "0 0.5rem", gap: "1.5rem" },
  },
  visual: {
    position: "relative",
    animation: "$slideInLeft 0.8s ease-out",
    "@media (max-width:960px)": {
      order: 2,
      display: "flex",
      justifyContent: "center",
    },
  },
  visualization: {
    position: "relative",
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:960px)": { height: "350px" },
    "@media (max-width:600px)": { height: "300px" },
    "@media (max-width:480px)": { height: "250px" },
    "@media (max-width:375px)": { height: "220px" },
  },
  brainContainer: {
    position: "relative",
    width: "240px",
    height: "300px",
    "@media (max-width:960px)": { width: "260px", height: "260px" },
    "@media (max-width:600px)": { width: "230px", height: "230px" },
    "@media (max-width:480px)": { width: "200px", height: "200px" },
    "@media (max-width:375px)": { width: "180px", height: "180px" },
  },
  orbit: {
    position: "absolute",
    border: "2px solid rgba(59,130,246,0.3)",
    borderRadius: "50%",
    animation: "$spin 20s linear infinite",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // ✅ keeps orbit centered
  },
  orbit1: {
    width: "200px",
    height: "200px",
    "@media (max-width:600px)": { width: "150px", height: "150px" },
  },
  orbit2: {
    width: "250px",
    height: "250px",
    animationDuration: "25s",
    "@media (max-width:600px)": { width: "200px", height: "200px" },
  },
  orbit3: {
    width: "300px",
    height: "300px",
    animationDuration: "30s",
    "@media (max-width:600px)": { width: "250px", height: "250px" },
  },
  node: {
    position: "absolute",
    width: "12px",
    height: "12px",
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    borderRadius: "50%",
    boxShadow:
      "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.4)",
    animation: "$nodeGlow 2s ease-in-out infinite alternate",
  },
  node1: { top: "-6px", left: "50%", transform: "translateX(-50%)" },
  node2: { bottom: "-6px", left: "50%", transform: "translateX(-50%)" },
  node3: { top: "50%", right: "-6px", transform: "translateY(-50%)" },
  node4: { top: "50%", left: "-6px", transform: "translateY(-50%)" },
  node5: { top: "3%", right: "25%" },
  node6: { bottom: "3%", left: "25%" },
  brain: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80px",
    height: "80px",
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.4)",
    animation: "$pulse 3s ease-in-out infinite",
    "@media (max-width:480px)": { width: "65px", height: "65px" },
    "@media (max-width:375px)": { width: "55px", height: "55px" },
  },
  content: {
    color: "#0f172a",
    animation: "$slideInRight 0.8s ease-out",
    "@media (max-width:960px)": { textAlign: "center" },
  },

  /* ✅ TITLE font sizes */
  title: {
    fontFamily: `"Space Grotesk", sans-serif`,
    fontSize: "2.8rem !important",
    fontWeight: "700 !important",
    lineHeight: 1.2,
    marginBottom: "1.5rem !important",
    color: "#0f172a",
    letterSpacing: "-0.02em",
    whiteSpace: "nowrap",
    "@media (max-width:1200px)": { fontSize: "2.5rem !important" },
    "@media (max-width:960px)": { fontSize: "2.2rem !important" },
    "@media (max-width:600px)": { fontSize: "1.9rem !important" },
    "@media (max-width:480px)": {
      fontSize: "1.7rem !important",
      whiteSpace: "normal",
    },
    "@media (max-width:375px)": { fontSize: "1.5rem !important" },
  },

  highlight: {
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 800,
  },

  /* ✅ DESCRIPTION font sizes */
  description: {
    fontFamily: `"Inter", sans-serif`,
    fontSize: "1.2rem !important",
    fontWeight: 400,
    lineHeight: "1.7 !important",
    marginBottom: "3rem !important",
    color: "#64748b",
    letterSpacing: "-0.01em",
    "@media (max-width:1200px)": { fontSize: "1.1rem !important" },
    "@media (max-width:960px)": { fontSize: "1rem !important" },
    "@media (max-width:600px)": {
      fontSize: "0.95rem !important",
      marginBottom: "2rem !important",
    },
    "@media (max-width:480px)": { fontSize: "0.9rem !important" },
    "@media (max-width:375px)": { fontSize: "0.85rem !important" },
  },

  cta: {
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    color: "#ffffff !important",
    fontFamily: `"Space Grotesk", sans-serif`,
    padding: "1.2rem 3rem !important",
    border: "none",
    borderRadius: "50px !important",
    fontSize: "1.1rem",
    fontWeight: "600 !important",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
    boxShadow:
      "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.4)",
    "&:hover": { transform: "translateY(-3px) scale(1.05)" },
    "@media (max-width:600px)": {
      padding: "1rem 2.5rem !important",
      fontSize: "1rem",
    },
    "@media (max-width:480px)": {
      padding: "0.9rem 2rem !important",
      fontSize: "0.95rem",
    },
    "@media (max-width:375px)": {
      padding: "0.8rem 1.8rem !important",
      fontSize: "0.9rem",
    },
  },
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    borderRadius: "20px",
    maxWidth: "450px",
    width: "90%",
    background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    border: "2px solid rgba(148,163,184,0.2)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    "@media (max-width:480px)": { padding: "20px", borderRadius: "15px" },
    "@media (max-width:375px)": { padding: "15px", borderRadius: "12px" },
  },
  popupTitle: {
    color: "#0f172a",
    fontFamily: `"Space Grotesk", sans-serif`,
    fontWeight: 700,
    marginBottom: "15px",
    fontSize: "1.8rem",
    letterSpacing: "-0.01em",
    "@media (max-width:480px)": { fontSize: "1.5rem" },
    "@media (max-width:375px)": { fontSize: "1.3rem" },
  },
  popupText: {
    color: "#475569",
    fontFamily: `"Inter", sans-serif`,
    marginBottom: "20px",
    lineHeight: 1.6,
    letterSpacing: "-0.01em",
    fontSize: "1rem",
    "@media (max-width:480px)": { fontSize: "0.95rem" },
    "@media (max-width:375px)": { fontSize: "0.9rem" },
  },
  popupButton: {
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    color: "#ffffffff !important",
    fontFamily: `"Space Grotesk", sans-serif`,
    padding: "12px 24px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    "&:hover": { transform: "translateY(-2px)" },
    "@media (max-width:480px)": { padding: "10px 20px" },
    "@media (max-width:375px)": { padding: "8px 18px", fontSize: "0.9rem" },
  },

  /* Animations */
  "@keyframes spin": {
    from: { transform: "translate(-50%, -50%) rotate(0deg)" },
    to: { transform: "translate(-50%, -50%) rotate(360deg)" },
  },
  "@keyframes pulse": {
    "0%,100%": { transform: "translate(-50%, -50%) scale(1)" },
    "50%": { transform: "translate(-50%, -50%) scale(1.1)" },
  },
  "@keyframes nodeGlow": {
    "0%": {
      boxShadow:
        "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.4)",
    },
    "100%": {
      boxShadow:
        "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.4)",
    },
  },
  "@keyframes slideInLeft": {
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "@keyframes slideInRight": {
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
}));

export default function AiLabSection1() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.root}>
      <section className={classes.section}>
        <Box className={classes.container}>
          {/* Left Visual */}
          <Box className={classes.visual}>
            <Box className={classes.visualization}>
              <Box className={classes.brainContainer}>
                <Box className={`${classes.orbit} ${classes.orbit1}`}>
                  <Box className={`${classes.node} ${classes.node1}`} />
                  <Box className={`${classes.node} ${classes.node2}`} />
                </Box>
                <Box className={`${classes.orbit} ${classes.orbit2}`}>
                  <Box className={`${classes.node} ${classes.node3}`} />
                  <Box className={`${classes.node} ${classes.node4}`} />
                </Box>
                <Box className={`${classes.orbit} ${classes.orbit3}`}>
                  <Box className={`${classes.node} ${classes.node5}`} />
                  <Box className={`${classes.node} ${classes.node6}`} />
                </Box>
                <Box className={classes.brain}></Box>
              </Box>
            </Box>
          </Box>

          {/* Right Content */}
          <Box className={classes.content}>
            <Typography variant="h2" className={classes.title}>
              AI Lab for the Next Big Breakthrough
            </Typography>
            <Typography className={classes.description}>
              Artificial Intelligence is no longer the future - it is the
              present. At GigaLabs, our dedicated AI lab empowers learners and
              researchers to explore AI-driven career tools, skill assessments,
              and intelligent platforms. Whether it's resume optimization, AI
              interviews, or adaptive learning paths, our work proves that
              innovation labs can accelerate breakthroughs across industries.
            </Typography>
            <Button className={classes.cta} onClick={() => setOpen(true)}>
              Explore AI Lab
            </Button>
          </Box>
        </Box>
      </section>

      {/* Popup Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className={classes.modalContent}>
          <Typography className={classes.popupTitle}>Apply Now</Typography>
          <Typography className={classes.popupText}>
            Thank you for your interest in GigaLabs! Join our innovation
            community and start building the future with us.
          </Typography>
          <Button
            className={classes.popupButton}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
