import React, { useEffect, useState } from 'react'
import { Box, Button, Drawer, IconButton } from '@mui/material'
import { styled } from '@mui/system'
import { AddPatientModal } from '../AddPatientModal/AddPatientModal'
import { Patient } from './Patients.model'
import { PatientsList } from '../PatientsList/PatientsList'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { StyledPatientsPanel } from './PatientsPanel.styles'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Loader from '../Loader/Loader'

const AddPatientButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textTransform: 'none'
}))

const PatientsPanel: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    setLoading(true)
    const response = await fetch('http://localhost:8080/api/patients')
    const data = await response.json()
    setPatients(data)
    setLoading(false)
  }

  const addPatient = async (patient: Partial<Patient>) => {
    const response = await fetch('http://localhost:8080/api/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    })

    const newPatient = await response.json()
    setPatients([...patients, newPatient])
    handleClose()
  }

  const deletePatient = async (id: string) => {
    await fetch(`http://localhost:8080/api/patients/${id}`, {
      method: 'DELETE',
    })

    setPatients(patients.filter(patient => patient.id !== id))
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <StyledPatientsPanel>
      <Box display="flex">
        <Drawer
          variant="persistent"
          anchor="right"
          open={drawerOpen}
          sx={{
            width: drawerOpen ? 340 : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 340,
              boxSizing: 'border-box',
              transition: 'width 0.3s',
            },
          }}
        >
          <Box sx={{ overflow: 'auto' }}>
            {loading ? <Loader/> : (
              <PatientsList patients={patients} deletePatient={deletePatient}/>)}
            <AddPatientButton startIcon={<PersonAddAlt1Icon />} color="inherit" variant="outlined" onClick={handleOpen}>
              Add New Patient
            </AddPatientButton>
            <AddPatientModal open={open} handleClose={handleClose} addPatient={addPatient}/>
          </Box>
        </Drawer>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            right: drawerOpen ? 340 : 0,
            top: 80,
            transition: 'right 0.3s',
            backgroundColor: '#f5f5f5',
            zIndex: 1201,
          }}
        >
          {drawerOpen ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
        </IconButton>
      </Box>
    </StyledPatientsPanel>
  )
}

export default PatientsPanel
