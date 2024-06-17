import { createTheme } from '@mui/material/styles';
import { green, brown, grey, orange, yellow, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[700], // Herbal green
    },
    secondary: {
      main: brown[500], // Earthy brown
    },
    background: {
      default: blueGrey[50], // Soft blue-grey background
      paper: '#ffffff', // Pure white for paper components
    },
    text: {
      primary: grey[900], // Dark grey for primary text
      secondary: grey[700], // Medium grey for secondary text
    },
    success: {
      main: green[600], // For success messages
    },
    warning: {
      main: orange[700], // For warnings or alerts
    },
    info: {
      main: yellow[700], // For informational messages
    },
  },
  typography: {
    h4: {
      fontFamily: 'Playfair Display, serif', // Stylish serif font for headings
      fontWeight: 700,
      color: grey[900], // Dark grey for headings
    },
    body1: {
      fontFamily: 'Roboto, sans-serif', // Clean sans-serif for body text
      color: grey[800], // Slightly lighter grey for body text
    },
    subtitle1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      color: grey[700],
    },
    caption: {
      fontFamily: 'Roboto, sans-serif',
      color: grey[600],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          padding: '10px 20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, transform 0.3s',
          '&:hover': {
            backgroundColor: green[800], // Darker green on hover
            transform: 'scale(1.05)',
          },
          '&.MuiButton-containedPrimary': {
            color: '#fff', // White text for primary buttons
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Enhanced shadow for elevation
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: grey[50],
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Enhanced shadow for elevation
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #2e7d32 0%, #60ad5e 100%)', // Gradient background
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for the AppBar
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: brown[500],
          color: '#fff',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Stronger shadow for drawer
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Stronger shadow for cards
          padding: '15px',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          color: grey[800], // Consistent color for subheadings
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for tables
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px',
          borderBottom: `1px solid ${grey[300]}`, // Subtle border for table cells
        },
        head: {
          backgroundColor: green[100], // Light green background for table headers
          color: green[800], // Dark green text for table headers
          fontWeight: 'bold',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: green[700], // Green background for tooltips
          color: '#fff', // White text for tooltips
          fontSize: '0.9rem',
        },
        arrow: {
          color: green[700], // Matching arrow color
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          backgroundColor: green[700], // Green background for snackbars
          color: '#fff', // White text for snackbars
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for snackbars
        },
      },
    },
  },
});

export default theme;
