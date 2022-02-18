import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../../../images/Logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Container, Link, Typography } from '@mui/material';
import './Footer.css'

const SubscribeButton = styled(Button)({
    fontSize: 16,
    lineHeight: 1.5,
    backgroundColor: '#FF257B',
    '&:hover': {
      backgroundColor: '#FF257B',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FF257B',
    },
  });


const Footer = () => {
    return (
        <Box sx={{pt: 10, pb: 4, bgcolor: "#f5f5f5"}}>
            <Container>
                <Grid container  spacing={{ xs: 2, sm: 4, md: 6 }} >
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 }>
                        <Box sx={{width: "250px", mt: -5, mb: 2}}>
                            <img src={logo} width="200px" alt="" />
                        </Box>
                        <Typography sx={{fontWeight: 500}}>Dream Fly was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8'}}>
                            EUROPE
                        </Typography>
                        <Typography sx={{lineHeight: 2}} className='footer-list'>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2}}>
                            London DT1M 3BF
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2,}}>
                            +44 (0)20 3671 5709
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8'}}>
                            ASIA & PACIFIC
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2 }}>
                            2473 Red Road Ste 98
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2}}>
                            Singapore SG
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2,}}>
                            + 1 623 211 6319
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8'}}>
                            NORTH AMERICA
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, fontWeight: 500 }}>
                            +44 (0)20 3671 5709
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2 }}>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2 }}>
                            London DT1M 3BF
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container sx={{px: 5, pb:5, pt:3, mt:5, bgcolor: '#512da8', borderRadius: 3}}>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: 'white' }}>
                            Get started
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Private jet
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Register
                        </Typography>
                        <Typography sx={{lineHeight: 2}} className='footer-box'>
                            Get started
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Current Jet Deals
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Flynext mobile app
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: 'white'}}>
                            How it works
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            How it works
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Ways to fly
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                         Ways to buy
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Private charter</Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Private Jet Cost
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: 'white'}}>
                            About us
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            About us
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            News & press
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Blog
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            FAQs
                        </Typography>
                        <Typography sx={{lineHeight: 2 }} className='footer-box'>
                            Careers
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: 'white'}}>
                            Newsletter
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            Dream Fly was founded in 1991 by a group of safety-focused professionals erators.
                        </Typography>
                        <Box>
                            <input className='input-field' type="email" name="" id="" placeholder="Enter Email"/>
                        </Box>
                        <Box>
                            <SubscribeButton sx={{ width: '100%', py: "11px"}}            variant="contained" >
                                Subscribe Us
                            </SubscribeButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Container  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',}} >
                <Box sx={{display: "flex",  mt: 4 }}>
                    <Link href="#" sx={{mr: 1}} className='social-icon-box'>
                        <i className="fab fa-facebook-f social-icon"></i>
                    </Link>
                    <Link href="#" sx={{mr: 1}} className='social-icon-box'>
                        <i className="fab fa-twitter social-icon"></i></Link>
                    <Link href="#" sx={{mr: 1}} className='social-icon-box'>
                        <i className="fab fa-youtube social-icon"></i>
                    </Link>
                    <Link href="#" sx={{mr: 1}} className='social-icon-box'>
                        <i className="fab fa-instagram social-icon"></i>
                    </Link>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{}}>
                        © 2022 Fly Next Airlines. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;