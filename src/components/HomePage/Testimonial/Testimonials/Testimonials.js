import React, { useState } from 'react';
import { Container, Grid, Typography, styled, Box } from '@mui/material';
import TestimonialSlider from '../Slider/TestimonialSlider';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import ModalUnstyled from '@mui/base/ModalUnstyled';
import SecondaryButton from '../../../StyledComponent/Buttons/SecondaryButton';
import Review from '../../../Dashboard/User/Review/Review';

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


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,

        });
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='paddingY90' >
            <Container>
                <Box sx={{textAlign: 'center', mb: 5}}>
                    <Typography
                        gutterBottom
                        sx={{ fontSize: "20px", fontWeight: 700 }}
                    >
                        <span style={{ color: '#4527a0', fontSize: "20px", fontWeight: 700 }}>DreamFly</span> Testimonial
                    </Typography>
                    <Typography gutterBottom variant="h2">
                        Our Customer Feedback
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{
                        padding: '15px',
                    }}
                        data-aos='slide-right'
                    >
                        <TestimonialSlider reviews={reviews} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} 
                        sx={{width: '100%'}}
                        >
                        <Box
                            sx={{
                                backgroundImage: 'url(https://themeim.com/demo/flynext/assets/images/client/client-big.png)', 
                                backgroundRepeat: 'no-repeat', 
                                backgroundPosition: 'center', 
                                backgroundSize: 'cover',
                                objectFit: "contain", 
                                borderRadius: "15px", 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: "100%", 
                                minHeight: "350px"}}
                            >
                        <Box >
                            <SecondaryButton type="button" onClick={handleOpen}>
                                Review
                            </SecondaryButton>
                            <StyledModal
                                aria-labelledby="unstyled-modal-title"
                                aria-describedby="unstyled-modal-description"
                                open={open}
                                onClose={handleClose}
                                BackdropComponent={Backdrop}
                            >
                                <Box sx={{width: {lg: "30%", md: "40%", sm: "60%", xs: "80%"},
                                    height: 'fit-content',
                                    bgcolor: 'background.paper',
                                    borderRadius: "15px",}}
                                    >
                                    <Review />
                                </Box>
                            </StyledModal>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;