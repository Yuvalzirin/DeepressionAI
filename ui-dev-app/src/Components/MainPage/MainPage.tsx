import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import { HomeCard } from './HomeCard'

const MainPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #bdbdbd1c 0%, #9684843d 100%)',
        color: '#000000ab',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" sx={{ mb: 2, fontWeight: 'bold', justifyContent: 'center', flexDirection: 'column' }}>
        Empowering Psychiatrists with AI-Driven Insights
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Track patients' well-being and receive real-time alerts for potential suicide risks based on their social media
        posts.
      </Typography>
      <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'row', gap: '60px', margin: '100px'}}>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '300px', borderRadius: '20px' }} label="Patient Management"
                    value={'Effortlessly manage patient records and appointments'}/>
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '300px', borderRadius: '20px' }} label="AI-Powered Prediction"
                    value={'Predict potential suicide risks based on social media activity.'}/>
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '300px', borderRadius: '20px' }} label="Real-Time Alerts"
                    value={'Receive immediate notifications for high-risk patients.'}/>
        </Grid>
      </Grid>
      <Box>
        <Button component={RouterLink} to="/patient" variant="contained" sx={{ mr: 2, backgroundColor: '#ff4081' }}>
          Get Started
        </Button>
        <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
          Learn More
        </Button>
      </Box>
    </Box>
  )
}

export default MainPage
