import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import axios from 'axios';
import IconButton from '@mui/joy/IconButton';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../context/Authcontext';
import { useSpring, animated } from '@react-spring/web';
import CloseIcon from '@mui/icons-material/Close';
import ForgotPasswordForm from '../../components/Formdialogue/Formdialogue';
import './Login.css';

// Fade Component
const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

// Modal styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '@media (max-width: 375px)': {
    width: '90%', // Adjusted width for smaller screens
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)',
  },
};

// Dark and Light Mode Toggle
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

export default function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Simulating successful login
    login(); // This should update the AuthContext's isAuthenticated state
    alert('Login successful! Redirecting to home page.');
    // You can optionally use history.push('/') from react-router-dom to navigate programmatically
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

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

  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('An error occurred during login.');
    }
  };

  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
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
                  Login
                </Typography>
                <Typography level="h6">
                  New to Website?{' '}
                  <Link href="/register" level="title-sm">
                    Register!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
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
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
                    <Typography
                      className="text-center h6"
                      style={{ cursor: 'pointer', fontWeight: '600', fontFamily: 'initial' }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                  <Button  onClick={handleLogin} type="submit" sx={{ backgroundColor: '#F8D82D', color: 'black' }} fullWidth>
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack          >
            <Box component="footer" sx={{ py: 3 }}>
              <Typography level="body-xs" textAlign="center">
                ©Hello Technology
                {new Date().getFullYear()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Background Image */}
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition: 'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(assets/Images/spiceslog.jpg)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage: 'url(public/assets/Images/darklogonew.jpg)',
          },
        })}
      />

      {/* Forgot Password Modal */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        sx={{ backgroundColor: '#144003' }}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEscapeKeyDown
      >
        <Fade in={openDialog}>
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              style={{ position: 'absolute', top: 10, right: 10 }}
              onClick={() => setOpenDialog(false)}
            >
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
            <Typography id="spring-modal-title" variant="h6" sx={{ color: 'white' }} component="h2">
              Forgot Password?
            </Typography>
            <Typography sx={{ color: 'white' }} id="spring-modal-description">
              Please enter your email address below. We'll send you a link to reset your password.
            </Typography>
            <ForgotPasswordForm setRegisteredEmail={setRegisteredEmail} />
            {registeredEmail && (
              <Typography sx={{ color: 'white', marginTop: '10px' }}>
                Registered email: {registeredEmail}
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </CssVarsProvider>
  );
}

