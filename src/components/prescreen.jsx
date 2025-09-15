import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: "#6b46c1",
      dark: "#4c1d95",
    },
    success: {
      main: "#10b981",
      light: "#d1fae5",
    },
    warning: {
      main: "#f59e0b",
      light: "#fef3c7",
    },
    info: {
      main: "#0ea5e9",
      light: "#e0f2fe",
    },
    purple: {
      main: "#7e22ce",
      light: "#ede9fe",
    },
    orange: {
      main: "#f97316",
      light: "#ffedd5",
    },
  },
});

const userTypes = [
  {
    title: "Graduates (pre-2021)",
    desc: "Rebuild skills and gain industry exposure",
    icon: <SchoolIcon fontSize="small" sx={{ color: "info.main" }} />,
    bg: "info.light",
  },
  {
    title: "Career Switchers",
    desc: "Transition from non-tech to tech with guided programs",
    icon: <RefreshIcon fontSize="small" sx={{ color: "success.main" }} />,
    bg: "success.light",
  },
  {
    title: "Returnees",
    desc: "Restart confidently with job-specific training and mentorship",
    icon: <EmojiPeopleIcon fontSize="small" sx={{ color: "purple.main" }} />,
    bg: "purple.light",
  },
  {
    title: "Passionate Learners",
    desc: "Unlock opportunities with structured paths",
    icon: <FavoriteIcon fontSize="small" sx={{ color: "orange.main" }} />,
    bg: "orange.light",
  },
];

const steps = [
  {
    step: "01",
    title: "Assessment",
    desc: "Complete our comprehensive skill evaluation",
    icon: <CheckCircleIcon sx={{ color: "#10b981", fontSize: 18 }} />,
  },
  {
    step: "02",
    title: "Personalized Path",
    desc: "Get a customized learning and development plan",
    icon: <AltRouteIcon sx={{ color: "#0ea5e9", fontSize: 18 }} />,
  },
  {
    step: "03",
    title: "Job Readiness",
    desc: "Achieve industry-ready skills and confidence",
    icon: <VerifiedUserIcon sx={{ color: "#f59e0b", fontSize: 18 }} />,
  },
];

const GigaPrescreener = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f9fafb", pb: 6 }}>
        <Container maxWidth="lg" sx={{ pt: 3 }}>
          {/* Header */}
          <Box textAlign="center" mb={3}>
            <Typography variant="h4" fontWeight="700" gutterBottom>
              Giga Prescreener Tool
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth="900px"
              mx="auto"
            >
              A structured, transparent, and supportive pathway for graduates,
              career switchers, and returnees to restart their IT careers with
              confidence.
            </Typography>
          </Box>

          {/* User Types */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              mb: 4,
            }}
          >
            {userTypes.map((item, idx) => (
              <Card
                key={idx}
                elevation={2}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 46%", md: "1 1 23%" },
                  minWidth: 200,
                  maxWidth: 280,
                  transition: "transform .2s, box-shadow .2s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 2 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      bgcolor: item.bg,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 1,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* How It Works */}
          <Box
            sx={{
              borderRadius: "28px",
              p: { xs: 2.5, md: 4 },
              background:
                "linear-gradient(135deg, rgba(107,70,193,1) 0%, rgba(76,29,149,1) 100%)",
              color: "white",
              position: "relative",
              overflow: "visible",
              mx: { xs: -12, md: -16 },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="800"
              align="center"
              sx={{ mb: 1.2 }}
            >
              How It Works
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ color: alpha("#fff", 0.9), mb: { xs: 3, md: 5 } }}
            >
              Three simple steps to move from assessment to job readiness
            </Typography>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 2, md: 3 },
              }}
            >
              {steps.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    flex: { xs: "1 1 100%", md: "1 1 32%" },
                    minWidth: { xs: "100%", md: 240 },
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: "14px",
                    px: { xs: 1.8, md: 2.2 },
                    py: { xs: 0.8, md: 1 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
                  }}
                >
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: { xs: -12, md: -25 },
                        width: { xs: "calc(100% + 24px)", md: "calc(100% + 40px)" },
                        maxWidth: 25,
                        height: 2,
                        bgcolor: alpha("#fff", 0.18),
                        transform: "translateY(-50%)",
                        zIndex: -1,
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                      border: "3px solid rgba(255,255,255,0.12)",
                      fontWeight: 800,
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                    }}
                  >
                    {item.step}
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontWeight: 700,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        color: "#fff",
                      }}
                    >
                      <Box component="span" sx={{ display: "inline-flex" }}>
                        {item.icon}
                      </Box>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: alpha("#fff", 0.9),
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Start button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<TrackChangesIcon />}
              sx={{
                borderRadius: "30px",
                px: 5,
                py: 1.3,
                background:
                  "linear-gradient(90deg, rgba(126,34,206,1) 0%, rgba(107,70,193,1) 100%)",
                boxShadow:
                  "0 10px 30px rgba(107,70,193,0.18), inset 0 -3px 6px rgba(0,0,0,0.08)",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(107,70,193,1) 0%, rgba(76,29,149,1) 100%)",
                },
              }}
            >
              Start Assessment
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default GigaPrescreener;
