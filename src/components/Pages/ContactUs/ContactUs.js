import { Container, Grid, Typography, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Button from '@mui/material/Button';
import './ContactUs.css'
import { styled } from '@mui/material/styles';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import InputTextField from '../../StyledComponent/InputTextField/InputTextField';
import swal from 'sweetalert';
import SocialIcons from '../../Shared/SocialIcons/SocialIcons';



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

const ContactUs = () => {
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
            text: "You clicked the button!",
            icon: "success",
            button: "Done",
        });
    };
    return (
        <>
            <Navigation />

            {/* Contact Information Section */}

            <Container className='paddingY90'>
                <Grid container spacing={{ xs: 5, lg: 8 }}>
                    <Grid item xs={12} md={6} order={{ xs: 2, sm: 1 }}>
                        <Box className="map-img" sx={{ width: "100%", height: "100%", border: 'none' }}>
                            <iframe title="This is a Dream Fly location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8990681563923!2d90.37139331434842!3d23.750978394672508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d6018f643%3A0x603d2d083289b4a3!2sDhanmondi%2032%20Road%20Bridge%2C%20Dhanmondi%20Bridge%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1644859032836!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: "1px solid #e6e6e6", marginTop: "5px" }} allowfullscreen="" loading="lazy"></iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} order={{ xs: 1, sm: 2 }}>
                        <Typography sx={{ fontSize: "20px", color: "#512da8", fontWeight: 700, mb: 1 }}>
                            Luxury Charters
                        </Typography>
                        <Typography variant='h2'>
                            How to Contact with Us?
                        </Typography>
                        <Typography sx={{ fontSize: "18px", pt: 1 }}>
                            The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s from the MS.755
                        </Typography>
                        <Box sx={{ py: 3, display: "flex", borderBottom: "1px dashed #b39ddb" }}>
                            <Box className="contact-icon-box">
                                <i className="fa-solid fa-location-dot contact-icon"></i>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3'>
                                    Our Location
                                </Typography>
                                <Typography>
                                    963 heloe Ua-Torrento, CA 95448
                                </Typography>
                                <Typography>
                                    Find Us On google Map
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ py: 3, display: "flex", borderBottom: "1px dashed #b39ddb" }}>
                            <Box className="contact-icon-box">
                                <i className="fa-solid fa-phone contact-icon"></i>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3'>
                                    Our Phone
                                </Typography>
                                <Typography>
                                    +880 17000 0000
                                </Typography>
                                <Typography>
                                    +880 14000 0000
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 3, display: "flex", }}>
                            <Box className="contact-icon-box">
                                <i className="fa-solid fa-envelope contact-icon"></i>
                            </Box>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant='h3'>
                                    Our Email
                                </Typography>
                                <Typography>
                                    dreanfly@gmail.com
                                </Typography>
                                <Typography>
                                    dreanfly1@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact From Section */}

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
                                <SocialIcons/>
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
            <Footer />
        </>
    );
};

export default ContactUs;