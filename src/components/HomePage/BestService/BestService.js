import { Box, Container, Grid, Typography } from "@mui/material";
import "./BestService.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../../StyledComponent/Buttons/SecondaryButton";


const BestService = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 200,

    });
  })

  return (
    <Box className="paddingY90">
      <Container>
        <Box sx={{mx: { sm: "50px", md: 0, lg: 0 }}}>
          <Grid container spacing={ 5 }>
            <Grid item  xs={12} sm={12} md={6} lg={6} 
              // data-aos='zoom-in-right'
              >
              <Box
                sx={{
                display: "flex",
                alignItems: "center",
                backgroundImage: `url("https://themeim.com/demo/flynext/assets/images/overview/overview-1.png"), linear-gradient(360deg, #5e35b1 50%,transparent 100%)`,
                backgroundBlendMode: 'overlay',
                objectFit: 'cover',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                borderRadius: "10px",
                padding: {xs: 3, sm: 3, md: 4, lg: 5}, 
                minHeight: "350px"
                }}
                >
                <Box>
                  <Typography sx={{ color: "white", mt: {sm: 10} }} variant="h3">
                    Business Jet Charter
                  </Typography>
                  <Typography 
                    sx={{ color: "white", py: 2, textAlign: {xs: "justify"}}}
                    >
                    Trade crowded airports and wasted time for the ease, comfort,
                    and convenience of travel by private jet.
                  </Typography>
                  <Link style={{ textDecoration: "none" }} to="/Services">
                    <SecondaryButton>
                      Book Now
                    </SecondaryButton>
                  </Link>
                </Box>
              </Box>    
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} 
              // data-aos='zoom-in-left'
              >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundImage: `url("https://themeim.com/demo/flynext/assets/images/overview/overview-2.png"), linear-gradient(360deg, #5e35b1 50%,transparent 100%)`,
                  backgroundBlendMode: 'overlay',
                  objectFit: 'cover',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  borderRadius: "10px",
                  padding: {xs: 3, sm: 3, md: 4, lg: 5} ,
                  minHeight: "350px"
                  }}
                >
                <Box>
                  <Typography sx={{ color: "white" }} variant="stong">
                    #1 Private Jet Charter
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      my: "8px",
                      pb: "25px",
                      color: "white",
                      borderBottom: "1px dashed rgba(255, 245, 245, .8)",
                    }}
                    >
                    Find the Best Service For You
                  </Typography>
                  <Typography className="privateItem">
                    01 Private Jet Charter
                  </Typography>
                  <Typography className="privateItem">
                    02 Business Jet Charter
                  </Typography>
                  <Typography className="privateItem">
                    03 Private Helicopter
                  </Typography>
                  <Typography className="privateItem">
                    04 Air Ambulance
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

export default BestService;
