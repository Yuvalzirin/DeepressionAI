import React, { useReducer } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { AddPatientModalProps, Patient } from '../PatientsPanel/Patients.model'

const initialState: Partial<Patient> = {
    patientName: '',
    age: 0,
    notes: '',
    socialMediaLink: ''
};

const reducer = (state: Partial<Patient>, action: { type: any; payload?: any; }) => {
    switch (action.type) {
        case 'SET_PATIENT_NAME':
            return { ...state, patientName: action.payload };
        case 'SET_AGE':
            return { ...state, age: action.payload };
        case 'SET_NOTES':
            return { ...state, notes: action.payload };
        case 'SET_SOCIAL_MEDIA_LINK':
            return { ...state, socialMediaLink: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const AddPatientModal: React.FC<AddPatientModalProps> = ({ open, handleClose, addPatient }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addPatientClick = () => {
        addPatient({
            patientName: state.patientName,
            age: state.age,
            notes: state.notes,
            socialMediaLink: state.socialMediaLink
        });
        resetState();
    };

    const handleCloseClick = () => {
        handleClose();
        resetState();
    };

    const resetState = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" component="h2">
                    Add New Patient
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    value={state.patientName}
                    onChange={(e) => dispatch({ type: 'SET_PATIENT_NAME', payload: e.target.value })}
                />
                <TextField
                    fullWidth
                    label="Age"
                    type="number"
                    margin="normal"
                    value={state.age}
                    onChange={(e) => dispatch({ type: 'SET_AGE', payload: Number(e.target.value) })}
                />
                <TextField
                    fullWidth
                    label="Social Media Link"
                    margin="normal"
                    value={state.socialMediaLink}
                    onChange={(e) => dispatch({ type: 'SET_SOCIAL_MEDIA_LINK', payload: e.target.value })}
                />
                <TextField
                    fullWidth
                    label="Notes"
                    margin="normal"
                    multiline
                    rows={4}
                    value={state.notes}
                    onChange={(e) => dispatch({ type: 'SET_NOTES', payload: e.target.value })}
                />
                <Box mt={2}>
                    <Button sx={{ textTransform: 'none' }} color="primary" variant="contained" onClick={addPatientClick}>
                        Create
                    </Button>
                    <Button  sx={{ textTransform: 'none', ml: 2 }}  variant="outlined" color="error" onClick={handleCloseClick} >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
