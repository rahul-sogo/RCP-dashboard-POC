import { Stack } from '@mui/material';
import { NextPage } from 'next';
import { AppAlert, UserInfo } from '../../../components';

/**
 * Renders User Profile Page
 * @page Me
 */
const DeployPage: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <AppAlert severity="warning">This page is under construction</AppAlert>
      <h1> This is Deploy page</h1>
      {/* <UserInfo showAvatar /> */}
    </Stack>
  );
};

export default DeployPage;
