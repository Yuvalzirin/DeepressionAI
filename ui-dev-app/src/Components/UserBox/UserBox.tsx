import {
  StyledAverageStatusBox,
  StyledStatusBox, StyledStatusBoxInnerImg,
  StyledUserDataBox, StyledUserHeadline,
  StyledUserPaper
} from '../PatientPage/PatientPage.styles'
import { Typography } from '@mui/material'
import { ProgressChart } from '../ProgressChart/ProgressChart'
import React from 'react'
import { Patient, Post } from '../PatientsPanel/Patients.model'
import { calculateAverageStatusIcon } from './UserBox.utils'

type UserBoxProps = {
  patient: Patient,
  posts: Post[],
}

export const UserBox: React.FC<UserBoxProps> = ({ patient, posts }) => {
  return (
    <StyledUserPaper elevation={3} sx={{ p: 2, mb: 2 }}>
      <StyledUserDataBox>
        <StyledUserHeadline variant="h4">{patient.patientName}</StyledUserHeadline>
        <Typography variant="body1"><strong>Age: </strong>{patient.age}</Typography>
        <Typography variant="body1"><strong>Notes: </strong>{patient.notes}</Typography>
        <Typography variant="body1"><strong>Social Media Link: </strong>{patient.socialMediaLink}
        </Typography>
        <StyledAverageStatusBox>
          <Typography variant="body1"><strong>Average Status:</strong> </Typography>
          <StyledStatusBoxInnerImg src={calculateAverageStatusIcon(posts)}
                                   alt={calculateAverageStatusIcon(posts)}
                                 />
        </StyledAverageStatusBox>
      </StyledUserDataBox>
      <StyledStatusBox>
        <ProgressChart posts={posts}/>
      </StyledStatusBox>
    </StyledUserPaper>
  )
}