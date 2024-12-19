// import { Stack } from '@mui/material';
// import { NextPage } from 'next';
// import { AppAlert, UserInfo } from '../../../components';

// /**
//  * Renders User Profile Page
//  * @page Me
//  */
// const BareMetalServer: NextPage = () => {
//   return (
//     <Stack spacing={2} padding={2}>
//       <AppAlert severity="warning">This page is under construction</AppAlert>
//       <h1> This is bare metal server page</h1>
//       {/* <UserInfo showAvatar /> */}
//     </Stack>
//   );
// };

// export default BareMetalServer;

'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Add as AddIcon,
  Chat as ChatIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
// import { AppAlert } from '../../../components';
import { AppButton, AppTable } from '../../../components';
import SampleTable from '@/app/dev/components/SampleTable';
import { Column } from '@/components/common/RsTable/RsTable';
import RsTable from '@/components/common/RsTable';


const BareMetalServer = () => {
  const router = useRouter();

  interface Server {
    hostName: string;
    server: string;
    ipAddress: string;
    location: string;
    os: string;
    status: string;
  }

  const [servers] = useState<Server[]>([
    {
      hostName: 'rsx3655.redswitches.com',
      server: 'c2.small.x86',
      ipAddress: '95.123.44.57',
      location: 'San Francisco',
      os: 'Ubuntu',
      status: 'Deploying',
    },
    {
      hostName: 'rsx3656.redswitches.com',
      server: 'c2.medium.x86',
      ipAddress: '95.123.45.58',
      location: 'New York',
      os: 'Ubuntu',
      status: 'Running',
    },
    {
      hostName: 'rsx3657.redswitches.com',
      server: 'c2.large.x86',
      ipAddress: '95.123.46.59',
      location: 'Los Angeles',
      os: 'CentOS',
      status: 'Stopped',
    },
    {
      hostName: 'rsx3658.redswitches.com',
      server: 'c2.small.x86',
      ipAddress: '95.123.47.60',
      location: 'Chicago',
      os: 'Debian',
      status: 'Deploying',
    },
    {
      hostName: 'rsx3659.redswitches.com',
      server: 'c2.medium.x86',
      ipAddress: '95.123.48.61',
      location: 'Houston',
      os: 'Ubuntu',
      status: 'Running',
    },
  ]);

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    alert(`Copied ${ip} to clipboard!`);
  };

  const handleCreateServerClick = () => {
    router.push('./create-server');
  };


  interface Column {
    id: keyof Server; // Ensures 'id' matches a property of the Server interface
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
  }

  const columns: Column[] = [
    { id: 'hostName', label: 'Host Name', minWidth: 200 },
    { id: 'server', label: 'Server', minWidth: 150 },
    { id: 'ipAddress', label: 'IP Address', minWidth: 150 },
    { id: 'location', label: 'Location', minWidth: 150 },
    { id: 'os', label: 'Operating System', minWidth: 150 },
    { id: 'status', label: 'Status', minWidth: 100 },
  ];

  const rows = [
    {
      hostName: 'rsx3655.redswitches.com',
      server: 'c2.small.x86',
      ipAddress: '95.123.44.57',
      location: 'San Francisco',
      os: 'Ubuntu',
      status: 'Deploying',
    },
    {
      hostName: 'rsx3656.redswitches.com',
      server: 'c2.medium.x86',
      ipAddress: '95.123.45.58',
      location: 'New York',
      os: 'Ubuntu',
      status: 'Running',
    },
    {
      hostName: 'rsx3657.redswitches.com',
      server: 'c2.large.x86',
      ipAddress: '95.123.46.59',
      location: 'Los Angeles',
      os: 'CentOS',
      status: 'Stopped',
    },
    {
      hostName: 'rsx3658.redswitches.com',
      server: 'c2.small.x86',
      ipAddress: '95.123.47.60',
      location: 'Chicago',
      os: 'Debian',
      status: 'Deploying',
    },
    {
      hostName: 'rsx3659.redswitches.com',
      server: 'c2.medium.x86',
      ipAddress: '95.123.48.61',
      location: 'Houston',
      os: 'Ubuntu',
      status: 'Running',
    },
  ];

  return (
    <>
    

      {/*----------------- THIS IS WITHOUT CODE REUSABILITY------------------------------------------------------------- */}
      {/* <Container maxWidth="lg">
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Global Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add New">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Stack spacing={3} padding={2}>
      

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">My Servers</Typography>
          <Button variant="contained" sx={{color:"white"}} 
          onClick={handleCreateServerClick}
          >
            + Create Server
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined">Filters</Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>HOST NAME</TableCell>
                <TableCell>SERVER</TableCell>
                <TableCell>IP ADDRESS</TableCell>
                <TableCell>LOCATION</TableCell>
                <TableCell>OS</TableCell>
                <TableCell>STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {servers.map((server, index) => (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{server.hostName}</TableCell>
                  <TableCell>{server.server}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography>{server.ipAddress}</Typography>
                      <IconButton size="small" 
                      onClick={() => copyToClipboard(server.ipAddress)}
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell>{server.location}</TableCell>
                  <TableCell>{server.os}</TableCell>
                  <TableCell>{server.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <IconButton
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': { bgcolor: 'primary.dark' },
        }}
      >
        <ChatIcon  />
      </IconButton>
    </Container> */}

      {/*----------------- REUSABLE WITH TABLE(<RsTable>)component AND OTHER THINGS LIKE THE SEARCH AND BUTTONS------------------------------------------------------------- */}


      <Container>
        <AppBar position="static" color="default" elevation={1}>
          <Toolbar>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Global Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ flexGrow: 1, mr: 2 }}
            />
            <Tooltip title="Notifications">
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add New">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Stack spacing={3} padding={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">My Servers</Typography>
            <Button variant="contained" sx={{ color: 'white' }} onClick={handleCreateServerClick}>
              + Create Server
            </Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="outlined">Filters</Button>
          </Stack>
          <RsTable columns={columns} rows={rows} tableHeight={500} />
        </Stack>

        <IconButton
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <ChatIcon />
        </IconButton>
      </Container>
    </>
  );
};

export default BareMetalServer;
