import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './pages/context/Authcontext.jsx'



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>
    <AuthProvider>
    <ThemeProvider theme= {theme}> <App /></ThemeProvider>
    </AuthProvider>
  </React.StrictMode> 
  
  </BrowserRouter>

)
