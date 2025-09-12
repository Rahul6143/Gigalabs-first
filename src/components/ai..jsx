import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Orbit rotation animations
const rotateClockwise = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const rotateAntiClockwise = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

export default function AILabSection() {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
        color: "#f1f5f9",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Welcome to the{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg,#22c55e,#10b981,#059669)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                }}
              >
                AI Lab
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: "#cbd5e1" }}>
              Our AI Lab is a space where innovation meets execution. Students,
              researchers, and industry experts come together to solve complex
              problems using Artificial Intelligence.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, color: "#cbd5e1" }}>
              We work on cutting-edge fields like Computer Vision, Natural
              Language Processing, Robotics, and more — with a strong focus on
              real-world applications.
            </Typography>

            <Typography variant="body1" sx={{ color: "#cbd5e1" }}>
              From research papers to startups, the AI Lab is where ideas
              transform into impactful innovations.
            </Typography>
          </Grid>

          {/* Visualization Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                position: "relative",
                width: 320,
                height: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Center Core */}
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#0f172a",
                  boxShadow: "0 0 40px rgba(34,197,94,0.7)",
                  zIndex: 2,
                }}
              >
                AI Lab
              </Box>

              {/* Orbit Rings */}
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(34,197,94,0.4)",
                  animation: `${rotateClockwise} 20s linear infinite`,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(34,197,94,0.25)",
                  animation: `${rotateAntiClockwise} 35s linear infinite`,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: 340,
                  height: 340,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(34,197,94,0.15)",
                  animation: `${rotateClockwise} 50s linear infinite`,
                }}
              />

              {/* Moving Nodes */}
              <Box
                sx={{
                  position: "absolute",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#22c55e",
                  top: "10%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 20px rgba(34,197,94,0.8)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#22c55e",
                  bottom: "15%",
                  right: "20%",
                  boxShadow: "0 0 15px rgba(34,197,94,0.7)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#22c55e",
                  top: "30%",
                  left: "15%",
                  boxShadow: "0 0 15px rgba(34,197,94,0.7)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
