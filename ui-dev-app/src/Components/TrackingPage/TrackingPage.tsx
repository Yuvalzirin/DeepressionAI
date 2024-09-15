import React, { useEffect, useState } from 'react'
import { Patient } from '../PatientsPanel/Patients.model'
import { Container, Grid, Typography } from '@mui/material'
import { UserBox } from '../UserBox/UserBox'
import Stack from '@mui/material/Stack'

const TrackingPage: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await fetch('http://localhost:8080/api/patients');
        const data = await response.json();
        setPatients(data);
    };

    return (
      <Stack sx={{ padding: '64px' }} >
        <Container maxWidth='xl'>
          <Typography variant="h4" sx={{ marginBottom: '30px'}}>
              Patients List
          </Typography>
          <Grid container spacing={1}>
              {patients.map((patient) => (
                <Grid item xs={12} sm={12} md={12} key={patient.id} style={{ marginBottom: '10px'}}>
                    <UserBox patient={patient} posts={patient.posts}/>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Stack>
    );
};

export default TrackingPage;
