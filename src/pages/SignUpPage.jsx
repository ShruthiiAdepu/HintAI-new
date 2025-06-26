import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { darkTheme } from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
// After successful signup, redirect to login
  navigate('/login');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor: darkTheme.palette.background.default,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            component="form"
            onSubmit={handleSignUp}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              p: 4,
              borderRadius: 12,
              backgroundColor: darkTheme.palette.background.paper,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ mb: 2, color: darkTheme.palette.primary.main }}>
              Hint.ai
            </Typography>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px', // Adjust this value as needed
    }
  }}
              required
              InputLabelProps={{ style: { color: darkTheme.palette.text.secondary } }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px', // Adjust this value as needed
    }
  }}
              required
              InputLabelProps={{ style: { color: darkTheme.palette.text.secondary } }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px', // Adjust this value as needed
    }
  }}
              required
              InputLabelProps={{ style: { color: darkTheme.palette.text.secondary } }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: '12px',
                backgroundColor: darkTheme.palette.primary.main,
                '&:hover': {
                  backgroundColor: '#7aa3e5',
                },
              }}
            >
              SIGN UP
            </Button>
            <Typography variant="body2" sx={{ mt: 2, color: darkTheme.palette.text.secondary }}>
              Already have an account?{' '}
              <span 
                style={{ color: darkTheme.palette.primary.main, cursor: 'pointer' }}
                onClick={() => navigate('/login')}
              >
                Sign In
              </span>
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpPage;