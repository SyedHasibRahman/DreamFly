import { Box, Container, Typography, styled, Grid } from '@mui/material';
import React from 'react';
import Review from '../../../Dashboard/User/Review/Review';
import TestimonialSlider from '../../../HomePage/Testimonial/Slider/TestimonialSlider';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import About from '../About/About';
import CounterArea from '../CounterArea/CounterArea';
import OurHistory from '../OurHistory/OurHistory';
import WhyUs from '../WhyUs/WhyUs';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import PrimaryButton from '../../../StyledComponent/Buttons/PrimaryButton';
import OurTeams from '../OurTeams/OurTeams';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: '50%',
    height: 'fit-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',

};


const AboutUs = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Navigation />
            <About />
            <WhyUs />
            <CounterArea />
            <OurHistory />
            {/* <OurTeams />
            <Box className="paddingY90">
                <Container>
                    <Typography
                        sx={{ color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px', textAlign: 'center' }}
                    >
                        Testimonial
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ marginBottom: '10px', textAlign: 'center' }}
                    >
                        Our Customer Feedback
                    </Typography>
                    <TestimonialSlider sx={{ marginTop: '50px' }} />
                    <div>
                        <PrimaryButton type="button" onClick={handleOpen}>
                            Review Now
                        </PrimaryButton>
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            BackdropComponent={Backdrop}
                        >
                            <Box sx={style}>
                                <Review />
                            </Box>
                        </StyledModal>
                    </div>

                </Container>
            </Box> */}
            <Footer />
        </Box>
    );
};

export default AboutUs;