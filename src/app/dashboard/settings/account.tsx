import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const profileDetails = [
  { label: 'Full Name', value: 'Georgia Lee' },
  { label: 'Email', value: 'georgialee@gmail.com' },
  { label: 'Phone Number', value: '+1938-3294-2345' },
  { label: 'Company Name', value: 'Climate LTD' },
  { label: 'Tax ID', value: '94857348987383489758' },
];

const Account = () => {
  return (
    <Box
      sx={{
        // maxWidth: 600,
        mx: 'auto',
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Profile Picture Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'left',
          mb: 3,
          flexDirection: 'column',
        }}
      >
        <Avatar sx={{ width: 80, height: 80, mb: 2 }}>A</Avatar>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined">Upload Image</Button>
          <Button variant="text" color="error">Remove</Button>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Supported format: PNG, JPG, JPEG. Max 5 MB
        </Typography>
      </Box>

      {/* Profile Details Section */}
      {profileDetails.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1.5,
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="body1">{item.value}</Typography>
          </Box>
          <IconButton size="small" color="primary">
            <EditIcon />
          </IconButton>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      {/* Delete Account Section */}
      <Button variant="outlined" >
        Delete Account
      </Button>
    </Box>
  );
};

export default Account;
