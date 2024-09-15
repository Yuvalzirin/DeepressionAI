import * as React from 'react'
import { useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  paperClasses,
  Select,
  Stack,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import { RefetchRange, RefetchRanges } from '../PatientPage/PatientPage.consts'

export function Notifications (): React.JSX.Element {
  const [email, setEmails] = useState({ value: 'example@example.com' })
  const [phone, setPhones] = useState({ value: '+1234567890' })
  const [isEditing, setIsEditing] = useState(false)
  const [filter, setFilter] = useState<RefetchRange>(RefetchRanges.ONE_HOUR);

  const handleChange = (type: string, value: string) => {
    if (type === 'email') {
      setEmails({ value })
    } else if (type === 'phone') {
      setPhones({ value })
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setIsEditing(false)
      }}
    >
      <Card
        sx={{
          borderRadius: '20px',
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: '0 5px 22px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)',
          },
        }}
      >
        <CardHeader subheader="Manage the notifications" title="Notifications"/>
        <Divider/>
        <CardContent>
          <Grid container wrap="wrap">
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Email</Typography>
                {isEditing ? (
                  <TextField
                    style={{width: '90%'}}
                    value={email.value}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                ) : (
                  <Typography>{email.value}</Typography>
                )}
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked/>} label="High Risk" disabled={!isEditing}/>
                  <FormControlLabel control={<Switch/>} label="Medium Risk" disabled={!isEditing}/>
                  <FormControlLabel control={<Switch/>} label="Low Risk" disabled={!isEditing}/>
                </FormGroup>
              </Stack>
            </Grid>
            <Grid md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Phone</Typography>
                {isEditing ? (
                  <TextField
                    style={{width: '90%'}}
                    value={phone.value}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                ) : (
                  <Typography>{phone.value}</Typography>
                )}
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked/>} label="High Risk" disabled={!isEditing}/>
                  <FormControlLabel control={<Switch/>} label="Medium Risk" disabled={!isEditing}/>
                  <FormControlLabel control={<Switch/>} label="Low Risk" disabled={!isEditing}/>
                </FormGroup>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <FormControl variant="outlined" style={{ minWidth: 120, marginBottom: '20px' }}>
            <Typography variant="h6">Refetch New Posts Scheduler</Typography>
            <Select
              labelId="date-filter-label"
              value={filter}
              disabled={!isEditing}
              onChange={(e) => setFilter(e.target.value as RefetchRange)}
              label="Refetch New Posts Scheduler"
            >
              <MenuItem value="One Hour">One Hour</MenuItem>
              <MenuItem value="One Day">One Day</MenuItem>
              <MenuItem value="One Week">One Week</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <Divider/>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            sx={{ borderRadius: '12px', textTransform: 'none' }}
            variant="outlined"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? 'Discard' : 'Edit'}
          </Button>
          <Button
            sx={{ borderRadius: '12px', textTransform: 'none' }}
            variant="contained"
            type="submit"
          >
            Save changes
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
