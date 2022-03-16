import { styled, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AboutModal from './AboutModal';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import ModalUnstyled from '@mui/base/ModalUnstyled';
import PersonalFlight from '../PersonalFlight/PersonalFlight/PersonalFlight';
import SecondaryButton from '../../StyledComponent/Buttons/SecondaryButton';


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
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};


const About = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 200,

        });
    })
    return (
        <div style={{
            paddingTop: '100px',
            paddingBottom: '100px',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `url("https://themeim.com/demo/flynext/assets/images/bg/bg-1.png"), linear-gradient(90deg, #000 15%, rgba(25, 25, 25, 0.62) 100%)`,
            backgroundBlendMode: 'overlay',
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            position: 'relative',
        }}

        >
            <Grid sx={{
                position: 'absolute',
                top: '20%',
                right: 0,
                animation: 'scroll-down 2s cubic-bezier(0.4, 0, 1, 1) infinite',
            }}>
                <img style={{
                    animation: 'scroll-down 2s cubic-bezier(0.4, 0, 1, 1) infinite',
                }} src="https://i.ibb.co/rfNppjH/element-8.png" alt="" />
            </Grid>
            <Container>
                <Grid container spacing={2} sx={{
                    alignItems: 'center',

                }}>
                    <Grid item xs={12} sm={12} md={7} lg={7}
                        data-aos='zoom-in-right'
                    >
                        <Typography variant='h5' sx={{
                            color: "white"
                        }}>
                            About
                            <span style={{
                                color: 'white',
                            }}> DreamFly</span>
                        </Typography>
                        <Typography variant='h2' sx={{
                            py: 3,
                            color: "white"
                        }}>
                            Private Jet Charters save your time and give more comfort
                        </Typography>
                        <Typography sx={{
                            color: "white"
                        }}>
                            DreamFly is the only way to fully travel on your terms. Whether it’s accessing a remote destination or taking back control of productivity and flight scheduling
                        </Typography>
                        <Grid sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 4,
                            mt: 8,
                            backgroundImage: `url("https://themeim.com/demo/flynext/assets/images/element/element-7.png"), linear-gradient(90deg, #fff, #fff)`,
                            color: '#000',
                            borderRadius: 1,
                            flexWrap: 'wrap'

                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Box>
                                    <Typography variant='h3' sx={{}}>
                                        Call for book an order
                                    </Typography>
                                    <Typography variant='h3' sx={{}}>
                                        8-800-10-500
                                    </Typography>
                                </Box>
                            </Box>
                            <div>
                                <SecondaryButton type="button" onClick={handleOpen}>
                                    Book Now
                                </SecondaryButton>
                                <StyledModal
                                    aria-labelledby="unstyled-modal-title"
                                    aria-describedby="unstyled-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    BackdropComponent={Backdrop}
                                >
                                    <Box sx={style}>
                                        <PersonalFlight />
                                    </Box>
                                </StyledModal>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <AboutModal />
                    </Grid>
                </Grid>
            </Container>

        </div >
    );
};

export default About;