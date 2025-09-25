// WhyChooseGigaLabs.jsx
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Zap, Target, Users, Check, X } from "lucide-react";

const useStyles = makeStyles(() => ({
  root: {
    height: "auto",
    display: "flex",
    alignItems: "center !important",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
    background:
      "linear-gradient(135deg, #070712 0%, #111229 30%, #231f3a 70%, #2b2743 100%)",
    color: "#e6eef6",
    position: "relative",
    "@media (max-width: 375px)": {
      alignItems: "center !important",
    },
  },

  section: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    padding: "4rem 1.5rem",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.03'%3E%3Cpath d='m40 0 20 20-20 20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") repeat",
    },
  },

  container: {
    margin: "0 -1rem",
    padding: "0 2rem",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",

    "@media (max-width: 1200px)": {
      gap: "2rem",
      padding: "0 1.5rem",
    },
    "@media (max-width: 960px)": {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
    "@media (max-width: 600px)": {
      padding: "1 1rem",
    },
    "@media (max-width: 480px)": {
      gap: "1.5rem",
      padding: "0 1rem",
    },
    "@media (max-width: 375px)": {
      width: "100%",
      padding: "0 1rem", // ✅ prevent content from hugging left
    },
  },

  column: {
    flex: "1 1 50%", // ✅ equal width
    maxWidth: "50%",

    "@media (max-width: 960px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },

  title: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "2.8rem !important",
    fontWeight: "700 !important",
    lineHeight: "1 !important",
    color: "#f8fafc",
    letterSpacing: "-0.02em",
    marginBottom: "1.2rem !important",

    "@media (max-width: 1200px)": {
      fontSize: "2.5rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.9rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.7rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.5rem !important",
    },
  },

  highlight: {
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: "1.2rem !important",
    fontWeight: "400 !important",
    lineHeight: "1.9 !important",
    marginBottom: "1rem !important",
    color: "#cbd5e1",

    "@media (max-width: 1200px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
    },
  },

  benefitsGrid: {
    display: "grid",
    gap: "1rem",
    marginBottom: "2rem",
  },

  benefitItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 12,
    border: "1px solid rgba(148,163,184,0.08)",
    backdropFilter: "blur(8px)",

    "@media (max-width: 600px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  benefitIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    color: "#fff",
    flexShrink: 0,

    "@media (max-width: 375px)": {
      width: 36,
      height: 36,
    },
  },

  benefitTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#f1f5f9",

    "@media (max-width: 600px)": {
      fontSize: "1.05rem",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
    },
  },

  cta: {
    marginTop: "1.5rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    color: "#fff !important",
    fontFamily: "Space Grotesk, sans-serif",
    padding: "16px 34px !important",
    borderRadius: "50px !important",
    fontSize: "1.15rem",
    fontWeight: 700,
    textTransform: "none",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
    },

    "@media (max-width: 600px)": {
      padding: "14px 28px !important",
      fontSize: "1rem",
    },
    "@media (max-width: 375px)": {
      padding: "12px 22px !important",
      fontSize: "0.95rem",
    },
  },

  comparisonCard: {
    background: "#fff",
    borderRadius: "20px !important",
    padding: "2.5rem",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    border: "1px solid rgba(148,163,184,0.12)",

    "@media (max-width: 600px)": {
      padding: "1.5rem",
    },
    "@media (max-width: 375px)": {
      padding: "1rem",
    },
  },

  headerTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "1.2rem !important",
    fontWeight: "800 !important",
    color: "#0f172a",
    marginBottom: 6,
    "@media (max-width: 375px)": {
      fontSize: "1rem !important",
    },
  },

  comparisonSubtitle: {
    color: "#6b7280",
    fontSize: "1rem",

    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.7rem !important",
    },
  },

  comparisonGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    marginTop: "1.5rem",

    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width: 600px)": {
      gap: "1rem",
      alignItems: "center",
    },
  },

  columnHeader: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 700,
    padding: "1rem",
    textAlign: "center",
    borderRadius: 12,
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },

  gigalabsHeader: {
    background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
    color: "#fff",
  },

  othersHeader: {
    background: "rgba(148,163,184,0.16)",
    color: "#334155",
  },

  comparisonItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.7rem",
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    textAlign: "left",
    color: "#475569",

    "@media (max-width: 600px)": {
      fontSize: "0.95rem",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.65rem",
    },
  },

  checkIcon: {
    color: "#22c55e",
  },

  xIcon: {
    color: "#ef4444",
  },
}));

export default function WhyChooseGigaLabs1() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Box className={classes.container}>
          {/* Left */}
          <Box className={classes.column}>
            <Typography className={classes.title}>
              Why Choose{" "}
              <Box component="span" className={classes.highlight}>
                GigaLabs
              </Box>{" "}
              Over Other Research Labs?
            </Typography>

            <Typography className={classes.subtitle}>
              While there are many research labs and academic institutions,
              GigaLabs stands apart by blending research with execution. Our
              goal is not limited to creating papers or prototypes — we aim to
              deliver real-world applications.
            </Typography>

            <Typography className={classes.subtitle}>
              Students and professionals who work with us benefit from:
            </Typography>

            <Box className={classes.benefitsGrid}>
              <Box className={classes.benefitItem}>
                <Box className={classes.benefitIcon}>
                  <Zap size={20} />
                </Box>
                <Typography className={classes.benefitTitle}>
                  Access to cutting-edge tech innovation
                </Typography>
              </Box>

              <Box className={classes.benefitItem}>
                <Box className={classes.benefitIcon}>
                  <Target size={20} />
                </Box>
                <Typography className={classes.benefitTitle}>
                  Projects built from genuine industry challenges
                </Typography>
              </Box>

              <Box className={classes.benefitItem}>
                <Box className={classes.benefitIcon}>
                  <Users size={20} />
                </Box>
                <Typography className={classes.benefitTitle}>
                  A collaborative ecosystem within an advanced research
                  laboratory
                </Typography>
              </Box>
            </Box>

            <Button className={classes.cta} onClick={() => setOpen(true)}>
              Join Our Innovation Hub
            </Button>
          </Box>

          {/* Right */}
          <Box className={classes.column}>
            <Paper className={classes.comparisonCard} elevation={0}>
              <Box textAlign="center">
                <Typography className={classes.headerTitle}>
                  GigaLabs vs Other Labs
                </Typography>
                <Typography className={classes.comparisonSubtitle}>
                  See the difference in approach
                </Typography>
              </Box>

              <Box className={classes.comparisonGrid}>
                <Box>
                  <Box
                    className={`${classes.columnHeader} ${classes.gigalabsHeader}`}
                  >
                    GigaLabs
                  </Box>
                  {[
                    "Real-world applications",
                    "Industry partnerships",
                    "Startup incubation",
                    "Market-ready products",
                    "Career-focused learning",
                  ].map((t, i) => (
                    <Box key={i} className={classes.comparisonItem}>
                      <Check size={18} className={classes.checkIcon} />
                      <span>{t}</span>
                    </Box>
                  ))}
                </Box>

                <Box>
                  <Box
                    className={`${classes.columnHeader} ${classes.othersHeader}`}
                  >
                    Other Labs
                  </Box>
                  {[
                    "Academic papers only",
                    "Limited industry exposure",
                    "Theoretical focus",
                    "Prototype-stage only",
                    "Research-focused",
                  ].map((t, i) => (
                    <Box key={i} className={classes.comparisonItem}>
                      <X size={18} className={classes.xIcon} />
                      <span>{t}</span>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
