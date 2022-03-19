import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import SecondaryButton from '../../StyledComponent/Buttons/SecondaryButton';



const Banner = () => {
  useEffect(() => {
    AOS.init();
  })


  return (
    <Box className="paddingY90 bannar">
      <Container>
        <Grid container >
          <Grid item xs={ 12 } md={ 6 } order={ { xs: 2, sm: 2, md: 1, lg: 1 } } >
            <Box>

              <Typography
                sx={ { fontWeight: '600', fontStyle: 'italic', fontSize: '30px', fontFamily: "'Mulish', sans-serif", color: '#FFFFFF' } }
              >
                <span style={ { color: '#DC1585' } }>Dream</span>Fly
              </Typography>
              <Typography
                variant="h1"
                sx={ { color: 'white', fontFamily: "'Mulish', sans-serif" } }
              >
                Book a private
              </Typography>
              <Typography
                variant="h1"
                sx={ { color: 'white', fontFamily: "'Mulish', sans-serif" } }
              >
                jet&nbsp;
                <Typewriter
                  words={ ['instantly', 'quickly'] }
                  loop={ 0 }
                  cursor
                  cursorStyle='|'
                  typeSpeed={ 70 }
                  deleteSpeed={ 50 }
                  delaySpeed={ 1000 }
                />
              </Typography>
              <Typography
                width={{ sm: "100%", md: "80%" }}
                sx={{ color: '#FFFFFF', fontWeight: '500', mt: 3, textAlign: {xs: "justify", sm: "left"} }}
                >
                Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.
              </Typography>
              <Box sx={ { mt: 4 } }>
                <Link style={ { textDecoration: "none" } } to="/Services">
                  <SecondaryButton sx={ { ":hover": { borderColor: "white" }, } }>Make Your Trip</SecondaryButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={ 12 } md={ 6 } order={ { xs: 1, sm: 1, md: 2, lg: 2 } }>
            <Box sx={ {} }>
              <img style={ { width: '100%', height: '100%', objectFit: 'fill' } } src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;