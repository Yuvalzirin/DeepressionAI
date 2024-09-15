import { IconButton, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { PatientsListProps } from '../PatientsPanel/Patients.model'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'

export const PatientsList: React.FC<PatientsListProps> = ({ patients, deletePatient }) => {
  const navigate = useNavigate();

  // State to keep track of the selected patient ID
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const handlePatientClick = (id: string) => {
    setSelectedPatientId(id);
    navigate(`/patient/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <span style={{ margin: '25px', display: 'flex', flexDirection: 'column' }}>My Patients</span>
      <List>
        {patients.map((patient) => (
          <ListItemButton
            key={patient.id}
            onClick={() => handlePatientClick(patient.id!)}
            selected={patient.id === selectedPatientId}
          >
            <ListItemAvatar sx={{ fontSize: 20 }}><PersonIcon /></ListItemAvatar>
            <ListItemText
              primary={patient.patientName}
              secondary={`Age: ${patient.age} - Source: ${patient.socialMediaLink}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={(e) => {
              e.stopPropagation();
              deletePatient(patient.id!);
            }}>
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};
