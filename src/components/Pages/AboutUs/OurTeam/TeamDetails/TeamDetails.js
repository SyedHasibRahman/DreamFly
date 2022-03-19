import { Container, Grid, InputAdornment, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './TeamDetails.css';
import swal from 'sweetalert';


const ContactButton = styled(Button)({
    '&': {
        background: '#512da8',
        color: '#FFF',
        fontWeight: '500',
        padding: '6px 30px',
        borderRadius: "50px",
        border: '2px solid #4527a0',
        marginTop: '10px'
    },
    '&:hover': {
        borderColor: '#4527a0',
        background: "white",
        color: '#4527a0',
        transition: ".7s",
    }
});

const TeamDetails = () => {
    const { teamId } = useParams()
    const [teamDetails, setTeamDetails] = useState({});
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('dreamfly', 'template_kum66w9', form.current, 'rXikndND2k846guhn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        swal({
            title: "Good job!",
            text: "You Successfully Submitted!!",
            icon: "success",
            button: "Done",
        });
    };
    useEffect(() => {
        const url = `http://localhost:5000/teamsInfo/${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data))
    }, [teamId]);
    return (
        <div>
            <Navigation></Navigation>
            <Container className="paddingY90">
                <Box sx={{ mx: { sm: "50px", md: 0, lg: 0 } }}>
                    <Grid container spacing={{ lg: 3, md: 3, xs: 5 }}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ bgcolor: "#DDE6EF", borderRadius: "10px", height: "400px", width: "100%" }}>
                                <img src={teamDetails.img} alt="" height="100%" width="100%" style={{ borderRadius: "10px", objectFit: 'fill' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <Box sx={{ minHeight: '400px', bgcolor: '#F5F3F1', p: 3, borderRadius: "10px" }}>
                                <Typography variant='h3' sx={{ mb: 1 }}>{teamDetails.name}</Typography>
                                <Typography >Managing Director</Typography>
                                <Typography sx={{ my: 3 }}>The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755 Fleuret two-seat jet trainer.</Typography>
                                <Typography sx={{ mb: 1, display: "flex", alignItems: "center" }}>
                                    <i style={{ marginRight: "10px", color: "#512da8" }} className="fa-solid fa-phone"></i>
                                    {teamDetails.mobile}
                                </Typography>
                                <Typography sx={{ mb: 1, display: "flex", alignItems: "center" }}>
                                    <i style={{ marginRight: "10px", color: "#512da8" }} className="fa-solid fa-envelope"></i>
                                    {teamDetails.email}
                                </Typography>
                                <Typography sx={{ my: 1, fontSize: '20px', fontWeight: 700 }}>
                                    Follow Me
                                </Typography>
                                <Box sx={{ display: "flex", }}>
                                    <a href={teamDetails.facebook} className='social-icon-box' target='_blank' rel="noreferrer">
                                        <i className="fab fa-facebook-f social-icon"></i>
                                    </a>
                                    <a href={teamDetails.twitter} className='social-icon-box' target='_blank' rel="noreferrer">
                                        <i className="fab fa-twitter social-icon"></i></a>
                                    <a href={teamDetails.linkedin} sx={{}} className='social-icon-box' target='_blank' rel="noreferrer">
                                        <i className="fab fa-linkedin social-icon"></i>
                                    </a>
                                    <a href={teamDetails.instragram} sx={{}} className='social-icon-box' target='_blank' rel="noreferrer">
                                        <i className="fab fa-instagram social-icon"></i>
                                    </a>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3' sx={{ mb: 1, mt: 4, fontWeight: "700 !important" }}>
                                About Me
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats. Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you innovative ways to buy and fly. Charter an entire jet, or offer the seats you don’t need through our app. Either way, there’s no longer a need for full or even fractional jet ownership – or rigid, non-refundable jet cards.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3' sx={{ mb: 1, fontWeight: "700 !important" }}>
                                Experience & Skill
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers insider access to unique experiences, exclusive amenities, and lifestyle services that enrich and broaden the journey. For more details regarding current Member Benefits, see below, contact your dedicated Aviation Advisor.
                            </Typography>
                            <Grid container sx={{ py: 2 }} spacing={{ lg: 4, md: 3, sm: 2, xs: 4 }}>
                                <Grid item md={3} sm={6} xs={12} >
                                    <Box
                                        sx={{ px: 3, py: 4, borderRadius: "5px", border: "1px solid grey", textAlign: "center" }}
                                    >
                                        <Box className="teamDetailsCard">
                                            <Box
                                                sx={{ mx: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", text: "center", border: "10px solid #5e35b1", width: "140px", height: "140px", borderRadius: "50%", }}
                                            >
                                                <Typography variant="h2">96 %</Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: 700, mt: 3 }}
                                        >
                                            BUSINESS ANALYSIS
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} >
                                    <Box
                                        sx={{ px: 3, py: 4, borderRadius: "5px", border: "1px solid grey", textAlign: "center" }}
                                    >
                                        <Box className="teamDetailsCard">
                                            <Box
                                                sx={{ mx: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", text: "center", border: "10px solid #5e35b1", width: "140px", height: "140px", borderRadius: "50%", }}
                                            >
                                                <Typography variant="h2">96 %</Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: 700, mt: 3 }}
                                        >
                                            BUSINESS ANALYSIS
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} >
                                    <Box
                                        sx={{ px: 3, py: 4, borderRadius: "5px", border: "1px solid grey", textAlign: "center" }}
                                    >
                                        <Box className="teamDetailsCard">
                                            <Box
                                                sx={{ mx: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", text: "center", border: "10px solid #5e35b1", width: "140px", height: "140px", borderRadius: "50%", }}
                                            >
                                                <Typography variant="h2">96 %</Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: 700, mt: 3 }}
                                        >
                                            BUSINESS ANALYSIS
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12} >
                                    <Box
                                        sx={{ px: 3, py: 4, borderRadius: "5px", border: "1px solid grey", textAlign: "center" }}
                                    >
                                        <Box className="teamDetailsCard">
                                            <Box
                                                sx={{ mx: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", text: "center", border: "10px solid #5e35b1", width: "140px", height: "140px", borderRadius: "50%", }}
                                            >
                                                <Typography variant="h2">96 %</Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{ fontWeight: 700, mt: 3 }}
                                        >
                                            BUSINESS ANALYSIS
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item >
                            <Typography variant='h3' sx={{ mb: 1, fontWeight: "700 !important" }}>
                                Qualification & Experience
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats. Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you innovative ways to buy and fly. Charter an entire jet, or offer the seats you don’t need through our app. Either way, there’s no longer a need for full or even fractional jet ownership – or rigid, non-refundable jet cards.
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
            <Box className='contact paddingY90'>
                <Container>
                    <Box sx={{ mx: { sm: "50px", md: 0, lg: 0 } }}>
                        <Grid container spacing={{ md: 5, xs: 8 }}>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontSize: "20px", color: "#512da8", fontWeight: 600, mb: 1 }}>
                                    Talk to us
                                </Typography>
                                <Typography variant='h2'>
                                    Any Question?
                                </Typography>
                                <Typography variant='h2'>
                                    Fell Free to Contact
                                </Typography>
                                <Typography sx={{ fontSize: "18px", mt: 2, mb: 3 }}>
                                    With a vast array of popular private planes to choose from, travelling by private jet charter is the most efficient.
                                </Typography>
                                <Box sx={{ display: "flex", mt: 2 }}>
                                    <a href={teamDetails.facebook} sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="fab fa-facebook-f social-icon"></i>
                                    </a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="fab fa-twitter social-icon"></i></a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="fab fa-youtube social-icon"></i>
                                    </a>
                                    <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
                                        <i className="fab fa-instagram social-icon"></i>
                                    </a>
                                </Box>
                            </Grid>

                            {/* Contact From  */}

                            <Grid item xs={12} md={6}>

                                <form ref={form} onSubmit={sendEmail}>
                                    <Grid container direction="row" sx={{ mb: "20px" }} justifyContent="space-between" alignItems="center" spacing={{ xs: 3, md: 1.5 }}>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Name"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                name="user_name"
                                                type="name"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-user"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Email"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                required
                                                name="user_email"
                                                type="email"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-envelope"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Phone"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                type="number"
                                                name="phone"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-phone"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <InputTextField
                                                label="Subject"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                name="subject"
                                                type="text"
                                                sx={{ bgcolor: "white" }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <i className="fa-solid fa-file-lines"></i>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <InputTextField
                                                label="Massage"
                                                id="custom-css-outlined-input"
                                                fullWidth
                                                type="text"
                                                rows={5}
                                                required
                                                multiline
                                                name="message"
                                                sx={{ bgcolor: "white" }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <ContactButton
                                        type="submit"
                                        sx={{ textTransform: 'capitalize', fontSize: "18px" }}>
                                        Submit Now
                                    </ContactButton>
                                </form>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default TeamDetails;