import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Add as AddIcon, 
  History as HistoryIcon, 
  Settings as SettingsIcon,
  Help as HelpIcon
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#e8eaed',
        borderRight: '1px solid #3c4043',
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: '#9aa0a6' }}>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="New Chat" />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: '#9aa0a6' }}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Recent" />
          </ListItemButton>
        </ListItem>
      </List>
      
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: '#9aa0a6' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: '#9aa0a6' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;