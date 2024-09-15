import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { Patient } from '../PatientsPanel/Patients.model'
import { ChartTable } from './ChartTable'
import { TrafficPie } from './TrafficPie'
import { calculateAverageStatus, calculateAverageStatusString } from '../UserBox/UserBox.utils'
import { DashCard } from './DashCard'
import Stack from '@mui/material/Stack'

const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [chartSeries, setChartSeries] = useState<{ name: string; data: number[] }[]>([])

  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    const response = await fetch('http://localhost:8080/api/patients')
    const data = await response.json()
    setPatients(data)
    prepareChartData(data)
  }

  const statusData = patients.reduce((acc, patient) => {
    const status = calculateAverageStatusString(patient.posts)
    if (acc[status]) {
      acc[status] += 1
    } else {
      acc[status] = 1
    }
    return acc
  }, {} as Record<string, number>)

  const PatientsStatuses = Object.keys(statusData)
  const PatientsStatusesAmount = Object.values(statusData)

  const prepareChartData = (patientsData: Patient[]) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const series = patientsData.map(patient => {
      const monthlyPosts = new Array(12).fill(0) // Initialize an array with 12 zeros

      patient.posts.forEach(post => {
        const postMonth = new Date(post.date).getMonth() // Assuming each post has a `date` field
        monthlyPosts[postMonth]++
      })

      return { name: patient.patientName, data: monthlyPosts }
    })

    setChartSeries(series)
  }

  return (
    <Stack sx={{ padding: '64px' }} >
      <Container maxWidth='xl'>
        <Typography variant="h4" sx={{ marginBottom: '30px'}}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid lg={3} sm={6} xs={12}>
            <DashCard label="Average Age"
                      value={patients.length ? (patients.reduce((acc, curr) => acc + curr.age, 0) / patients.length).toFixed(1) : 0}/>
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <DashCard label="Total Patients" value={patients.length}/>
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <DashCard label="Total Posts"
                      value={patients.length ? (patients.reduce((acc, curr) => acc + curr.posts.length, 0)) : 0}/>
          </Grid>
          <Grid lg={3} sm={6} xs={12}>
            <DashCard label="Average Prediction Score"
                      value={calculateAverageStatus(patients.flatMap(patient => patient.posts)).toFixed(2) + '%'}/>
          </Grid>
          <Grid lg={8} xs={12}>
            <ChartTable chartSeries={chartSeries} sx={{ height: '100%', borderRadius: '20px' }}/>
          </Grid>
          <Grid lg={4} md={6} xs={12}>
            <TrafficPie chartSeries={PatientsStatusesAmount} labels={PatientsStatuses}
                        sx={{ height: '100%', borderRadius: '20px' }}/>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Dashboard
