import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

interface SidebarProps {
  onSelect: (selectedItem: string) => void; //  define the prop type
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = ['Account', 'Security', 'Billing', 'Funds', 'Notification', 'Members'];

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    onSelect(menuItems[index]);
  };

  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper', height: '100vh', boxShadow: 2 }}>
      <List component="nav">
        {menuItems.map((item, index) => (
          <ListItemButton key={item} selected={selectedIndex === index} onClick={() => handleListItemClick(index)}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
