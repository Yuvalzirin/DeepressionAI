import React, { useState } from 'react'
import { Divider, Typography } from '@mui/material'
import { Post } from '../PatientsPanel/Patients.model'
import { StyledPostMetadata } from './PostBox.styles'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TwitterIcon from '@mui/icons-material/Twitter';

const PostBox: React.FC<Post> = ({ id, source, text, prediction, date }) => {
  const [currentPrediction, setCurrentPrediction] = useState(prediction ?? 0)

  const dateObject = new Date(date);
  const formatedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '20px'}}>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography align="left" variant="h6" style={{ overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {text}
            </Typography>
          </Stack>
          <Stack spacing={1}>
          <StyledPostMetadata style={{ width: '80px', height: '80px'}}>
            <CircularProgressbar value={currentPrediction * 100} text={`${(currentPrediction * 100).toFixed(2)}%`}
                                 styles={buildStyles({
                                   rotation: 0.25,
                                   strokeLinecap: 'butt',
                                   textSize: '16px',
                                   pathTransitionDuration: 0.5,

                                   // Colors
                                   pathColor: `rgb(208, 106, 106)`,
                                   textColor: '#000',
                                   trailColor: '#87b976',
                                   backgroundColor: '#3e98c7',
                                 })}/>
          </StyledPostMetadata>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <AccessTimeIcon fontSize="small" />
          <Typography color="text.secondary" display="inline" variant="body2">
            Updated {formatedDate}
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={1}>
          <TwitterIcon fontSize="small" />
        </Stack>
      </Stack>
    </Card>
  )
}

export default PostBox
