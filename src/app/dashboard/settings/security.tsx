import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const passwordGuidelines = [
  'Use at least 8 characters',
  'Use a mix of letters, numbers, and special characters (e.g.: #%$)',
  'Try combining words and symbols into a unique phrase',
];

const Security = () => {
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
      {/* Password Section */}
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <TextField
          fullWidth
          label="Current Password"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="New Password"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirm New Password"
          type="password"
          variant="outlined"
          margin="normal"
        />

        <List>
          {passwordGuidelines.map((guideline, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <CheckCircleIcon color="success" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={guideline} />
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 0,color:'white', backgroundColor: 'black' }}
        >
          Save Changes
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Two-Factor Authentication Section */}
      <Box
         sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack>
        <Typography variant="h6" gutterBottom>
          Two-factor authentication (2FA)
        </Typography>
        <Typography color="text.secondary" mb={1}>
          Adds an extra layer of protection by requiring a second verification <br/>
          step, like a code from your phone, beyond your password.
        </Typography>
        </Stack>
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Enable 2FA"
          labelPlacement="end"
        />
      </Box>
    </Box>
  );
};

export default Security;