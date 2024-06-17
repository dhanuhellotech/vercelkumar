import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import image from '../../assets/logo.jpg';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(2),
  },
}));

function Forgot() {
  const classes = useStyles();
  const { userId, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/update-password/${userId}/${token}`, {
        password,
        confirmPassword,
      });

      if (response.status === 200) {
        toast.success('Password reset successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Failed to reset password. Please try again later.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={5}>
        <img className={classes.logo} src={image} alt="logo" />
        <Typography className={classes.title} variant="h4" align="center" gutterBottom>
          Create a New Password
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="New Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
          />
          <Button
            className={classes.submit}
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </form>
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: '8px' }}>
            <Link to="/register" className={classes.link}>
              Don't have an account? Register
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer />
    </Container>
  );
}

export default Forgot;
