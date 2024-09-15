import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Post } from "../PatientsPanel/Patients.model";

interface AddPostModalProps {
    open: boolean;
    handleClose: () => void;
    handleAddPost: (newPost: Post) => void;
}

const initialState = { source: '', text: '', date: '' };

const AddPostModal: React.FC<AddPostModalProps> = ({ open, handleClose, handleAddPost }) => {
    const [newPost, setNewPost] = useState(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onAddPost = () => {
        handleAddPost(newPost);
        setNewPost(initialState);
        handleClose();
    };

    const handleModalClose = () => {
        setNewPost(initialState);
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleModalClose}>
            <DialogTitle>Add New Post</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="source"
                    label="Source"
                    type="text"
                    fullWidth
                    value={newPost.source}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="text"
                    label="Text"
                    type="text"
                    fullWidth
                    value={newPost.text}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="date"
                    label="Date"
                    type="date"
                    fullWidth
                    value={newPost.date}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onAddPost} color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddPostModal;
