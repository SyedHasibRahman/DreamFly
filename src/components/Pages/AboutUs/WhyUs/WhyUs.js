import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    // Why us section
    <Box sx={{ backgroundColor: '#f5f3f1' }}>
      <Container className="paddingY90">
        <Typography
          gutterBottom
          sx={{ color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px', textAlign: 'center' }}
        >
          Why Us
        </Typography>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center' }}
        >
          Why Choose Our Dream Fly?
        </Typography>
        <Box sx={{ marginTop: '50px' }}>
          <Grid container g spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    01
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Leading private aviation
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    02
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Tailored memberships
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    Tailored memberships Charter an entire jet, or offer the seats you don’t need through our app a need for full
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}

                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    03
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Leading safety & privacy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    04
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Client ratings & reviews
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    Search the world with ease and transparency.As the only tech-forward private aviation companyn
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    05
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Exceptional service
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className='whyusimg'
              >
                <Box
                  sx={{ padding: '30px 20px', borderRadius: "10px" }}
                >
                  <Typography
                    variant="h1"
                    sx={{ color: '#E8E9EA', fontWeight: '900', fontFamily: '"Mulish", sans-serif !important', textAlign: 'left' }}>
                    06
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', lineHeight: '1.4em', fontFamily: '"Playfair Display", sans-serif', textAlign: 'left' }}>
                    Faster & smarter response
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    sx={{ fontWeight: '500', textAlign: 'left' }}>
                    The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;