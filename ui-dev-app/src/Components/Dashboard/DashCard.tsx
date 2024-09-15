import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import type { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking'
import PostAddIcon from '@mui/icons-material/PostAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
export interface DashCardProps {
  sx?: SxProps;
  label: string
  value: string | number;
}

export function DashCard ({ sx = { borderRadius: '20px' }, label, value }: DashCardProps): React.JSX.Element {
  let avatar;

  switch (label) {
    case ('Average Age'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#635bff', height: '56px', width: '56px' }}>
          <GroupsIcon fontSize="large"/>
        </Avatar>
      );
      break;
    case ('Total Patients'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#15b79f', height: '56px', width: '56px' }}>
          <SpatialTrackingIcon fontSize="large"/>
        </Avatar>
      );
      break;
    case ('Total Posts'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#fb9c0c', height: '56px', width: '56px' }}>
          <PostAddIcon fontSize="large"/>
        </Avatar>
      );
      break;
    case ('Average Prediction Score'):
      avatar = (
        <Avatar sx={{ backgroundColor: '#cc6969', height: '56px', width: '56px' }}>
          <BatchPredictionIcon fontSize="large"/>
        </Avatar>
      );
      break;
  }

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {label}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            {avatar}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
