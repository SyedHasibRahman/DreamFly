import { Box, Container, Typography, Button } from "@mui/material";
import overview1 from "../../../img/overview-1.png";
import overview2 from "../../../img/overview-2.png";
import "./BestService.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";


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
    <Box component="div" className="bestService" sx={{ padding: "100px 0" }}>
      <Container>
        <Box className="jatService">
          <Box component="div" className="card" xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
            <Box className="card_img">
              <img src={ overview1 } alt="" />
            </Box>
            <Box className="card_content">
              <Typography sx={{color: "white" }} variant="h3">
                Business Jet Charter
              </Typography>
              <Typography sx={{color: "white"}}>
                Trade crowded airports and wasted time for the ease, comfort,
                and convenience of travel by private jet.
              </Typography>
              <Button sx={ { color: "#fff !important", fontWeight: 500, fontSize: "18px" } }>
                Book Now
              </Button>
            </Box>
          </Box>
          <Box component="div" className="card">
            <Box className="card_img">
              <img src={overview2} alt="" />
            </Box>
            <Box className="card_content" xs={12} sm={12} md={6} lg={6}>
              <Typography sx={{color: "white"}} variant="stong">
                #1 Private Jet Charter
              </Typography>
              <Typography
                variant="h3"
                sx={ {
                  my: "8px",
                  pb: "20px",
                  color: "white",
                  borderBottom: "1px dashed rgba(255, 255, 255, 0.3)",
                }}
              >
                Find the Best Service For You
              </Typography>
              <Typography sx={{color: "white"}} variant="h6">
                01 Private Jet Charter
              </Typography>
              <Typography sx={{color: "white"}} variant="h6">
                02 Business Jet Charter
              </Typography>
              <Typography sx={{color: "white"}} variant="h6">
                03 Private Helicopter
              </Typography>
              <Typography sx={{color: "white"}} variant="h6">
                04 Air Ambulance
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BestService;
