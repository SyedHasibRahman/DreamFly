import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PrimaryButton from '../../StyledComponent/Buttons/PrimaryButton';
import AboutModal from './AboutModal';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 200,

        });
    })
    return (
        <div style={ {
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
                } } src="https://i.ibb.co/rfNppjH/element-8.png" alt="" />
            </Grid>
            <Container>
                <Grid container spacing={2} sx={{
                    alignItems: 'center',

                }}>
                    <Grid item xs={12} sm={12} md={7} lg={7}
                        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    >
                        <Typography variant='h5' sx={{
                        }}>
                            <span style={{
                                color: '#2CC0FF',
                            }}>About</span> DreamFly
                        </Typography>
                        <Typography variant='h2' sx={ {
                            py: 3,
                            color: "white"
                        } }>
                            Private Jet Charters save your time and give more comfort
                        </Typography>
                        <Typography sx={ {
                           color: "white"
                        } }>
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
                            } }>
                                <Box>
                                <Typography variant='h3' sx={ {  } }>
                                    Call for book an order
                                </Typography>
                                <Typography variant='h3' sx={ { } }>
                                    8-800-10-500
                                </Typography>
                                </Box>
                            </Box>
                            <PrimaryButton> Book Now</PrimaryButton>
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