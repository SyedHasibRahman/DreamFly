import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BookingCard from '../BookingCard/BookingCard';

const About = () => {
  return (
    <Box sx={{padding:'100px 0'}}>
      <Container>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box sx={{width:'100%', height:'500px'}}>
          <img style={{width:'100%', height:'100%', objectFit:'cover'}} src="https://themeim.com/demo/flynext/assets/images/about-two.png" alt="" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
        <Typography variant="h1" component="h2" sx={{fontSize:'20px', fontWeight:'800', marginBottom:'15px', fontFamily:'"Mulish", sans-serif', color:'#dcbb87', lineHeight:'1.5em'}}> About us </Typography> 
        <Typography variant="h1" component="h2" sx={{ color:'#19232d', fontSize:'40px', marginBottom:'10px', lineHeight:'1.3em', fontWeight:'700', fontFamily:'"Playfair Display", sans-serif'}}> Private Jet Charters save your time and give more comfort </Typography>
        <Typography variant="body1" gutterBottom sx={{color:'#3d3d3d', width:'100%', fontSize:'16px', marginBottom:'15px', lineHeight:'1.7em', fontWeight:'500', fontFamily:'"Mulish", sans-serif', textAlign:'left'}}> XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers insider access to unique experiences, exclusive amenities </Typography>
        </Box>
        <Box sx={{marginBottom:'15px'}}>
        <BookingCard />
        </Box>
        <Box sx={{display:'flex', justifyContent:'flex-start', marginBottom:'20px'}}>
          <span style={{color:'#19232d', fontWeight:'800', fontSize:'16px', lineHeight:'1.5em', fontFamily:'"Mulish", sans-serif', display:'inline-block', marginRight:'15px'}}><i style={{color:'rgba(220, 187, 135, 0.5)', marginRight:'5px'}} class="fa-solid fa-check"></i>  Private Jet </span>
          <span style={{color:'#19232d', fontWeight:'800', fontSize:'16px', lineHeight:'1.5em', fontFamily:'"Mulish", sans-serif', display:'inline-block', marginRight:'15px'}}><i style={{color:'rgba(220, 187, 135, 0.5)', marginRight:'5px'}} class="fa-solid fa-check"></i> Business Jet</span>
          <span style={{color:'#19232d', fontWeight:'800', fontSize:'16px', lineHeight:'1.5em', fontFamily:'"Mulish", sans-serif'}}><i style={{color:'rgba(220, 187, 135, 0.5)', marginRight:'5px'}} class="fa-solid fa-check"></i> Air Ambulance</span>
        </Box>
        <Box>
        <Typography variant="body1" gutterBottom sx={{color:'#3d3d3d', fontSize:'16px', width:'100%', marginBottom:'40px', lineHeight:'1.7em', fontFamily:'"Mulish", sans-serif', fontWeight:'500', textAlign:'left'}}> Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership </Typography>
        </Box>
        <Link to='' style={{color:'#19232d', backgroundColor:'transparent', border:'1px solid #19232d', padding:'12px 25px', borderRadius:'999px', fontSize:'16px', fontWeight:'800', fontFamily:'"Mulish", sans-serif', lineHeight:'1.5em', textDecoration:'none'}}>Request More Info </Link>
      </Grid>
    </Grid>
      </Container>
    </Box>
  );
};

export default About;