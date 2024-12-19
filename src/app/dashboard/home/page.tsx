import { Metadata, NextPage } from 'next';
import { Stack, Typography } from '@mui/material';
import { AppLink } from '@/components';
import DemoAppAlert from '../../dev/components/DemoAppAlerts';
import DemoAppButton from '../../dev/components/DemoAppButton';
import DemoAppIcon from '../../dev/components/DemoAppIcon';
import DemoAppIconButton from '../../dev/components/DemoAppIconButton';
import DemoAppImage from '../../dev/components/DemoAppImage';
import { RsTable } from '@/components/common/RsTable';
import SampleTable from '@/app/dev/components/SampleTable';

export const metadata: Metadata = {
  title: '_TITLE_',
  description: '_DESCRIPTION_',
};

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
    <Stack spacing={2} padding={2}>
      <Stack alignItems="center" spacing={1}>
      </Stack>
    </Stack>
  );
};

export default Home;
