import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../../../images/Logo.png';
import Button from '@mui/material/Button';
import { Container, Link, Typography } from '@mui/material';
import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{pt: 10, pb: 5, bgcolor: '#673ab7'}}>
            <Container>
                <Grid container  spacing={{ xs: 2, sm: 4, md: 6 }} >
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 }>
                        <Box sx={{bgcolor: 'white', width: "250px", borderRadius: 2, p: "2px", mt: -3, mb: 2 }} className="">
                            <img src={logo} width="200px" alt="" />
                        </Box>
                        <Typography sx={{color: 'white' }}>Dream Fly was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#18ffff' }}>
                            EUROPE
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            London DT1M 3BF
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            +44 (0)20 3671 5709
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#18ffff' }}>
                            ASIA & PACIFIC
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            2473 Red Road Ste 98
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            Singapore SG
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            + 1 623 211 6319
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 }>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#18ffff' }}>
                            NORTH AMERICA
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            +44 (0)20 3671 5709
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            London DT1M 3BF
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container sx={{px: 5, pb:5, pt:3, mt:5, border: 2,  borderColor: 'white', borderRadius: 3}}>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#18ffff' }}>
                            Get started
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Private jet
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Register
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Get started
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Current Jet Deals
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Flynext mobile app
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, color: '#18ffff', fontWeight: 600, fontSize: "20px", }}>
                            How it works
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            How it works
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Ways to fly
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                         Ways to buy
                        </Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Private charter</Typography>
                        <Typography sx={{lineHeight: 2, color: 'white' }} className='footer-list'>
                            Private Jet Cost
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 2.6 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, color: '#18ffff', fontWeight: 600, fontSize: "20px", }}>
                            About us
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            About us
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            News & press
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            Blog
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            FAQs
                        </Typography>
                        <Typography className='footer-list' sx={{lineHeight: 2, color: 'white' }}>
                            Careers
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 } sx={{pt:2,}}>
                        <Typography sx={{lineHeight: 2, color: '#18ffff', fontWeight: 600, fontSize: "20px", }}>
                            Newsletter
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                            Dream Fly was founded in 1991 by a group of safety-focused professionals erators.
                        </Typography>
                        <Box>
                            <input className='input-field' type="email" name="" id="" placeholder="Enter Email"/>
                        </Box>
                        <Box>
                            <Button sx={{ width: '100%', py: "11px" }}variant="contained">Subscribe Us</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <Container  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
                <Box sx={{mt: 4 }}>
                    <Link href="#" className='footer-icon'><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#" className='footer-icon'><i className="fab fa-twitter"></i></Link>
                    <Link href="#" className='footer-icon'><i className="fab fa-youtube"></i></Link>
                    <Link href="#" className='footer-icon'><i className="fab fa-instagram"></i></Link>
                </Box>
                <Box sx={{mt: 4 }}>
                    <Typography sx={{color: "white"}}>
                        © 2022 Fly Next Airlines. All rights reserved.
                    </Typography>
                </Box>
            </Container>

        </Box>
    );
};

export default Footer;