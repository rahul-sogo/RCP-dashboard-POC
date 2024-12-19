import { Avatar, Box, Stack, Typography } from '@mui/material';
import { AppLink } from '../common';

interface UserInfoProps {
  className?: string;
  showAvatar?: boolean;
  user?: any;
}

/**
 * Renders User info with Avatar
 * @component UserInfo
 * @param {boolean} [showAvatar] - user's avatar picture is shown when true
 * @param {object} [user] - logged user data {name, email, avatar...}
 */
const UserInfo = ({ showAvatar = false, user, ...restOfProps }: UserInfoProps) => {
  const fullName = user?.name || [user?.nameFirst || '', user?.nameLast || ''].join(' ').trim();
  const srcAvatar = user?.avatar ? user?.avatar : undefined;
  const userPhoneOrEmail = user?.phone || (user?.email as string);

  return (
    // <Stack alignItems="center" minHeight="fit-content" marginBottom={2} {...restOfProps}>
    //   {showAvatar ? (
    //     <AppLink to="/me" underline="none">
    //       <Avatar
    //         sx={{
    //           width: 64,
    //           height: 64,
    //           fontSize: '3rem',
    //         }}
    //         alt={fullName || 'User Avatar'}
    //         src={srcAvatar}
    //       />
    //     </AppLink>
    //   ) : null}
    //   <Typography sx={{ mt: 1 }} variant="h6">
    //     {fullName || 'Current User'}
    //   </Typography>
    //   <Typography variant="body2">{userPhoneOrEmail || 'Loading...'}</Typography>
    // </Stack>

    
    <Stack 
  alignItems="flex-start" 
  direction="row" 
  minHeight="fit-content" 
  padding={2} 
  spacing={2} 
  {...restOfProps}
>
  {showAvatar && (
    <AppLink to="/me" underline="none">
      <Avatar
        sx={{
          width: 40,
          height: 40,
          fontSize: '1.5rem',
        }}
        alt={fullName || 'User Avatar'}
        src={srcAvatar}
      />
    </AppLink>
  )}
  <Box display="flex" flexDirection="column" justifyContent="center">
    <Typography 
      variant="body2" 
      color="text.secondary" 
      sx={{ lineHeight: 1 }}
    >
      Redswitches
    </Typography>
    <Typography 
      variant="subtitle1" 
      fontWeight="bold"
      sx={{ lineHeight: 1 }}
    >
      {fullName || 'Current User'}
    </Typography>
  </Box>
</Stack>

  );
};

export default UserInfo;
