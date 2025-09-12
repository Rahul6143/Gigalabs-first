import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  IconButton,
  Stack,
  Chip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const legendaryPersonalities = [
  {
    name: "Mahatma Gandhi",
    title: "Freedom Fighter & Philosopher",
    specialty: "Non-violent resistance & Social reform",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
    color: "#f97316", // orange
    quote: "Be the change you wish to see in the world"
  },
  {
    name: "Dr. APJ Abdul Kalam",
    title: "Scientist & Former President",
    specialty: "Aerospace & Missile technology",
    image: "https://djcvm26yy6fab.cloudfront.net/1653801379_elibrary_content_abdul%20kalam.jpg",
    color: "#3b82f6", // blue
    quote: "Dream is not what you see in sleep, it's what doesn't let you sleep"
  },
  {
    name: "Sundar Pichai",
    title: "CEO of Google",
    specialty: "Technology leadership & Innovation",
    image: "https://c.ndtvimg.com/2023-10/351d3hag_sundar-pichai_625x300_11_October_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    color: "#10b981", // green
    quote: "It's important not to be afraid to take risks"
  },
  {
    name: "Steve Jobs",
    title: "Co-founder of Apple",
    specialty: "Innovation & Design",
    image: "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=1xw:0.39667xh;center,top&resize=1200:*",
    color: "#6b7280", // gray
    quote: "Stay hungry, stay foolish"
  }
];

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

export default function GigaSpace() {
  const [selectedPersonality, setSelectedPersonality] = useState(legendaryPersonalities[0]);
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    loadSampleConversation();
  }, [selectedPersonality]);

  const loadSampleConversation = () => {
    const messages = sampleConversations[selectedPersonality.name] || [];
    setChatMessages(messages);
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMessage = { type: 'user', text: messageInput };
    setChatMessages(prev => [...prev, newMessage]);
    setMessageInput('');

    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        text: "That's an interesting question. Let me think about it."
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: 3,
        bgcolor: 'transparent',
        background: 'linear-gradient(135deg, #0f172a 0%, #4c1d95 50%, #0f172a 100%)',
        color: '#fff',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Giga Space
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.7)" maxWidth="600px" mx="auto">
          Many great legends are no longer with us, yet the desire to meet, learn, and talk to them has always lived in our imagination.
          Gigaspace makes this possible through AI-powered conversations with historical icons, innovators, and modern leaders.
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" mt={2} flexWrap="wrap">
          <Chip label="Chat with legendary personalities" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }} />
          <Chip label="Create your own AI personality" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }} />
          <Chip label="Chat in 10+ languages" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }} />
        </Stack>
      </Box>

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Personality Cards */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {legendaryPersonalities.map((personality, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: selectedPersonality.name === personality.name ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-2px)', bgcolor: 'rgba(255,255,255,0.15)' }
                }}
                onClick={() => setSelectedPersonality(personality)}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={personality.image} sx={{ width: 56, height: 56, border: `2px solid ${personality.color}` }} />
                    <Box flex="1">
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{personality.name}</Typography>
                      <Typography variant="caption" sx={{ border: '1px solid rgba(255,255,255,0.3)', px: 1, borderRadius: 1 }}>{personality.title}</Typography>
                      <Typography variant="body2" color="rgba(255,255,255,0.7)" noWrap>{personality.specialty}</Typography>
                    </Box>
                    <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                      <SendIcon sx={{ color: '#fff' }} />
                    </IconButton>
                  </Stack>
                  {selectedPersonality.name === personality.name && (
                    <Box mt={2} pt={2} borderTop="1px solid rgba(255,255,255,0.1)">
                      <Typography variant="body2" fontStyle="italic" color="rgba(191,219,254,0.8)">
                        "{personality.quote}"
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>

        {/* Chat Preview */}
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '500px', bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <CardContent sx={{ flex: '0 0 auto', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={selectedPersonality.image} sx={{ border: `2px solid ${selectedPersonality.color}` }} />
                <Box flex="1">
                  <Typography variant="subtitle1">{selectedPersonality.name}</Typography>
                  <Typography variant="caption" color="rgba(255,255,255,0.7)">Online • Powered by AI</Typography>
                </Box>
                <IconButton sx={{ color: '#fff' }}>
                  <AddIcon />
                </IconButton>
              </Stack>
            </CardContent>

            <CardContent sx={{ flex: '1 1 auto', overflowY: 'auto', p: 2 }}>
              {chatMessages.map((msg, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  justifyContent={msg.type === 'user' ? 'flex-end' : 'flex-start'}
                  mb={1}
                >
                  {msg.type === 'ai' && (
                    <Avatar src={selectedPersonality.image} sx={{ mr: 1, border: `2px solid ${selectedPersonality.color}` }} />
                  )}
                  <Box
                    sx={{
                      bgcolor: msg.type === 'user' ? 'primary.main' : 'rgba(255,255,255,0.1)',
                      color: msg.type === 'user' ? 'primary.contrastText' : '#fff',
                      borderRadius: 2,
                      p: 1,
                      maxWidth: '80%'
                    }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                  </Box>
                  {msg.type === 'user' && (
                    <Avatar sx={{ ml: 1, bgcolor: 'grey.500' }}>
                      <PersonIcon fontSize="small" />
                    </Avatar>
                  )}
                </Box>
              ))}
            </CardContent>

            <CardActions sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder={`Ask ${selectedPersonality.name} anything...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                sx={{
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'rgba(255,255,255,0.5)' }
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255,255,255,0.5)'
                  }
                }}
              />
              <IconButton color="primary" onClick={sendMessage}>
                <SendIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
