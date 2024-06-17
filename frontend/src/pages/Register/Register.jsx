import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColorSchemeToggle(props) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Register() {
  const navigate= useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

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

  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {


      if (!name || !email || !phone || !street || !district || !state || !country || !pincode || !gender || !password || !confirmPassword) {
        toast.error('Please fill in all required fields.');
        return;
      }
  
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email');
        return;
      }
  
      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        return;
      }
  
      if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords do not match');
        return;
      }
  
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        phone,
        address: {
          street,
          city,
          district,
          state,
          country,
          pincode,
        },
        gender,
        password,
        confirmPassword,
      });

      if (response.status === 201) {
        console.log(response.data);
        toast.success('Registration successful!');
        localStorage.setItem('registeredEmail', email);
     navigate('/login'); // Navigate to the login page
      } else {
        console.error(response.data.error);
        toast.error('Failed to register user. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === 'Email already registered') {
        toast.error('Email is already registered');
      } else {
        console.error('Failed to register user:', error);
        toast.error('An error occurred during registration.');
      }
    }
  };

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />

      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <div style={{ height: '80px' }}>
                <Typography level="title-lg">
                  <img style={{ width: '100px', height: 'auto' }} src='/assets/Images/Kumar Herbals - Logo.png' alt="Logo" />
                </Typography>
              </div>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography component="h1" level="h3">
                  Register
                </Typography>
                <Typography level="body-sm">
                  Already have an account?{' '}
                  <Link href="/login" level="title-sm">
                    Login!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <FormControl required>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={Boolean(emailError)}
                    helpertext={emailError}
                  />
                   {emailError && (
    <Typography color="error" variant="body-small">{emailError}</Typography>
  )}
                </FormControl>
                <FormControl required>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Street</FormLabel>
                  <Input
                    type="text"
                    name="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </FormControl>
                {/* <FormControl required>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl> */}
                <FormControl required>
                  <FormLabel>District</FormLabel>
                  <Input
                    type="text"
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Country</FormLabel>
                  <Input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Pincode</FormLabel>
                  <Input
                    type="text"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={Boolean(passwordError)}
                    helpertext={passwordError}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={Boolean(confirmPasswordError)}
                    helpertext={confirmPasswordError}
                  />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
                  </Box>
                  <Button sx={{ backgroundColor: '#F8D82D', color: 'black' }} type="submit" fullWidth>
                    Register
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              ©Hello Technology {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:'url(public/assets/Images/newlogo.jpg)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(public/assets/Images/Kumar Herbals - Logo.png)',
          },
        })}
      />

      <ToastContainer />
    </CssVarsProvider>
  );
}
