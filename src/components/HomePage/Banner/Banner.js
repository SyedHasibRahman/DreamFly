import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import SecondaryButton from '../../StyledComponent/Buttons/SecondaryButton';


const Banner = () => {
  useEffect(() => {
    AOS.init();
  })

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Box className="paddingY90 bannar">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Container>
        <Grid container >
          <Grid item xs={12} md={6} order={{ md: 1 }} sx={{ display: "flex" }}>
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
                <span style={{ color: '#DC1585' }}>Dream</span>Fly
              </Typography>
              <Typography
                variant="h1"
                sx={{ color: 'white', fontFamily: "'Mulish', sans-serif" }}
              >
                Book a private
              </Typography>
              <Typography
                variant="h1"
                sx={{ color: 'white', fontFamily: "'Mulish', sans-serif" }}
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
                width={{ sm: "100%", md: "80%" }}
                sx={{ color: '#FFFFFF', fontWeight: '500', mt: 3 }}
              >
                Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Link style={{ textDecoration: "none" }} to="/Services">
                  <SecondaryButton sx={{ ":hover": { borderColor: "white" }, }}>Make Your Trip</SecondaryButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ md: 2 }}>
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