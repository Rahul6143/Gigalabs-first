import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Stack,
  Chip,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { makeStyles } from '@mui/styles';

// Data for personalities
const legendaryPersonalities = [
  {
    name: "Mahatma Gandhi",
    title: "Freedom Fighter & Philosopher",
    specialty: "Non-violent resistance & Social reform",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    color: "#f97316",
    quote: "Be the change you wish to see in the world"
  },
  {
    name: "Dr. APJ Abdul Kalam",
    title: "Scientist & Former President",
    specialty: "Aerospace & Missile technology",
    image: "https://djcvm26yy6fab.cloudfront.net/1653801379_elibrary_content_abdul%20kalam.jpg",
    color: "#3b82f6",
    quote: "Dream is not what you see in sleep, it's what doesn't let you sleep"
  },
  {
    name: "Sundar Pichai",
    title: "CEO of Google",
    specialty: "Technology leadership & Innovation",
    image: "https://c.ndtvimg.com/2023-10/351d3hag_sundar-pichai_625x300_11_October_23.jpg",
    color: "#10b981",
    quote: "It's important not to be afraid to take risks"
  },
  {
    name: "Steve Jobs",
    title: "Co-founder of Apple",
    specialty: "Innovation & Design",
    image: "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg",
    color: "#6b7280",
    quote: "Stay hungry, stay foolish"
  }
];

// Sample conversation data
const sampleConversations = {
  "Mahatma Gandhi": [
    { type: "user", text: "How did you lead without modern tools?" },
    { type: "ai", text: "My dear friend, the most powerful communication happens heart to heart." },
    { type: "user", text: "What would you think of today's protests?" },
    { type: "ai", text: "I see both hope and concern. Lasting change comes from transforming hearts." }
  ],
  "Dr. APJ Abdul Kalam": [
    { type: "user", text: "How did you develop rockets without today's computers?" },
    { type: "ai", text: "Dreams are not what you see in sleep, they're what don't let you sleep!" },
    { type: "user", text: "What advice for young engineers?" },
    { type: "ai", text: "Don't just chase technology - learn fundamentals deeply." }
  ],
  "Sundar Pichai": [
    { type: "user", text: "What's the challenge in scaling Google globally?" },
    { type: "ai", text: "Maintaining innovation while scaling is key." },
    { type: "user", text: "How do you foster innovation?" },
    { type: "ai", text: "Create an environment where people aren't afraid to fail." }
  ],
  "Steve Jobs": [
    { type: "user", text: "What drives innovation at Apple?" },
    { type: "ai", text: "It's about saying no to 1,000 things and focusing on what truly matters." },
    { type: "user", text: "How important is design?" },
    { type: "ai", text: "Design is not just what it looks like – it’s how it works." }
  ]
};

// Styles using makeStyles with responsiveness
const useStyles = makeStyles({
  container: {
    height: 'auto',
    padding: '24px',
    alignItems: 'center !important',
    background: 'linear-gradient(135deg, #0f172a 0%, #4c1d95 50%, #0f172a 100%)',
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '4rem !important',
    paddingTop: '4rem !important',
  },
  heroText: {
    fontWeight: 'bold !important',
    color: '#ffffff !important',
    fontSize: '2.5rem',
    '@media (max-width: 960px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem',
    },
  },
  heroDesc: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center !important',
    margin: '0 250px !important',
    '@media (max-width: 1200px)': {
      margin: '0 150px !important',
    },
    '@media (max-width: 960px)': {
      margin: '0 80px !important',
      fontSize: '0.95rem',
    },
    '@media (max-width: 600px)': {
      margin: '0 40px !important',
      fontSize: '0.9rem',
    },
    '@media (max-width: 480px)': {
      margin: '0 20px !important',
      fontSize: '0.85rem',
    },
    '@media (max-width: 375px)': {
      margin: '0 10px !important',
      fontSize: '0.8rem',
    },
  },
  chip: {
    borderColor: 'rgba(255,255,255,0.2) !important',
    color: 'rgba(255,255,255,0.7) !important',
    fontSize: '0.85rem',
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
    },
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05) !important',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px !important',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    marginBottom: '8px',
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: 'rgba(255,255,255,0.15) !important',
    },
    '@media (max-width: 480px)': {
      // fontSize: '0.75rem',
      display: 'none',
    },
  },
  selectedCard: {
    backgroundColor: 'rgba(255,255,255,0.1) !important',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '16px !important',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    marginBottom: '8px',
    '&:hover': {
      transform: 'translateY(-2px)',
      backgroundColor: 'rgba(255,255,255,0.15) !important',
    },
  },
  avatar: {
    width: '56px',
    height: '56px',
    '@media (max-width: 375px)': {
      width: '48px',
      height: '48px',
    },
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#ffffff !important',
  },
  caption: {
    border: '1px solid rgba(255,255,255,0.3) !important',
    padding: '2px 8px',
    borderRadius: '4px',
    color: 'rgba(255,255,255,0.7) !important',
  },
  bodyText: {
    color: 'rgba(255,255,255,0.7)',
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.1) !important',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2) !important',
    },
  },
  quoteBox: {
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  quoteText: {
    fontStyle: 'italic',
    color: 'rgba(191,219,254,0.8) !important',
  },
  chatCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.05) !important',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px !important',
    border: '1px solid rgba(255,255,255,0.2) !important',
  },
  chatHeader: {
    flex: '0 0 auto',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    padding: '16px',
  },
  chatContent: {
    flex: '1 1 auto',
    overflowY: 'auto',
    padding: '16px',
    transition: 'opacity 0.5s ease-in-out',
    '@media (max-width: 375px)': {
      padding: '8px',
    },
  },
  chatFooter: {
    padding: '16px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 480px)': {
      padding: '8px',
    },
  },
  messageBoxUser: {
    background: 'linear-gradient(to right, #3b82f6, #9333ea) !important',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '12px !important',
    maxWidth: '80%',
    fontSize: '0.9rem',
    '@media (max-width: 375px)': {
      fontSize: '0.8rem',
    },
  },
  messageBoxAI: {
    backgroundColor: 'rgba(255,255,255,0.1) !important',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '12px',
    maxWidth: '80%',
    fontSize: '0.9rem',
    '@media (max-width: 375px)': {
      fontSize: '0.8rem',
    },
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.2) !important',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255,0.3) !important',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255,255,255,0.5) !important',
      },
    },
    '& input': {
      color: '#ffffff',
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'rgba(255,255,255,0.5) !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.85rem',
    },
  },
});

export default function GigaSpace1() {
  const classes = useStyles();
  const [selectedPersonality, setSelectedPersonality] = useState(legendaryPersonalities[0]);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const messageTimeouts = useRef([]);

  // Load messages with typing effect
  useEffect(() => {
    messageTimeouts.current.forEach(timeoutId => clearTimeout(timeoutId));
    messageTimeouts.current = [];

    setChatMessages([]);

    const messages = sampleConversations[selectedPersonality.name] || [];
    messages.forEach((msg, i) => {
      const timeoutId = setTimeout(() => {
        setChatMessages((prev) => [...prev, msg]);
      }, i * 2000);
      messageTimeouts.current.push(timeoutId);
    });

    return () => {
      messageTimeouts.current.forEach(timeoutId => clearTimeout(timeoutId));
      messageTimeouts.current = [];
    };
  }, [selectedPersonality]);

  // Auto-switch personalities every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPersonality((prev) => {
        const currentIndex = legendaryPersonalities.findIndex(p => p.name === prev.name);
        const nextIndex = (currentIndex + 1) % legendaryPersonalities.length;
        return legendaryPersonalities[nextIndex];
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle sending messages
  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMessage = { type: 'user', text: messageInput };
    setChatMessages((prev) => [...prev, newMessage]);
    setMessageInput('');

    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        text: "That's an interesting question. Let me think about it.",
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Box className={classes.container}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom className={classes.heroText}>
          Giga Space
        </Typography>
        <Typography variant="body1" className={classes.heroDesc}>
          Many great legends are no longer with us, yet the desire to meet, learn, and talk to them has always lived in our imagination.
          Gigaspace makes this possible through AI-powered conversations with historical icons, innovators, and modern leaders.
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" mt={2} flexWrap="wrap">
          <Chip label="Chat with legendary personalities" variant="outlined" className={classes.chip} />
          <Chip label="Create your own AI personality" variant="outlined" className={classes.chip} />
          <Chip label="Chat in 10+ languages" variant="outlined" className={classes.chip} />
        </Stack>
      </Box>

      <Box display="flex" flexDirection="row" width="100%" gap="16px" flexWrap="wrap" justifyContent="center" alignItems="stretch">
        {/* Left Panel */}
        <Box flex="1" minWidth="280px" display="flex" flexDirection="column">
          <Stack spacing={2} flex="1">
            {legendaryPersonalities.map((personality, index) => (
              <Card
                key={index}
                className={
                  selectedPersonality.name === personality.name
                    ? classes.selectedCard
                    : classes.card
                }
                onClick={() => setSelectedPersonality(personality)}
              >
                <CardContent>
                  <Box display="flex" flexDirection="row" alignItems="center" gap="16px">
                    <Avatar
                      src={personality.image}
                      className={classes.avatar}
                      style={{ border: `2px solid ${personality.color}` }}
                    />
                    <Box flex="1">
                      <Typography variant="subtitle1" className={classes.subtitle}>
                        {personality.name}
                      </Typography>
                      <Typography variant="caption" className={classes.caption}>
                        {personality.title}
                      </Typography>
                      <Typography variant="body2" className={classes.bodyText} noWrap>
                        {personality.specialty}
                      </Typography>
                    </Box>
                    <IconButton className={classes.iconButton}>
                      <MessageIcon style={{ color: '#ffffff' }} />
                    </IconButton>
                  </Box>
                  {selectedPersonality.name === personality.name && (
                    <Box className={classes.quoteBox}>
                      <Typography variant="body2" className={classes.quoteText}>
                        "{personality.quote}"
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Right Panel */}
        <Box flex="1" minWidth="280px" display="flex" flexDirection="column">
          <Card className={classes.chatCard}>
            <Box className={classes.chatHeader}>
              <Box display="flex" flexDirection="row" alignItems="center" gap="16px">
                <Avatar
                  src={selectedPersonality.image}
                  style={{ border: `2px solid ${selectedPersonality.color}` }}
                />
                <Box flex="1">
                  <Typography variant="subtitle1" style={{ color: '#ffffff' }}>
                    {selectedPersonality.name}
                  </Typography>
                  <Typography variant="caption" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Online • Powered by AI
                  </Typography>
                </Box>
                <IconButton style={{ color: '#ffffff' }}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>

            <Box className={classes.chatContent}>
              {chatMessages.map((msg, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  flexDirection="row"
                  justifyContent={msg.type === 'user' ? 'flex-end' : 'flex-start'}
                  mb={1}
                >
                  {msg.type === 'ai' && (
                    <Avatar
                      src={selectedPersonality.image}
                      style={{ marginRight: '8px', border: `2px solid ${selectedPersonality.color}` }}
                    />
                  )}
                  <Box
                    className={
                      msg.type === 'user'
                        ? classes.messageBoxUser
                        : classes.messageBoxAI
                    }
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                  </Box>
                  {msg.type === 'user' && (
                    <Avatar style={{ marginLeft: '8px', backgroundColor: '#9e9e9e' }}>
                      <PersonIcon fontSize="small" />
                    </Avatar>
                  )}
                </Box>
              ))}
            </Box>

            <Box className={classes.chatFooter}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder={`Ask ${selectedPersonality.name} anything...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                className={classes.textFieldRoot}
              />
              <IconButton color="primary" onClick={sendMessage}>
                <SendIcon />
              </IconButton>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
