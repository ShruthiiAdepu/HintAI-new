import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../components/Layout/Sidebar';
import { darkTheme } from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      
      // Here you would typically send to backend and get AI response
      // For now, we'll mock an AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "This is a mock AI response", sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: darkTheme.palette.background.default }}>
        {sidebarOpen && <Sidebar />}
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Top Bar */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid #3c4043'
          }}>
            <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
              <MenuIcon sx={{ color: darkTheme.palette.text.primary }} />
            </IconButton>
            <Typography variant="h6" sx={{ color: darkTheme.palette.text.primary }}>
              Hint.ai
            </Typography>
            <Avatar sx={{ bgcolor: darkTheme.palette.primary.main }}>U</Avatar>
          </Box>
          
          {/* Chat Area */}
          <Box sx={{ 
            flex: 1, 
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {messages.length === 0 ? (
              <Typography variant="h4" sx={{ color: darkTheme.palette.text.secondary }}>
                Hello, Username
              </Typography>
            ) : (
              <Box sx={{ width: '100%' }}>
                {messages.map((msg, index) => (
                  <Box key={index} sx={{ 
                    mb: 2,
                    textAlign: msg.sender === 'user' ? 'right' : 'left'
                  }}>
                    <Typography sx={{ 
                      display: 'inline-block',
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: msg.sender === 'user' 
                        ? darkTheme.palette.primary.main 
                        : '#303134',
                      color: darkTheme.palette.text.primary
                    }}>
                      {msg.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          
          {/* Input Area */}
          <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{ 
              p: 3, 
              borderTop: '1px solid #3c4043',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ width: '80%' }}>
              <TextField
                fullWidth
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message Hint.ai..."
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit">
                      <SendIcon sx={{ color: darkTheme.palette.primary.main }} />
                    </IconButton>
                  ),
                  style: { 
                    color: darkTheme.palette.text.primary,
                    backgroundColor: '#303134',
                    borderRadius: 15
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;