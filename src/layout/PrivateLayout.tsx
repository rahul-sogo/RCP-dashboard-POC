import { FunctionComponent, PropsWithChildren } from 'react';
import { IS_DEBUG } from '@/config';
import { LinkToPage } from '@/utils';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';
import { Stack } from '@mui/material';

const TITLE_PRIVATE = '_TITLE_'; // Title for pages after authentication

/**
 * SideBar navigation items with links for Private Layout
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: 'home',
  },
  {
    title: 'Bare Metal Server',
    path: '/dashboard/baremetalserver',
    icon: 'account',
  },
  {
    title: 'My servers',
    path: '/dashboard/myservers',
    icon: 'server',
  },
  {
    title: 'Deploy',
    path: '/dashboard/deploy',
    icon: 'info',
  },
  {
    title: 'Networking',
    path: '/dashboard/networking',
    icon: 'network',
  },
  {
    title: 'Storage',
    path: '/dashboard/storage',
    icon: 'storage',
  },
  {
    title: 'Other Menus',
    path: '/dashboard/othermenus',
    icon: 'menu',
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: 'settings',
  },
];

// Add debug links
IS_DEBUG &&
  SIDE_BAR_ITEMS.push({
    title: '[Debug Tools]',
    path: '/dev',
    icon: 'settings',
  });

/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const title = TITLE_PRIVATE;
  document.title = title; // Also Update Tab Title  // TODO: Do we need this? Move it to useEffect()?

  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS} title={title} variant="sidebarPersistentOnDesktop">
      {children}
      {/* <Stack component="footer">Copyright &copy; </Stack> */}
    </TopBarAndSideBarLayout>
  );
};

export default PrivateLayout;

