'use client'

import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Account from './account';
import Security from './security';
import Billing from './billing';
import Funds from './funds';
import Notification from './notification';
import Members from './members';

const SettingsPage = () => {
  const [selectedSection, setSelectedSection] = useState("Account");

  const renderSection = () => {
    switch (selectedSection) {
      case "Account":
        return <Account />;
      case "Security":
        return <Security />;
      case "Billing":
        return <Billing />;
      case "Funds":
        return <Funds />;
      case "Notification":
        return <Notification />;
      case "Members":
        return <Members />;
      default:
        return <Typography>Content for {selectedSection} is under construction.</Typography>;
    }
  };

  return (
    <>

  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
    Settings
  </Typography>


    <Stack direction="row" spacing={2}>
      {/* Sidebar */}
      <Sidebar onSelect={setSelectedSection} />

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 0 }}>
        {/* <Typography variant="h5" sx={{ mb: 3 }}>
          {selectedSection}
        </Typography>  */}
        {renderSection()}
      </Box>
    </Stack>

    </>
  );
};

export default SettingsPage;
