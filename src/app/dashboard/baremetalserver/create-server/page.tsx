'use client';

import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { AppButton } from '@/components';

const CreateServer: React.FC = () => {
  const router = useRouter();

  const handleCancelCreateServer = () => {
    router.push('/dashboard/baremetalserver');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Global Search and Icons */}
      <Box display="flex" justifyContent="space-between" mb={4}>
        <TextField
          variant="outlined"
          placeholder="Global Search"
          size="small"
          sx={{ width: '20rem' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" gap={2}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Title and Cancel Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" fontWeight="bold">
          Create Server
        </Typography>
        <Button variant="outlined" onClick={handleCancelCreateServer}>
          Cancel
        </Button>
      </Box>

      {/* Server Type Selection */}
      <Grid container spacing={2} mb={4}>
        {['Deploy on Demand', 'Deploy Reserved Server'].map((type, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                '&:hover': { borderColor: 'primary.main', cursor: 'pointer' },
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {type}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Available Servers */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Available Servers
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          {['All Servers', 'Server Types', 'More Filters'].map((filter, idx) => (
            <Button variant="outlined" key={idx}>
              {filter}
            </Button>
          ))}
        </Box>
        <Grid container spacing={2}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid item xs={12} key={index}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  {/* Server Info */}
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      C2.medium.x86
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      E-2176G, 6 Cores @ GHz, 32 GB RAM 500 GB SSD 1 Gbps NIC
                    </Typography>
                  </Box>

                  {/* Supported OS */}
                  <Box textAlign="center">
                    <Typography variant="body2" fontWeight="bold" mb={1}>
                      Supported OS
                    </Typography>
                    <Box display="flex" gap={1}>
                      {['Ubuntu', 'CentOS', 'Red Hat'].map((os, idx) => (
                        <Checkbox key={idx} />
                      ))}
                    </Box>
                  </Box>

                  {/* Price Info */}
                  <Box textAlign="right">
                    <Typography variant="body2" fontWeight="bold">
                      Price
                    </Typography>
                    <Typography variant="body2">$2.95/hr</Typography>
                    <Typography variant="body2" color="textSecondary">
                      $88.3/mo
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Choose Location */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Choose Location
        </Typography>
        <Box display="flex" gap={2}>
          {['Paris', 'Sao Paulo', 'Mexico', 'London', 'Dallas', 'Miami'].map((location, idx) => (
            <Button variant="outlined" key={idx}>
              {location}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Choose Operating System */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Choose Operating System
        </Typography>
        <Grid container spacing={2}>
          {['Ubuntu', 'CentOS', 'Red Hat', 'Rocky', 'Windows', 'Debian'].map((os, idx) => (
            <Grid item xs={6} sm={4} key={idx}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: 'center',
                  '&:hover': { borderColor: 'primary.main', cursor: 'pointer' },
                }}
              >
                {os}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Options */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Options
        </Typography>
        <Box mb={2}>
          <Typography variant="body2" mb={1}>
            SSH Keys
          </Typography>
          <Button variant="outlined" fullWidth>
            Choose SSH Keys
          </Button>
        </Box>
        <Box>
          <Typography variant="body2" mb={1}>
            User Data
          </Typography>
          <Button variant="outlined" fullWidth>
            Select a Script
          </Button>
        </Box>
      </Box>

      {/* RAID Options */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          RAID
        </Typography>
        <Box display="flex" gap={2}>
          {['No RAID', 'RAID 0', 'RAID 1'].map((raid, idx) => (
            <Button variant="outlined" key={idx}>
              {raid}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Billing */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Billing
        </Typography>
        <Box display="flex" gap={2}>
          {['Hourly', 'Monthly'].map((billing, idx) => (
            <Button variant="outlined" key={idx}>
              {billing}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Hostname */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Your Hostname
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          defaultValue="c2-small-x86-dal-1"
          helperText="Choose a name to help identify your server. You can use alphanumeric characters, dashes, and periods up to 32 characters."
        />
      </Box>

      {/* Summary */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Summary
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2">Location: Dallas</Typography>
          <Typography variant="body2">Server Type: C2.medium.x86</Typography>
          <Typography variant="body2">Quantity: 1</Typography>
        </Paper>
      </Box>

      {/* Total and Deploy */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="body2" color="textSecondary">
            Total
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            $2.95/hr
          </Typography>
        </Box>
        <Button variant="contained" sx={{color:"white"}} endIcon={<ArrowForwardIcon />}>
          Deploy Now
        </Button>
      </Box>
    </Container>
  );
};

export default CreateServer;
