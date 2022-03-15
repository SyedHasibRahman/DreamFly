import { Container, Grid, InputAdornment, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import InputTextField from '../../../../StyledComponent/InputTextField/InputTextField';
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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
        alert('Success')
    };
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <img src="https://themeim.com/demo/flynext/assets/images/team/team-1.png" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Box sx={{ bgcolor: '#F5F3F1', p: 3 }}>
                            <Typography variant='h3' sx={{ mb: 1 }}>Alif Ahmed Nowshad</Typography>
                            <Typography >Managing Director</Typography>
                            <Typography sx={{ my: 3 }}>The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755 Fleuret two-seat jet trainer.</Typography>
                            <Typography sx={{ mb: 1 }}>
                                <i class="fa-solid fa-phone"></i>
                                +1 814 929 4269
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <i class="fa-solid fa-envelope"></i>
                                contact@flynext.com
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '20px', fontWeight: 800 }}>
                                Follow Me
                            </Typography>
                            <Box sx={{ display: "flex", mt: 2 }}>
                                <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
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
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant='h3' sx={{ mb: 1, mt: 4 }}>
                            About Me
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats. Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you innovative ways to buy and fly. Charter an entire jet, or offer the seats you don’t need through our app. Either way, there’s no longer a need for full or even fractional jet ownership – or rigid, non-refundable jet cards.
                        </Typography>
                    </Grid>
                    <Grid item sx={{ mb: 1 }}>
                        <Typography variant='h3' sx={{ mb: 1 }}>
                            Experience & Skill
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers insider access to unique experiences, exclusive amenities, and lifestyle services that enrich and broaden the journey. For more details regarding current Member Benefits, see below, contact your dedicated Aviation Advisor.
                        </Typography>
                    </Grid>
                    <Grid item sx={{ mb: 1 }}>
                    </Grid>
                    <Grid item sx={{ mb: 1 }}>
                        <Typography variant='h3' sx={{ mb: 1 }}>
                            Qualification & Experience
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats. Search the world with ease and transparency.As the only tech-forward private aviation company, XO is able to bring you innovative ways to buy and fly. Charter an entire jet, or offer the seats you don’t need through our app. Either way, there’s no longer a need for full or even fractional jet ownership – or rigid, non-refundable jet cards.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
            <Box className='contact paddingY90'>
                <Container>
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
                            <Typography sx={{ fontSize: "18px", pt: 1 }}>
                                With a vast array of popular private planes to choose from,
                            </Typography>
                            <Typography sx={{ fontSize: "18px", pb: 1 }}>
                                travelling by private jet charter is the most efficient
                            </Typography>
                            <Box sx={{ display: "flex", mt: 2 }}>
                                <a href="#a" sx={{ mr: 1 }} className='social-icon-box'>
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
                                <Grid container direction="row" sx={{ mb: "20px" }} justifyContent="space-between" alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={6}>
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
                                    <Grid item xs={12} sm={6}>
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
                                    <Grid item xs={12} sm={6}>
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
                                    <Grid item xs={12} sm={6}>
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
                </Container>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default TeamDetails;