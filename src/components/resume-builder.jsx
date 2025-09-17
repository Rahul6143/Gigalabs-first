import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Stack,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Brain,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
} from "lucide-react";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f9fafb", // grey.50
    paddingTop: "80px !important",
    paddingBottom: "64px !important",
    height: "auto",
    paddingLeft: "80px !important",
    paddingRight: "64px !important",
    '@media (min-width:960px)': {
      paddingLeft: "48px",
      paddingRight: "48px",
    },
    '@media (min-width:1280px)': {
      paddingLeft: "80px",
      paddingRight: "80px",
    },
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    gap: "24px",
    '@media (min-width:1280px)': {
      flexDirection: "row",
    },
  },
  leftPanel: {
    flex: 1,
  },
  rightPanel: {
    flex: 1,
    position: "relative",
  },
  card: {
    borderRadius: "12px !important",
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    marginBottom: "4px !important",
    // transform: "translateY(20px) !important",
    // transition: "all 0.3s",
    // '&:hover': {
    //   transform: "translateY(2px)",
    // },
  },
  cardContent: {
    display: "flex",
    gap: "16px",
  },
  iconBox: {
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6", // grey.100
  },
  button: {
    marginTop: "32px !important",
    borderRadius: "999px",
    padding: "8px 32px !important",
  },
  glowEffect: {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    background: "linear-gradient(to right, #3b82f6, #9333ea)",
    opacity: 0.1,
    filter: "blur(50px)",
  },
  mainCard: {
    borderRadius: "16px !important",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1) !important", // boxShadow 6 approximation
    position: "relative",
    zIndex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  progressContainer: {
    marginBottom: "16px",
    padding: "16px",
    backgroundColor: "#f9fafb", // grey.50
    borderRadius: "12px",
  },
  tipBox: {
    padding: "16px",
    backgroundColor: "#eff6ff", // blue.50
    borderRadius: "12px",
    border: "1px solid #bfdbfe", // blue.100
    display: "flex",
    gap: "16px",
  },
  tipIconBox: {
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: "#bfdbfe", // blue.100
  },
});

const featureData = [
  {
    title: "AI Skill Recommendation",
    score: "92%",
    bars: [
      { label: "Technical Skills", value: 80, color: "#2563eb" },
      { label: "Soft Skills", value: 60, color: "#e11d48" },
      { label: "Industry Knowledge", value: 70, color: "#0ea5e9" },
    ],
    tipTitle: "Skills Enhancement Tip",
    tipContent:
      "Consider adding Python and Data Analysis to match 85% of similar roles.",
    icon: <Brain size={20} color="#2563eb" />,
    chipColor: "#2563eb",
  },
  {
    title: "Project Recommendation",
    score: "90%",
    bars: [
      { label: "Project Complexity", value: 75, color: "#e11d48" },
      { label: "Relevance to Role", value: 85, color: "#dc2626" },
      { label: "Completion Rate", value: 65, color: "#f59e0b" },
    ],
    tipTitle: "Project Building Tip",
    tipContent: "Complete at least 2 projects to increase your hireability by 40%.",
    icon: <Target size={20} color="#9333ea" />,
    chipColor: "#9333ea",
  },
  {
    title: "Generative AI Guidance",
    score: "93%",
    bars: [
      { label: "Content Quality", value: 90, color: "#f59e0b" },
      { label: "Keyword Optimization", value: 80, color: "#e11d48" },
      { label: "Role Alignment", value: 70, color: "#0ea5e9" },
    ],
    tipTitle: "Content Optimization Tip",
    tipContent:
      "Include more action verbs like 'developed', 'managed', and 'optimized'.",
    icon: <Sparkles size={20} color="#f97316" />,
    chipColor: "#f97316",
    // border: "1px solid #f97316 !important",
  },
  {
    title: "ATS-Friendly Templates",
    score: "95%",
    bars: [
      { label: "ATS Compatibility", value: 95, color: "#16a34a" },
      { label: "Readability Score", value: 90, color: "#0ea5e9" },
      { label: "Design Quality", value: 88, color: "#e11d48" },
    ],
    tipTitle: "Template Selection Tip",
    tipContent: "The Modern template has a 22% higher pass rate with ATS systems.",
    icon: <CheckCircle size={20} color="#16a34a" />,
    chipColor: "#16a34a",
  },
];

export default function ResumeBuilder() {
  const classes = useStyles();
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featureData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const feature = featureData[activeFeature];

  return (
    <Box className={classes.container}>
      <Box className={classes.flexContainer}>
        {/* Left Panel */}
        <Box className={classes.leftPanel}>
          <Typography variant="h3" style={{ fontWeight: "bold", marginBottom: "16px" }}>
            GiGa Resume Builder
          </Typography>
          <Typography variant="body1" style={{ color: "#6b7280", marginBottom: "24px" }}>
            The GiGa Resume Builder is not just another CV maker; it is powered by AI Lab intelligence and designed for the future of work. Best of all, it is completely free to use.
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "16px" }}>
            Key Features
          </Typography>
          <Stack spacing={2}>
            {featureData.map((f, index) => (
              <Card
                key={index}
                className={classes.card}
                style={{
                  borderColor:
                    index === activeFeature ? f.chipColor : "#e5e7eb",
                  backgroundColor:
                    index === activeFeature ? f.chipColor + "20" : "white",
                }}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className={classes.cardContent}>
                  <Box className={classes.iconBox}>{f.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2" style={{ fontWeight: 500 }}>
                      {f.title}
                    </Typography>
                    {index === activeFeature && (
                      <Typography
                        variant="caption"
                        style={{ color: "#6b7280", marginTop: "4px", display: "block" }}
                      >
                        {f.tipContent}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            endIcon={<ArrowRight />}
            style={{ borderRadius: "999px" }}
          >
            Try Resume Builder
          </Button>
        </Box>

        {/* Right Panel */}
        <Box className={classes.rightPanel}>
          <Box className={classes.glowEffect} />
          <Card className={classes.mainCard}>
            <CardContent>
              <Box className={classes.header}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  {feature.title}
                </Typography>
                <Chip
                  icon={<Star size={16} fill="green" color="green" />}
                  label={`${feature.score} Match`}
                  size="small"
                  style={{ borderColor: feature.chipColor, color: feature.chipColor }}
                  variant="outlined"
                />
              </Box>

              <Box className={classes.progressContainer}>
                <Typography variant="body2" style={{ fontWeight: 500, marginBottom: "8px" }}>
                  Resume Strength Analysis
                </Typography>
                <Stack spacing={2}>
                  {feature.bars.map((bar, idx) => (
                    <Box key={idx}>
                      <Box style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <Typography variant="caption">{bar.label}</Typography>
                        <Typography variant="caption" style={{ fontWeight: "bold" }}>
                          {bar.value}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={bar.value}
                        style={{
                          height: "8px",
                          borderRadius: "5px",
                          backgroundColor: "#e5e7eb",
                        }}
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: bar.color,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box className={classes.tipBox}>
                <Box className={classes.tipIconBox}>
                  <Lightbulb size={18} color="#2563eb" />
                </Box>
                <Box>
                  <Typography variant="subtitle2">{feature.tipTitle}</Typography>
                  <Typography variant="caption" style={{ color: "#6b7280" }}>
                    {feature.tipContent}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
