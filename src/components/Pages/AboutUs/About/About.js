import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonOutline from '../../../StyledComponent/Buttons/ButtonOutline';
import BookingCard from '../BookingCard/BookingCard';
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <Box className="paddingY90">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400s"
            delay="100"
          >
            <Box
              sx={{ width: '100%', height: '500px' }}
            >
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} src="https://themeim.com/demo/flynext/assets/images/about-two.png" alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400s"
          >
            <Box>
              <Typography
                sx={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#4527a0', lineHeight: '1.5em' }}
              >
                About us
              </Typography>
              <Typography
                variant="h2"
                sx={{ marginBottom: '10px' }}
              >
                Private Jet Charters save your time and give more comfort
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: '#3d3d3d', width: '100%', fontSize: '16px', marginBottom: '15px', lineHeight: '1.7em', fontWeight: '500', textAlign: 'left' }}
              >
                XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers insider access to unique experiences, exclusive amenities
              </Typography>
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
              <BookingCard />
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}
            >
              <span
                style={{ fontWeight: '800', display: 'inline-block', marginRight: '15px' }}>
                <i style={{ color: '#5e35b1', marginRight: '5px' }} className="fa-solid fa-check"></i>
                Private Jet
              </span>
              <span
                style={{ fontWeight: '800', display: 'inline-block', marginRight: '15px' }}>
                <i style={{ color: '#5e35b1', marginRight: '5px' }} className="fa-solid fa-check"></i>
                Business Jet
              </span>
              <span
                style={{ fontWeight: '800', display: 'inline-block', marginRight: '15px' }}>
                <i style={{ color: '#5e35b1', marginRight: '5px' }} className="fa-solid fa-check"></i>
                Air Ambulance
              </span>
            </Box>
            <Box>
              <Typography
                gutterBottom
                sx={{ color: '#3d3d3d', fontSize: '16px', width: '100%', marginBottom: '40px', fontWeight: '500', textAlign: 'left' }}
              >
                Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership
              </Typography>
            </Box>
            <Link to='/Contact'
              style={{ fontWeight: '800', textDecoration: 'none' }}
            >
              <ButtonOutline>
                Request More Info
              </ButtonOutline>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;