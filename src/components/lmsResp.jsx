import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Video, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

const features = [
  {
    id: "interactive",
    icon: <Video size={18} />,
    title: "Interactive Learning",
    description: "Engaging video content with hands-on exercises",
    theme: {
      bg: "#dcfce7",
      border: "#22c55e",
      text: "#15803d",
      icon: "#16a34a",
    },
  },
  {
    id: "mentorship",
    icon: <Users size={18} />,
    title: "Mentorship Programs",
    description: "Connect with industry experts and guides",
    theme: {
      bg: "#f3e8ff",
      border: "#a855f7",
      text: "#6b21a8",
      icon: "#9333ea",
    },
  },
  {
    id: "project",
    icon: <Award size={18} />,
    title: "Project-Based Learning",
    description: "Build real-world projects while learning",
    theme: {
      bg: "#cffafe",
      border: "#06b6d4",
      text: "#0e7490",
      icon: "#0891b2",
    },
  },
  {
    id: "feedback",
    icon: <TrendingUp size={18} />,
    title: "Real-Time Feedback",
    description: "Get instant feedback on your progress",
    theme: {
      bg: "#dbeafe",
      border: "#3b82f6",
      text: "#1e40af",
      icon: "#2563eb",
    },
  },
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f9fafb",
    height: "auto",
    padding: "4rem 0 !important",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
    maxWidth: "1200px",
    "@media (max-width: 1200px)": {
      maxWidth: "1000px",
    },
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "2rem",
    },
    "@media (max-width: 600px)": {
      gap: "0.5rem",
    },
    "@media (max-width: 480px)": {
      gap: "1rem",
    },
    "@media (max-width: 375px)": {
      gap: "0.8rem",
    },
  },
  leftBox: {
    flex: 1,
    "@media (max-width:960px)": {
      order: 2,
    },
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flex: 1,
    position: "relative",
    "@media (max-width: 1020px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.8rem",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    minHeight: "80px",
    width: "100%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: "#fff",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    "@media (max-width: 600px)": {
      minHeight: "70px",
    },
    "@media (max-width: 480px)": {
      minHeight: "60px",
    },
    "@media (max-width: 375px)": {
      minHeight: "55px",
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "@media (max-width: 375px)": {
      gap: "0.6rem",
    },
  },
  avatar: {
    width: 40,
    height: 40,
    "@media (max-width: 480px)": {
      width: 34,
      height: 34,
    },
    "@media (max-width: 375px)": {
      width: 30,
      height: 30,
    },
  },
  rightBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    "@media (min-width: 900px)": {
      textAlign: "left",
    },
    "@media (max-width:960px)": {
      order: 1,
    },
  },
  title: {
    fontWeight: "bold !important",
    marginBottom: "1rem !important",
    fontSize: "2.8rem !important",
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
  description: {
    color: "#4b5563",
    marginBottom: "1rem !important",
    lineHeight: "1.7 !important",
    fontSize: "1.2rem !important",
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
  subdescription: {
    color: "#4b5563",
    marginBottom: "1rem",
    lineHeight: "1.7 !important",
    fontSize: "1.2rem !important",
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
  button: {
    backgroundColor: "#9333EA",
    borderRadius: "999px !important",
    padding: "0.8rem 2rem",
    textTransform: "none",
    alignSelf: "center",
    marginTop: "1.5rem !important",
    "&:hover": {
      backgroundColor: "#7e22ce",
    },
    "@media (min-width: 900px)": {
      alignSelf: "flex-start",
    },
    "@media (max-width: 600px)": {
      padding: "0.6rem 1.5rem",
      fontSize: "0.9rem !important",
    },
    "@media (max-width: 480px)": {
      padding: "0.5rem 1.2rem",
      fontSize: "0.8rem !important",
    },
    "@media (max-width: 375px)": {
      padding: "0.4rem 1rem",
      fontSize: "0.75rem !important",
    },
  },
}));

export default function GigaLMSDashboard1() {
  const classes = useStyles();
  const [activeFeature, setActiveFeature] = useState("interactive");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = features.findIndex((f) => f.id === activeFeature);
      const nextIndex = (currentIndex + 1) % features.length;
      setActiveFeature(features[nextIndex].id);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeFeature]);

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.container}>
          {/* LEFT SIDE */}
          <Box className={classes.leftBox}>
            <Typography variant="h6" className={classes.title} align="center">
              Learning Features
            </Typography>
            <Box className={classes.featureList}>
              {features.map((feature) => {
                const isActive = activeFeature === feature.id;
                return (
                  <Card
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={classes.card}
                    style={{
                      border: isActive
                        ? `2px solid ${feature.theme.border}`
                        : "1px solid #e5e7eb",
                      boxShadow: isActive
                        ? "0 4px 15px rgba(0,0,0,0.15)"
                        : "0 1px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    <CardContent className={classes.cardContent}>
                      <Avatar
                        className={classes.avatar}
                        style={{
                          backgroundColor: isActive
                            ? feature.theme.bg
                            : "#f3f4f6",
                          color: feature.theme.icon,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: "bold",
                            color: isActive
                              ? feature.theme.text
                              : "#111827",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            color: isActive ? feature.theme.text : "#6b7280",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box className={classes.rightBox}>
            <Typography variant="h4" className={classes.title}>
              Giga LMS
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Learning is at the core of every transformation. The Giga LMS is
              designed to provide interactive, scalable, and flexible learning
              experiences.
            </Typography>
            <Typography variant="body1" className={classes.subdescription}>
              Unlike traditional systems, our LMS integrates mentorship,
              project-based learning, and real-time feedback. It reflects the
              strength of innovation labs that combine technology with pedagogy
              to empower learners everywhere.
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<ArrowRight size={18} />}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
