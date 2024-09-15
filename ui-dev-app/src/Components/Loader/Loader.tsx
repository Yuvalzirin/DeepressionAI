import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import 'react-circular-progressbar/dist/styles.css'

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
      }}
    >
      <CircularProgress/>
    </Box>
  )
}

export default Loader
