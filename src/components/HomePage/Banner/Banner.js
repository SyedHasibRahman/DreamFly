import { Container, Grid, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import ButtonOutline from '../../StyledComponent/Buttons/ButtonOutline';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <Box sx={ {} }>
      <Box sx={ { backgroundImage: 'url(https://static.tickets.com.tr/img/v4/header-bg.svg)', backgroundPosition: 'right', height: "100%" , backgroundRepeat: 'no-repeat', backgroundSize: 'right',} }>
        <Container className="paddingY90" sx={ { position: 'relative' } }>
          <Box display={ { xs: 'none', md: 'block' } }>
            <Box className='socialIconBox'>
              <Link href="#" className='socialIcon'><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-twitter"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-youtube"></i></Link>
              <Link href="#" className='socialIcon'><i className="fab fa-instagram"></i></Link>
            </Box>
          </Box>
          <Grid container >
            <Grid data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" item xs={12} md={6} order={{  lg: 1 , md: 2,}}>
              
                <Typography 
                  variant="h2" 
                  
                  sx={ { fontWeight: '600', fontStyle: 'italic', fontSize: '30px', fontFamily: "'Mulish', sans-serif", marginBottom: '25px', color: '#FFFFFF' } }
                > 
                  <span style={ { color: '#DC1585' } }>Dream</span>Fly 
                </Typography>
                <Typography 
                  variant="h1" 
                  sx={ { fontWeight: '700', marginBottom: '25px', color: '#FFFFFF', fontSize: '65px', lineHeight: '1.3em', fontFamily: "'Playfair Display', serif" } }
                > 
                  Book a private <br/> jet instantly 
                </Typography>
                <Typography 
                  variant="body1" 
                  gutterBottom 
                  sx={ { width: '80%', fontSize: '16px', lineHeight: '1.7em', marginBottom: '15px', color: '#FFFFFF', fontFamily: "'Mulish', sans-serif", fontWeight: '500' } }
                > 
                  Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service. 
                </Typography>
                <Box sx={ { marginTop: '40px' } }>
                  <Link style={{textDecoration: "none"}} href="#">
                    <ButtonOutline sx={{":hover" : {borderColor: "white"},}}>Make Your Trip</ButtonOutline>
                  </Link>
                </Box>
              
            </Grid>
            <Grid item xs={12} md={6} order={{ lg: 2, md: 1}}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;