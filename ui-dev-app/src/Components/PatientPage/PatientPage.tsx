import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Patient, Post } from '../PatientsPanel/Patients.model'
import PatientsPanel from '../PatientsPanel/PatientsPanel'
import AddPostModal from '../AddPostModal/AddPostModal'
import PostBox from '../PostBox/PostBox'
import { StyledButtonsWrapper, StyledEmptyListMessage, UserHeaderWrapper } from './PatientPage.styles'
import { UserBox } from '../UserBox/UserBox'
import { PostRange, PostRanges } from './PatientPage.consts'
import { filterPosts } from './PatientPage.utils'
import PostAddIcon from '@mui/icons-material/PostAdd'
import DownloadIcon from '@mui/icons-material/Download'
import Loader from '../Loader/Loader'

const PatientPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<PostRange>(PostRanges.ALL);

    useEffect(() => {
        const fetchPatient = async (userId: string) => {
            const response = await fetch(`http://localhost:8080/api/patients/${userId}`);
            if (response.status === 200) {
                const data = await response.json();
                setPatient(data);
            }
        };

        const fetchPatients = async () => {
            const response = await fetch('http://localhost:8080/api/patients')
            return await response.json()
        }

        if (id) {
            fetchPatient(id);
        } else {
            fetchPatients().then((data: Patient[]) => {
                if (data?.[0]?.id)
                    fetchPatient(data[0]?.id);
            })
        }
    }, [id]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddPost = async (newPost: Post) => {
        const response = await fetch(`http://localhost:8080/api/patients/${id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (response.ok) {
            const updatedPatient = await response.json();
            setPatient(updatedPatient);
        }
    };

    const handleFetchPosts = async () => {
        const response = await fetch(`http://localhost:8080/api/patients/${id}/fetchPosts`);

        if (response.ok) {
            const updatedPatient = await response.json();
            setPatient(updatedPatient);
        }
    };

    return (
      <>
          {patient ? (
            <Container maxWidth="xl" sx={{ py: '64px' }}>
                <UserBox patient={patient} posts={filterPosts(patient.posts, filter)}/>
                <UserHeaderWrapper>
                    <Typography style={{ margin: '20px' }} variant="h4">Posts</Typography>
                    <FormControl variant="outlined" style={{ minWidth: 120, marginBottom: '20px' }}>
                        <InputLabel id="date-filter-label">Filter By Date</InputLabel>
                        <Select
                          labelId="date-filter-label"
                          value={filter}
                          onChange={(e) => setFilter(e.target.value as PostRange)}
                          label="Filter By Date"
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Last Day">Last Day</MenuItem>
                            <MenuItem value="Last Week">Last Week</MenuItem>
                            <MenuItem value="Last Month">Last Month</MenuItem>
                        </Select>
                    </FormControl>
                </UserHeaderWrapper>
                <Grid container spacing={3}>
                    {filterPosts(patient.posts, filter).map((post: Post) => (
                      <Grid lg={4} md={6} xs={12} key={post.id}>
                          <PostBox {...post} />
                      </Grid>
                    ))}
                </Grid>
                <StyledButtonsWrapper>
                    <Button sx={{ textTransform: 'none' }} color="inherit" variant="outlined" startIcon={<PostAddIcon />} onClick={handleOpen}>
                        Add Post
                    </Button>
                    <Button sx={{ textTransform: 'none' }} color="inherit" variant="outlined" startIcon={<DownloadIcon />} onClick={handleFetchPosts}>
                        Fetch Posts
                    </Button>
                </StyledButtonsWrapper>
                <AddPostModal
                  open={open}
                  handleClose={handleClose}
                  handleAddPost={handleAddPost}
                />
            </Container>
          ) : (
            <StyledEmptyListMessage>
                <Loader />
            </StyledEmptyListMessage>
          )}
          <PatientsPanel />
      </>
    );
};

export default PatientPage;
