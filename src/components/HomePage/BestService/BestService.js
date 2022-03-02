import { Box, Container, Typography, Button } from "@mui/material";
import overview1 from "../../../img/overview-1.png";
import overview2 from "../../../img/overview-2.png";
import "./BestService.css";


const BestService = () => {

  return (
    <Box component="div" className="bestService" sx={{ py: 10 }}>
      <Container>
        <Box className="jatService">
          <Box component="div" className="card" >
            <Box className="card_img">
              <img src={overview2} alt="" />
            </Box>
            <Box className="card_content" xs={12} sm={12} md={6} lg={6}>
              <Typography variant="stong">#1 Private Jet Charter</Typography>
              <Typography
                variant="h5"
                sx={{
                  margin: "10px 0",
                  padding: "10px 0",
                  borderBottom: "1px dashed rgba(255, 255, 255, 0.3)",
                }}
              >
                Find the Best Service For You
              </Typography>
              <Typography variant="h6">Private Jet Charter</Typography>
              <Typography variant="h6">02 Business Jet Charter</Typography>
              <Typography variant="h6">03 Private Helicopter</Typography>
              <Typography variant="h6">04 Air Ambulance</Typography>
            </Box>
          </Box>
          <Box component="div" className="card" xs={12} sm={12} md={7} lg={7} >
            <Box className="card_img">
              <img src={overview1} alt="" />
            </Box>
            <Box className="card_content">
              <Typography variant="h5">overview Air Ambulance</Typography>
              <Typography>
                Trade crowded airports and wasted time for the ease, comfort,
                and convenience of travel by private jet.
              </Typography>
              <Button sx={{ color: "#dcbb87 !important", fontWeight: 700 }}>
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BestService;
