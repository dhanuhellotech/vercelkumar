import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const ResponsiveImg = styled('img')(({ theme }) => ({
  width: '60%',
  maxWidth: '500px',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
}));

const GreenTypography = styled(Typography)(({ theme }) => ({
  color: '#4CAF50',  // Natural green color
  fontWeight: 'bold',  // Make the text bold
}));

function Home() {
  return (
    <>
      <ResponsiveImg
        src="assets/images/WhatsApp Image 2024-06-05 at 6.14.05 PM.jpeg"
        alt="Descriptive alt text"
      />
      <GreenTypography variant="h3" align="center">
        KUMAR HERBALS ADMIN
      </GreenTypography>
      <GreenTypography variant="h4" align="center">
        Global admin
      </GreenTypography>
    </>
  );
}

export default Home;
