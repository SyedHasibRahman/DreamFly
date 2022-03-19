import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../../../images/Logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Footer.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import SocialIcons from '../SocialIcons/SocialIcons';
import swal from 'sweetalert';

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

    const [subscribes, setSubscribes] = useState([]);
    console.log(subscribes)
    
    useEffect(() => {
        fetch('http://localhost:5000/subscribes')
            .then(res => res.json())
            .then(data => setSubscribes(data))

    }, [])

    const handleInput = event => {
        const searchText = event.target.value;
        console.log(searchText)
        
    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        // const subscribeId = subscribes.map(subscribe => subscribe.subscribe);

        if (data.subscribe) {
            axios.post('http://localhost:5000/subscribes', data)
                .then(res => {
                    if (res.data.insertedId) {
                        swal({
                            title: "Good job!",
                            text: "You successfully subscribe us!",
                            icon: "success",
                            
                          });
                        reset();

                    }
                })
        } else {
            alert('tomar email ache');
        }


    }
    return (
        <Box sx={{ pt: 10, pb: 4, bgcolor: "#f5f5f5" }}>
            <Container>
                <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} >
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box sx={{ width: "250px", mt: -5, mb: 2 }}>
                            <img src={logo} width="200px" alt="" />
                        </Box>
                        <Typography sx={{ fontWeight: 500 }}>Dream Fly was founded in 2022 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.6}>
                        <Typography sx={{ lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8' }}>
                            EUROPE
                        </Typography>
                        <Typography sx={{ lineHeight: 2 }} className='footer-list'>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2 }}>
                            London DT1M 3BF
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2, }}>
                            +44 (0)20 3671 5709
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.6}>
                        <Typography sx={{ lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8' }}>
                            ASIA & PACIFIC
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2 }}>
                            2473 Red Road Ste 98
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2 }}>
                            Singapore SG
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2, }}>
                            + 1 623 211 6319
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.6}>
                        <Typography sx={{ lineHeight: 2, fontWeight: 600, fontSize: "20px", color: '#512da8' }}>
                            NORTH AMERICA
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2, fontWeight: 500 }}>
                            +44 (0)20 3671 5709
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2 }}>
                            Europe 45 Gloucester Road
                        </Typography>
                        <Typography className='footer-list' sx={{ lineHeight: 2 }}>
                            London DT1M 3BF
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container sx={{ px: 5, pb: 5, pt: 3, mt: 5, bgcolor: '#512da8', borderRadius: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={2.6} sx={{ pt: 2, }}>
                        <Typography variant="h4" sx={{ mb: 1, color: "white" }}>
                            Get started
                        </Typography>
                        <Link className="link-td-none" to="/Home">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Get started
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Services">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Private jet
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/SignUp">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Register
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/SignIn">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Sign In
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.6} sx={{ pt: 2, }}>
                        <Typography variant="h4" sx={{ mb: 1, color: "white" }}>
                            How it works
                        </Typography>
                        <Link className="link-td-none" to="/About">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Ways to fly
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Services">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Ways to buy
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Home">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Tour Packages
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Services">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Private Jet Cost
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.6} sx={{ pt: 2, }}>
                        <Typography variant="h4" sx={{ mb: 1, color: "white" }}>
                            About us
                        </Typography>
                        <Link className="link-td-none" to="/About">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                About us
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Blogs">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Blog
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Contact">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                FAQs
                            </Typography>
                        </Link>
                        <Link className="link-td-none" to="/Courses">
                            <Typography sx={{ lineHeight: 2 }} className='footer-box'>
                                Careers
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{ pt: 2, }}>
                        <Typography sx={{ lineHeight: 2, fontWeight: 600, fontSize: "20px", color: 'white' }}>
                            Newsletter
                        </Typography>
                        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <input onClick={() => handleInput()} className='input-field' 
                                type="email"
                                size="small" 
                                placeholder="Enter Email"
                                {...register("subscribe", { required: true })}
                                />
                            </Box>
                            <Box>
                                <SubscribeButton sx={{ width: '100%', py: "11px" }} variant="contained" type='submit' >
                                    Subscribe Us
                                </SubscribeButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', }} >
                <SocialIcons/>
                <Box sx={{ mt: 4 }}>
                    <Typography sx={{fontWeight: 600}}>
                        © 2022 Dream Fly Airlines. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;