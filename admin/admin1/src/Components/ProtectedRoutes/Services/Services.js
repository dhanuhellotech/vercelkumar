import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TextField, Button, Container, Grid, Paper, Typography, InputAdornment, Box, Card, CardContent, CardMedia, CardActions,
} from '@mui/material';
import { styled } from '@mui/system';
import Pagination from '@mui/material/Pagination';

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledFormGroup = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledMediaItem = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)({
  height: '150px',
  objectFit: 'cover',
});

const Services = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [grams, setGrams] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);
  const [editingMediaId, setEditingMediaId] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Adjust the number of items per page as needed

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('description', description);
      formData.append('title', title);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('grams', grams);

      if (editingMediaId) {
        await axios.put(`http://localhost:5000/api/products/${editingMediaId}`, formData);
        setEditingMediaId(null);
      } else {
        await axios.post('http://localhost:5000/api/products', formData);
      }

      clearForm();
      fetchMediaItems();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDeleteMediaItem = async (mediaId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:5000/api/products/${mediaId}`);
        fetchMediaItems();
      } else {
        console.log("Deletion canceled by admin.");
      }
    } catch (error) {
      console.error('Error deleting media item:', error);
    }
  };

  const clearForm = () => {
    setDescription('');
    setTitle('');
    setPrice('');
    setQuantity('');
    setGrams('');
    setImageFile(null);
    setImagePreview(null);
    setEditingMediaId(null);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedMediaItems = mediaItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          Add a New Product
        </Typography>
        <form>
          <StyledFormGroup>
            <TextField
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outlined"
              size="small"
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <TextField
              label="Description"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              size="small"
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <TextField
              label="Price"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <TextField
              label="Quantity"
              fullWidth
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              variant="outlined"
              size="small"
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <TextField
              label="Grams"
              fullWidth
              value={grams}
              onChange={(e) => setGrams(e.target.value)}
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }}
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <Button
              variant="contained"
              component="label"
              fullWidth
              style={{ marginBottom: '10px' }}
            >
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleFileChange} />
            </Button>
            {imagePreview && (
              <Box mt={2}>
                <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              </Box>
            )}
          </StyledFormGroup>
          <StyledButton
            variant="contained"
            fullWidth
            onClick={handleFormSubmit}
          >
            {editingMediaId ? 'Update Product' : 'Add Product'}
          </StyledButton>
        </form>
      </StyledPaper>
      <Typography variant="h5" style={{ marginTop: 16 }}>
        Existing Products
      </Typography>
      <Grid container spacing={2}>
        {paginatedMediaItems.map((media) => (
          <Grid item xs={12} sm={6} md={4} key={media._id}>
            <StyledMediaItem>
              <StyledCardMedia
                component="img"
                image={media.image}
                alt={media.description}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {media.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {media.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ₹{media.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {media.quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Grams: {media.grams}g
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={() => handleDeleteMediaItem(media._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </StyledMediaItem>
          </Grid>
        ))}
      </Grid>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(mediaItems.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </StyledContainer>
  );
};

export default Services;
