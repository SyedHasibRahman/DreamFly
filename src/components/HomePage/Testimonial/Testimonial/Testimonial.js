import React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const Testimonial = ({ review }) => {
    const { Feedback, stars, img, users } = review;
    const rate = parseInt(stars)
    return (
        <div style={{
            marginTop: '70px',
        }}>

            <Container>
                <Grid container
                    sx={{
                        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
                        padding: '15px',
                        borderRadius: '5px',
                        height: '335px'
                    }}
                >
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                        padding: '15px',
                    }}>
                        < FormatQuoteIcon sx={{ fontSize: '5rem', color: '#4527a0 !important' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{ width: '100%' }}>
                        <img style={{
                            float: "right",
                            marginTop: '-50px',
                            height: '100px',
                            width: '95px',
                            borderRadius: '30px'
                        }} src={img} alt="" />
                    </Grid>
                    <Grid item xs={12}>

                        <Typography> {Feedback.slice(0, 150)} </Typography>
                        <Typography variant="h5" sx={{
                            py: 1,
                        }}>
                            {users.name}
                        </Typography>
                        <Grid item xs={12} sm={12} sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="body1" sx={{
                                fontWeight: 900
                            }}>
                                Designation
                            </Typography>
                            <Box sx={{
                            }}>
                                {Array.from(Array(rate)).map((_, index) => (
                                    <StarIcon key={index} sx={{ fontSize: '1.5rem', color: 'yellow !important' }} />
                                ))}
                            </Box>
                        </Grid>
                    </Grid>


                </Grid>

            </Container>
        </div>
    );
};

export default Testimonial;