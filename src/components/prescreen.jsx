/* eslint-disable no-dupe-keys */
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SchoolIcon from "@mui/icons-material/School";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const useStyles = makeStyles({
  root: {
    // minHeight: "700px",
    height: "auto",
    backgroundColor: "#f9fafb",
    paddingBottom: "48px",
  },
  container: {
    paddingTop: "24px",
  },
  headerBox: {
    textAlign: "center",
    marginBottom: "24px",
  },
  userTypesBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    marginBottom: "32px",
  },
  userCard: {
    flex: "1 1 200px",
    minWidth: "200px",
    maxWidth: "280px",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    },
  },
  userCardContent: {
    textAlign: "center",
    padding: "16px",
  },
  userIconBox: {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px auto",
  },
  howItWorksBox: {
    borderRadius: "28px",
    padding: "32px",
    background: "linear-gradient(135deg, #6b46c1 0%, #4c1d95 100%)",
    color: "#ffffff",
    position: "relative",
    overflow: "visible",
    marginLeft: "-4px !important",
    marginRight: "-4px !important",
    paddingBottom: "48px",
  },
  howItWorksTitle: {
    fontWeight: 800,
    textAlign: "center",
    marginBottom: "8px",
    fontWeight: '700 !important',
  },
  howItWorksDesc: {
    textAlign: "center",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "20px !important",
  },
  stepsContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
  },
  stepBox: {
    position: "relative",
    zIndex: 2,
    flex: "1 1 240px",
    minWidth: "240px",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: "14px",
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
  },
  connector: {
    position: "absolute",
    top: "50%",
    right: "-25px",
    width: "25px",
    height: "2px",
    backgroundColor: "rgba(255,255,255,0.18)",
    transform: "translateY(-50%)",
    zIndex: -1,
  },
  stepNumberBox: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
    border: "3px solid rgba(255,255,255,0.12)",
    fontWeight: 800,
    fontSize: "0.9rem",
  },
  stepTextBox: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  stepTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 700,
    color: "#ffffff",
    fontSize: "1rem",
  },
  stepDesc: {
    fontWeight: 500,
    color: "rgba(255,255,255,0.9)",
    fontSize: "0.9rem",
  },
  startButtonBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
  startButton: {
    borderRadius: "30px !important",
    fontSize: "0.9rem !important",
    padding: "12px 24px !important",
    background: "linear-gradient(90deg, #7e22ce 0%, #6b46c1 100%)",
    boxShadow: "0 10px 30px rgba(107,70,193,0.18), inset 0 -3px 6px rgba(0,0,0,0.08)",
    textTransform: "none",
    fontWeight: '700 !important',
    "&:hover": {
      background: "linear-gradient(90deg, #6b46c1 0%, #4c1d95 100%)",
    },
  },
});

const userTypes = [
  {
    title: "Graduates (pre-2021)",
    desc: "Rebuild skills and gain industry exposure",
    icon: <SchoolIcon style={{ color: "#0ea5e9" }} />,
    bg: "#e0f2fe",
  },
  {
    title: "Career Switchers",
    desc: "Transition from non-tech to tech with guided programs",
    icon: <RefreshIcon style={{ color: "#10b981" }} />,
    bg: "#d1fae5",
  },
  {
    title: "Returnees",
    desc: "Restart confidently with job-specific training and mentorship",
    icon: <EmojiPeopleIcon style={{ color: "#7e22ce" }} />,
    bg: "#ede9fe",
  },
  {
    title: "Passionate Learners",
    desc: "Unlock opportunities with structured paths",
    icon: <FavoriteIcon style={{ color: "#f97316" }} />,
    bg: "#ffedd5",
  },
];

const steps = [
  {
    step: "01",
    title: "Assessment",
    desc: "Complete our comprehensive skill evaluation",
    icon: <CheckCircleIcon style={{ color: "#10b981", fontSize: "18px" }} />,
  },
  {
    step: "02",
    title: "Personalized Path",
    desc: "Get a customized learning and development plan",
    icon: <AltRouteIcon style={{ color: "#0ea5e9", fontSize: "18px" }} />,
  },
  {
    step: "03",
    title: "Job Readiness",
    desc: "Achieve industry-ready skills and confidence",
    icon: <VerifiedUserIcon style={{ color: "#f59e0b", fontSize: "18px" }} />,
  },
];

const GigaPrescreener = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        {/* Header */}
        <Box className={classes.headerBox}>
          <Typography variant="h4" style={{ fontWeight: 700 }} gutterBottom>
            Giga Prescreener Tool
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "#6b7280", maxWidth: "900px", margin: "0 auto" }}
          >
            A structured, transparent, and supportive pathway for graduates,
            career switchers, and returnees to restart their IT careers with
            confidence.
          </Typography>
        </Box>

        {/* User Types */}
        <Box className={classes.userTypesBox}>
          {userTypes.map((item, idx) => (
            <Card key={idx} elevation={2} className={classes.userCard}>
              <CardContent className={classes.userCardContent}>
                <Box className={classes.userIconBox} style={{ backgroundColor: item.bg }}>
                  {item.icon}
                </Box>
                <Typography variant="subtitle2" style={{ fontWeight: 700 }} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" style={{ color: "#6b7280" }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* How It Works */}
        <Box className={classes.howItWorksBox}>
          <Typography variant="h5" className={classes.howItWorksTitle}>
            How It Works
          </Typography>
          <Typography variant="body1" className={classes.howItWorksDesc}>
            Three simple steps to move from assessment to job readiness
          </Typography>

          <Box className={classes.stepsContainer}>
            {steps.map((item, index) => (
              <Box key={index} className={classes.stepBox}>
                {index < steps.length - 1 && <Box className={classes.connector} />}
                <Box className={classes.stepNumberBox}>{item.step}</Box>
                <Box className={classes.stepTextBox}>
                  <Typography variant="body2" className={classes.stepTitle}>
                    {item.icon}
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className={classes.stepDesc}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Start button */}
        <Box className={classes.startButtonBox}>
          <Button
            variant="contained"
            size="large"
            endIcon={<TrackChangesIcon />}
            className={classes.startButton}
          >
            Start Assessment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GigaPrescreener;
