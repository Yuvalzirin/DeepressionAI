import React from 'react'
import { Typography } from '@mui/material'
import { Notifications } from './Notifications'
import Stack from '@mui/material/Stack'

const SettingsScreen = () => {

  return (
    <Stack sx={{ padding: '64px' }} spacing={3}>
      <div>
        <Typography variant="h4">Settings</Typography>
      </div>
      <Notifications />
    </Stack>
  );
};

export default SettingsScreen;
