import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import type { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'

export interface HomeCardProps {
  sx?: SxProps;
  label: string
  value: string | number;
}

export function HomeCard ({ sx = { borderRadius: '20px' }, label, value }: HomeCardProps): React.JSX.Element {
  let avatar

  switch (label) {
    case ('Patient Management'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#635bff', height: '56px', width: '56px' }}>
          <SignalCellularAltIcon fontSize="large"/>
        </Avatar>
      )
      break
    case ('AI-Powered Prediction'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#15b79f', height: '56px', width: '56px' }}>
          <SpatialTrackingIcon fontSize="large"/>
        </Avatar>
      )
      break
    case ('Real-Time Alerts'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#fb9c0c', height: '56px', width: '56px' }}>
          <NotificationsIcon fontSize="large"/>
        </Avatar>
      )
      break
  }

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="column" sx={{ alignItems: 'center' }} spacing={3}>
            {avatar}
            <Stack spacing={1}>
              <Typography color="text.primary" variant="overline">
                {label}
              </Typography>
              <Typography color="text.secondary" variant="body1">{value}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
