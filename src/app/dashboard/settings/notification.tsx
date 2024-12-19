import React from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';

const Notification = () => {
  const notifications = [
    {
      title: 'Server Online/Offline Status',
      description: "Receive notifications when a server's status changes from online to offline or vice versa",
    },
    {
      title: 'Server Resource Usage',
      description: "Receive notifications when a server’s resource usage (CPU, memory, storage) exceeds a certain threshold",
    },
    {
      title: 'Server Network Activity',
      description: "Receive notifications when a server's incoming or outgoing network traffic exceeds a certain threshold",
    },
    {
      title: 'Scheduled Maintenance Notifications',
      description: 'Receive notifications when a server or group of servers will be undergoing scheduled maintenance',
    },
    {
      title: 'Recent Server Events',
      description: 'Receive notifications of recent events such as server restarts, software updates, and error messages',
    },
  ];

  return (
    <Box p={3}>
      {notifications.map((item, index) => (
        <Box key={index} display="flex" alignItems="center" mb={3}>
          <FormControlLabel
            control={<Switch color="primary" />}
            label={
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {item.description}
                </Typography>
              </Box>
            }
            labelPlacement="start"
            sx={{ m: 0, flex: 1, justifyContent: "space-between", display: "flex" }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Notification;
