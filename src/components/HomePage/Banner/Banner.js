import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonOutline from '../../StyledComponent/Buttons/ButtonOutline';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
      <Box className="paddingY90 bannar">
        <Container>
          <Grid container >
            <Grid item xs={12} md={6} order={{ md: 1}} sx={{display: "flex"}}>
              {/* <Box display={{ }}>
                <Box className=''>
                  <Link href="#" ><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#" className='socialIcon'><i className="fab fa-twitter"></i></Link>
                  <Link href="#" className='socialIcon'><i className="fab fa-youtube"></i></Link>
                  <Link href="#" className='socialIcon'><i className="fab fa-instagram"></i></Link>
                </Box>
              </Box> */}
              <Box>
                <Typography 
                  sx={{ fontWeight: '600', fontStyle: 'italic', fontSize: '30px', fontFamily: "'Mulish', sans-serif", color: '#FFFFFF' }}
                > 
                  <span style={ { color: '#DC1585' } }>Dream</span>Fly 
                </Typography>
                <Typography 
                  variant="h1" 
                  sx={{color: 'white', fontFamily: "'Mulish', sans-serif"}}
                > 
                  Book a private  
                </Typography>
                <Typography 
                  variant="h1" 
                  sx={{color: 'white', fontFamily: "'Mulish', sans-serif"}}
                  >
                  jet&nbsp;
                  <Typewriter
                    words={['instantly']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Typography>
                <Typography 
                  width={{sm: "100%", md: "80%"}}
                  sx={ { color: '#FFFFFF', fontWeight: '500', mt: 3 } }
                > 
                  Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service. 
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Link style={{ textDecoration: "none" }} to="/Services">
                    <ButtonOutline sx={{ ":hover": { borderColor: "white" }, }}>Make Your Trip</ButtonOutline>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ md: 2}}>
              <Box sx={{}}>
                <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};

export default Banner;