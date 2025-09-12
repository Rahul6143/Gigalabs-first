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
import {
  Brain,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
} from "lucide-react";

const featureData = [
  {
    title: "AI Skill Recommendation",
    score: "92%",
    bars: [
      { label: "Technical Skills", value: 80, color: "primary" },
      { label: "Soft Skills", value: 60, color: "secondary" },
      { label: "Industry Knowledge", value: 70, color: "info" },
    ],
    tipTitle: "Skills Enhancement Tip",
    tipContent: "Consider adding Python and Data Analysis to match 85% of similar roles.",
    icon: <Brain size={20} color="#2563eb" />,
    chipColor: "primary",
  },
  {
    title: "Project Recommendation",
    score: "90%",
    bars: [
      { label: "Project Complexity", value: 75, color: "secondary" },
      { label: "Relevance to Role", value: 85, color: "error" },
      { label: "Completion Rate", value: 65, color: "warning" },
    ],
    tipTitle: "Project Building Tip",
    tipContent: "Complete at least 2 projects to increase your hireability by 40%.",
    icon: <Target size={20} color="#9333ea" />,
    chipColor: "secondary",
  },
  {
    title: "Generative AI Guidance",
    score: "93%",
    bars: [
      { label: "Content Quality", value: 90, color: "warning" },
      { label: "Keyword Optimization", value: 80, color: "secondary" },
      { label: "Role Alignment", value: 70, color: "info" },
    ],
    tipTitle: "Content Optimization Tip",
    tipContent: "Include more action verbs like 'developed', 'managed', and 'optimized'.",
    icon: <Sparkles size={20} color="#f97316" />,
    chipColor: "warning",
  },
  {
    title: "ATS-Friendly Templates",
    score: "95%",
    bars: [
      { label: "ATS Compatibility", value: 95, color: "success" },
      { label: "Readability Score", value: 90, color: "info" },
      { label: "Design Quality", value: 88, color: "secondary" },
    ],
    tipTitle: "Template Selection Tip",
    tipContent: "The Modern template has a 22% higher pass rate with ATS systems.",
    icon: <CheckCircle size={20} color="#16a34a" />,
    chipColor: "success",
  },
];

export default function ResumeBuilder() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featureData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const feature = featureData[activeFeature];

  return (
    <Box sx={{ bgcolor: "grey.50", py: 8, px: { xs: 2, md: 6, lg: 10 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { lg: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        {/* Left Panel */}
        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            GiGa Resume Builder
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            The GiGa Resume Builder is not just another CV maker; it is powered
            by AI Lab intelligence and designed for the future of work. Best of
            all, it is completely free to use.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Key Features
          </Typography>

          <Stack spacing={2}>
            {featureData.map((f, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  cursor: "pointer",
                  borderColor:
                    index === activeFeature ? `${f.chipColor}.main` : "grey.200",
                  bgcolor:
                    index === activeFeature ? `${f.chipColor}.50` : "white",
                  transition: "all 0.3s",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: "grey.100" }}>
                    {f.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="medium">
                      {f.title}
                    </Typography>
                    {index === activeFeature && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 0.5, display: "block" }}
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
            sx={{ mt: 4, borderRadius: "999px", px: 4 }}
            endIcon={<ArrowRight />}
          >
            Try Resume Builder
          </Button>
        </Box>

        {/* Right Panel */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: 4,
              bgcolor: "linear-gradient(to right, #3b82f6, #9333ea)",
              opacity: 0.1,
              filter: "blur(50px)",
            }}
          />
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 6,
              position: "relative",
              zIndex: 1,
            }}
          >
            <CardContent>
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Chip
                  icon={<Star size={16} fill="green" color="green" />}
                  label={`${feature.score} Match`}
                  size="small"
                  color={feature.chipColor}
                  variant="outlined"
                />
              </Box>

              {/* Progress Bars */}
              <Box sx={{ mb: 2, p: 2, bgcolor: "grey.50", borderRadius: 3 }}>
                <Typography variant="body2" fontWeight="medium" mb={1}>
                  Resume Strength Analysis
                </Typography>
                <Stack spacing={2}>
                  {feature.bars.map((bar, idx) => (
                    <Box key={idx}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="caption">{bar.label}</Typography>
                        <Typography variant="caption" fontWeight="bold">
                          {bar.value}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={bar.value}
                        color={bar.color}
                        sx={{ height: 8, borderRadius: 5 }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Tip */}
              <Box
                sx={{
                  p: 2,
                  bgcolor: "blue.50",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "blue.100",
                  display: "flex",
                  gap: 2,
                }}
              >
                <Box sx={{ p: 1, borderRadius: 2, bgcolor: "blue.100" }}>
                  <Lightbulb size={18} color="#2563eb" />
                </Box>
                <Box>
                  <Typography variant="subtitle2">{feature.tipTitle}</Typography>
                  <Typography variant="caption" color="text.secondary">
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
