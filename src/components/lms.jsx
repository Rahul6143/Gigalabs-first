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

export default function GigaLMSDashboard() {
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
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 6 },
            width: "100%",
          }}
        >
          {/* LEFT SIDE - Features */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Learning Features
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {features.map((feature) => {
                const isActive = activeFeature === feature.id;
                return (
                  <Card
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    sx={{
                      minHeight: "80px",
                      width: "100%",
                      border: isActive
                        ? `2px solid ${feature.theme.border}`
                        : "1px solid #e5e7eb",
                      boxShadow: isActive ? 4 : 1,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      bgcolor: "#fff",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: isActive ? feature.theme.bg : "#f3f4f6",
                          color: feature.theme.icon,
                          width: 40,
                          height: 40,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{
                            color: isActive ? feature.theme.text : "#111827",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
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

          {/* RIGHT SIDE - Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Giga LMS
            </Typography>
            <Typography variant="body1" sx={{ color: "#4b5563", mb: 2 }}>
              Learning is at the core of every transformation. The Giga LMS is
              designed to provide interactive, scalable, and flexible learning
              experiences.
            </Typography>
            <Typography variant="body1" sx={{ color: "#4b5563", mb: 3 }}>
              Unlike traditional systems, our LMS integrates mentorship,
              project-based learning, and real-time feedback. It reflects the
              strength of innovation labs that combine technology with pedagogy
              to empower learners everywhere.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#9333EA",
                borderRadius: "999px",
                px: 4,
                py: 1.2,
                textTransform: "none",
                alignSelf: { xs: "center", md: "flex-start" },
                "&:hover": {
                  bgcolor: "#7e22ce",
                },
              }}
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
