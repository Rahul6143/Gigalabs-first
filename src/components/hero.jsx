import React from "react";
import { Box, Typography, Container, Button, Chip, Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowX: "hidden",
        background: "linear-gradient(to bottom right, #312e81, #581c87, #9d174d)",
        position: "relative",
      }}
    >
      {/* Animated Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Floating Icons */}
      <Box sx={{ position: "absolute", top: 80, left: 80 }}>
        <PsychologyIcon sx={{ fontSize: 40, color: "primary.light" }} />
      </Box>
      <Box sx={{ position: "absolute", top: 130, right: 160 }}>
        <CodeIcon sx={{ fontSize: 40, color: "secondary.light" }} />
      </Box>
      <Box sx={{ position: "absolute", top: 160, left: "33%" }}>
        <LightbulbIcon sx={{ fontSize: 40, color: "warning.light" }} />
      </Box>
      <Box sx={{ position: "absolute", top: 190, right: 80 }}>
        <RocketLaunchIcon sx={{ fontSize: 40, color: "orange" }} />
      </Box>
      <Box sx={{ position: "absolute", top: 320, left: 160 }}>
        <TrendingUpIcon sx={{ fontSize: 40, color: "success.light" }} />
      </Box>

      {/* Main Content */}
      <Container sx={{ position: "relative", zIndex: 10, pt: 12, pb: 8 }}>
        <Box textAlign="center">
          {/* Badge */}
          <Chip
            icon={<BoltIcon sx={{ fontSize: 20, color: "white" }} />}
            label="Innovation Lab by Gigaversity"
            sx={{
              mb: 6,
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              px: 2,
              py: 1,
              fontSize: "0.9rem",
              borderRadius: "9999px",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GigaLabs
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "rgba(255,255,255,0.9)", fontWeight: "bold", mb: 4 }}
          >
            Innovation Hub
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              lineHeight: 1.7,
            }}
          >
            Welcome to GigaLabs, the dedicated innovation hub of Gigaversity,
            where ideas transform into impactful solutions. As one of the most
            dynamic innovation labs, GigaLabs is designed to bridge the gap
            between imagination and execution.
          </Typography>

          {/* Feature Pills */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            flexWrap="wrap"
            mb={6}
          >
            {[
              "Technology Innovations",
              "Research Labs",
              "Product Development",
              "AI Lab",
            ].map((text, index) => (
              <Chip
                key={index}
                label={text}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  px: 2,
                  py: 1,
                  borderRadius: "9999px",
                }}
              />
            ))}
          </Stack>

          {/* CTA Button */}
          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            sx={{
              backgroundColor: "white",
              color: "#581c87",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "9999px",
              boxShadow: 4,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: 8,
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>

      {/* Bottom Gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4rem",
          background: "linear-gradient(to top, white, rgba(255,255,255,0.95) 10%, transparent)",
        }}
      />
    </Box>
  );
};

export default HeroSection;
