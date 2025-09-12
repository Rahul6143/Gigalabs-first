import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  ThemeProvider,
  createTheme
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: '#6b46c1',
      dark: '#4c1d95'
    },
    success: {
      main: '#10b981',
      light: '#d1fae5'
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7'
    },
    info: {
      main: '#0ea5e9',
      light: '#e0f2fe'
    },
    purple: {
      main: '#7e22ce',
      light: '#ede9fe'
    },
    orange: {
      main: '#f97316',
      light: '#ffedd5'
    }
  }
});

const GigaPrescreener = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', py: 4, bgcolor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ px: 2 }}>
          {/* Header */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Giga Prescreener Tool
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
              The Giga Prescreener Tool is built for individuals looking for a second chance in the tech world.
              Many graduates, professionals from non-tech roles, and those with career gaps often struggle to
              restart their journeys. This tool provides a structured, transparent, and supportive pathway back into IT careers.
            </Typography>
          </Box>

          {/* User Types Grid */}
          <Grid container spacing={3} mb={6}>
            {[
              {
                title: 'For Graduates (pre-2021)',
                desc: 'Rebuild skills and gain industry exposure',
                icon: <SchoolIcon fontSize="large" sx={{ color: 'primary.main' }} />,
                bg: 'primary.light'
              },
              {
                title: 'For Career Switchers',
                desc: 'Transition from non-tech to tech with guided programs',
                icon: <RefreshIcon fontSize="large" sx={{ color: 'success.main' }} />,
                bg: 'success.light'
              },
              {
                title: 'For Returnees',
                desc: 'Restart confidently with job-specific training and mentorship',
                icon: <EmojiPeopleIcon fontSize="large" sx={{ color: 'purple.main' }} />,
                bg: 'purple.light'
              },
              {
                title: 'For Passionate Learners',
                desc: 'Unlock opportunities with structured paths',
                icon: <FavoriteIcon fontSize="large" sx={{ color: 'orange.main' }} />,
                bg: 'orange.light'
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: item.bg,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* How It Works Section */}
          <Box sx={{ bgcolor: 'primary.dark', color: 'common.white', borderRadius: 3, p: 4, mb: 6 }}>
            <Box textAlign="center" mb={4}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                How It Works
              </Typography>
              <Typography variant="body2" color="whiteAlpha.80">
                Three simple steps to move from assessment to job readiness
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  desc: 'Complete our comprehensive skill evaluation',
                  icon: <CheckCircleIcon fontSize="small" sx={{ color: 'success.light' }} />
                },
                {
                  step: '02',
                  title: 'Personalized Path',
                  desc: 'Get a customized learning and development plan',
                  icon: <AltRouteIcon fontSize="small" sx={{ color: 'info.light' }} />
                },
                {
                  step: '03',
                  title: 'Job Readiness',
                  desc: 'Achieve industry-ready skills and confidence',
                  icon: <VerifiedUserIcon fontSize="small" sx={{ color: 'warning.light' }} />
                },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'whiteAlpha.10',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        bgcolor: 'whiteAlpha.20'
                      },
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'whiteAlpha.20',
                        border: '1px solid whiteAlpha.30',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        boxShadow: '0 0 0 3px rgba(255,255,255,0.06)'
                      }}
                    >
                      {item.step}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center" gap={1} mb={0.5}>
                        {item.icon} {item.title}
                      </Typography>
                      <Typography variant="body2" color="whiteAlpha.80">
                        {item.desc}
                      </Typography>
                    </Box>
                    {index < 2 && (
                      <Box
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          position: 'absolute',
                          right: -32,
                          top: '50%',
                          width: 32,
                          height: 2,
                          bgcolor: 'whiteAlpha.30'
                        }}
                      />
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: { md: 'none' }, mt: 4, textAlign: 'center', color: 'whiteAlpha.70', fontSize: '0.75rem' }}>
              Follow the steps from left to right
            </Box>
          </Box>

          {/* Start Button */}
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<TrackChangesIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 'medium',
                px: 4,
                py: 1.5
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
