import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        
        {/* Sign up comes first */}
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Then login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected home page */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;



