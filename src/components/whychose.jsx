import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Paper,
} from "@mui/material";
import { Zap, Target, Users, Check, X } from "lucide-react";

export default function GigaLabs() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Why Choose Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #0f172a, #1e293b, #334155, #475569)",
          color: "#f1f5f9",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, mb: 2, fontFamily: "Space Grotesk, sans-serif" }}
              >
                Why Choose{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg,#22c55e,#10b981,#059669)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                  }}
                >
                  GigaLabs
                </Box>{" "}
                Over Other Research Labs?
              </Typography>

              <Typography variant="body1" sx={{ mb: 2, color: "#cbd5e1" }}>
                While there are many research labs and academic institutions, GigaLabs stands
                apart by blending research with execution. Our goal is not limited to creating
                papers or prototypes — we aim to deliver real-world applications.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "#cbd5e1" }}>
                Students and professionals who work with us benefit from:
              </Typography>

              {/* Benefits */}
              <Box sx={{ display: "grid", gap: 2, mb: 3 }}>
                {[
                  { icon: <Zap size={20} />, text: "Access to cutting-edge tech innovation" },
                  { icon: <Target size={20} />, text: "Projects built from genuine industry challenges" },
                  {
                    icon: <Users size={20} />,
                    text: "A collaborative ecosystem within an advanced research laboratory",
                  },
                ].map((item, i) => (
                  <Paper
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(148,163,184,0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "0.3s",
                      "&:hover": {
                        background: "rgba(34,197,94,0.1)",
                        borderColor: "rgba(34,197,94,0.3)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        background: "linear-gradient(135deg,#22c55e,#16a34a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0f172a",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 600 }}>{item.text}</Typography>
                  </Paper>
                ))}
              </Box>

              <Button
                onClick={() => setOpen(true)}
                sx={{
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  color: "#0f172a",
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  fontWeight: 600,
                  boxShadow: "0 8px 30px rgba(34,197,94,0.4)",
                  "&:hover": {
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow: "0 15px 40px rgba(34,197,94,0.6)",
                    background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  },
                }}
              >
                Join Our Innovation Hub
              </Button>
            </Grid>

            {/* Right Comparison */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
                }}
              >
                <Typography variant="h5" align="center" sx={{ fontWeight: 700, mb: 1 }}>
                  GigaLabs vs Traditional Labs
                </Typography>
                <Typography variant="body2" align="center" sx={{ mb: 3, color: "#64748b" }}>
                  See the difference in approach
                </Typography>

                <Grid container spacing={4}>
                  {/* GigaLabs */}
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 1.5,
                        mb: 2,
                        borderRadius: 2,
                        background: "linear-gradient(135deg,#22c55e,#16a34a)",
                        color: "#0f172a",
                        fontWeight: 600,
                      }}
                    >
                      GigaLabs
                    </Box>
                    {[
                      "Real-world applications",
                      "Industry partnerships",
                      "Startup incubation",
                      "Market-ready products",
                      "Career-focused learning",
                    ].map((text, i) => (
                      <Box key={i} sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                        <Check size={16} color="#22c55e" />
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                    ))}
                  </Grid>

                  {/* Traditional Labs */}
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 1.5,
                        mb: 2,
                        borderRadius: 2,
                        background: "rgba(148,163,184,0.2)",
                        color: "#475569",
                        fontWeight: 600,
                      }}
                    >
                      Traditional Labs
                    </Box>
                    {[
                      "Academic papers only",
                      "Limited industry exposure",
                      "Theoretical focus",
                      "Prototype-stage only",
                      "Research-focused",
                    ].map((text, i) => (
                      <Box key={i} sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                        <X size={16} color="#ef4444" />
                        <Typography variant="body2">{text}</Typography>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Apply Now</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "#475569", mb: 2 }}>
            Thank you for your interest in GigaLabs! Join our innovation community and start
            building the future with us.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              background: "linear-gradient(135deg,#22c55e,#16a34a)",
              color: "#0f172a",
              px: 3,
              py: 1,
              borderRadius: 25,
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(34,197,94,0.4)",
              },
            }}
          >
            Get Started
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
