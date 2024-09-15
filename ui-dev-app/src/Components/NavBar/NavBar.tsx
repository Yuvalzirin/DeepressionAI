import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Box, Button } from '@mui/material'
import { StyledToolBar } from './NavBar.styles'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import TimelineIcon from '@mui/icons-material/Timeline'
import GridViewIcon from '@mui/icons-material/GridView'
import SettingsIcon from '@mui/icons-material/Settings'

const Navbar: React.FC = () => {

    return (
        <AppBar position="static" color="default">
            <StyledToolBar>
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <img src={'finalprojectlogo.png'} alt="Logo" style={{ height: '45px', marginRight: '16px',borderRadius: '50%' }} />
                </Box>
                <Button component={RouterLink} to="/" startIcon={<HomeIcon fontSize="large"/>} color="inherit"></Button>
                <Button component={RouterLink} to="/patient" startIcon={<GroupIcon fontSize="large"/>} color="inherit"></Button>
                <Button component={RouterLink} to="/tracking" startIcon={<TimelineIcon fontSize="large" />} color="inherit"></Button>
                <Button component={RouterLink} to="/dashboard" startIcon={<GridViewIcon fontSize="large" />} color="inherit"></Button>
                <Button component={RouterLink} to="/settings" startIcon={<SettingsIcon fontSize="large" />} color="inherit"></Button>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
