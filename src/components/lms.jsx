import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import {
  Video,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
} from "lucide-react";

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

const GigaLMSDashboard = () => {
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
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", py: 6 }}>
      <Grid
        container
        spacing={6}
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
      >
        {/* LEFT: Feature Cards */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Learning Features
          </Typography>

          <Grid container spacing={2}>
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              return (
                <Grid item xs={12} key={feature.id}>
                  <Card
                    onClick={() => setActiveFeature(feature.id)}
                    sx={{
                      border: isActive
                        ? `2px solid ${feature.theme.border}`
                        : "1px solid #e5e7eb",
                      boxShadow: isActive ? 4 : 1,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 3,
                      },
                      "&:active": { transform: "scale(0.98)" },
                    }}
                  >
                    <CardContent
                      sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: isActive ? feature.theme.bg : "#f3f4f6",
                          color: feature.theme.icon,
                          width: 36,
                          height: 36,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          sx={{
                            color: isActive ? feature.theme.text : "#111827",
                            mb: 0.5,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: isActive ? feature.theme.text : "#4b5563",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* RIGHT: Title + Description + Button */}
        <Grid item xs={12} md={6}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              bgcolor: "#dbeafe",
              border: "1px solid #bfdbfe",
              color: "#1e40af",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              mb: 2,
              fontSize: "0.8rem",
              fontWeight: 500,
              gap: 1,
            }}
          >
            <BookOpen size={16} />
            Learning Management System
          </Box>

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#111827" }}
          >
            Giga LMS
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.6, mb: 2 }}
          >
            Learning is at the core of every transformation. The Giga LMS is
            designed to provide interactive, scalable, and flexible learning
            experiences.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.6, mb: 3 }}
          >
            Unlike traditional systems, our LMS integrates mentorship,
            project-based learning, and real-time feedback. It reflects the
            strength of innovation labs that combine technology with pedagogy to
            empower learners everywhere.
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#2563eb",
              borderRadius: "999px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": { bgcolor: "#1d4ed8" },
            }}
            endIcon={<ArrowRight size={18} />}
          >
            Apply Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GigaLMSDashboard;
