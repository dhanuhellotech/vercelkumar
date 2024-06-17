import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  Alert,
  Rating,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: 10,
  backgroundColor: '#f9fbe7', // Light green background
  maxWidth: '400px', // Set a max-width
  margin: 'auto', // Center the form container
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: 20,
}));

const UploadButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  marginBottom: theme.spacing(2),
}));

function Reviews() {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [stars, setStars] = useState(0);
  const [reviews, setReviews] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);


  
  useEffect(() => {
    fetchMediaItems();
  }, []);

  const fetchMediaItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setMediaItems(response.data);
    } catch (error) {
      console.error('Error fetching media items:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', image);
    formData.append('name', name);
    formData.append('district', district);
    formData.append('stars', stars);
    formData.append('reviews', reviews);

    try {
      await axios.post('http://localhost:5000/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess(true);
      setError(false);

      // Optionally clear form and refresh review list
      setName('');
      setDistrict('');
      setStars(0);
      setReviews('');
      setImage(null);
    } catch (error) {
      setError(true);
      setSuccess(false);
      console.error('There was an error uploading the review!', error);
    }
    fetchMediaItems();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Add Review
      </Typography>
      {success && <Alert severity="success">Review added successfully!</Alert>}
      {error && <Alert severity="error">There Was an Error Adding the review! Check Once All Fields are Given</Alert>}
      <FormContainer>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="District"
                variant="outlined"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="legend">Stars</Typography>
              <Rating
                name="stars"
                value={stars}
                onChange={(e, newValue) => setStars(newValue)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Review"
                variant="outlined"
                multiline
                rows={4}
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <UploadButton
                variant="contained"
                component="label"
                fullWidth
                color="secondary"
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </UploadButton>
            </Grid>
            <Grid item xs={12}>
              <SubmitButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Add Review
              </SubmitButton>
            </Grid>
          </Grid>
        </Box>
      </FormContainer>
    </Container>
  );
}

export default Reviews;
