import { Container, Grid, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import './Banner.css';

const Banner = () => {
  return (
    <Box sx={{backgroundColor:'#19232d', minHeight:'100vh',}}>
      <Box sx={{backgroundImage:'url(https://themeim.com/demo/flynext/assets/images/element/element-1.png)',backgroundColor:'#19232d', backgroundPosition:'right', backgroundRepeat:'no-repeat', opacity:'1', backgroundSize:'right'}}>
        <Navigation />
        <Container sx={{padding:"200px 0", position:'relative' }}>
          <Box display={{xs:'none', md:'block'}}>
            <Box className='socialIconBox'>
              <Link href="#" className='socialIcon'><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-twitter"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-youtube"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-instagram"></i></Link>
            </Box>
          </Box>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} order={{ xs: 2, md:1 }}>
              <Box>
              <Typography variant="h1" component="h2" sx={{fontWeight:'600', fontStyle:'italic', fontSize:'30px', fontFamily:"'Mulish', sans-serif", marginBottom:'25px', color:'#FFFFFF'}}> <span style={{color:'#dcbb87'}}>Dream</span>fly </Typography>
              <Typography variant="h1" component="h2" sx={{fontWeight:'700', marginBottom:'25px', color:'#FFFFFF', fontSize:'65px', lineHeight:'1.3em', fontFamily:"'Playfair Display', serif"}}> Book a private jet instantly </Typography>
              <Typography variant="body1" gutterBottom sx={{width:'80%', fontSize:'16px', lineHeight:'1.7em', marginBottom:'15px', color:'#FFFFFF', fontFamily:"'Mulish', sans-serif", fontWeight:'500'}}> Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service. </Typography>
              <Box sx={{marginTop:'65px'}}>
                <Link href="#"> Make Your Trip </Link> 
              </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md:2 }}>
              <Box sx={{width:'100%', height:'100%'}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;