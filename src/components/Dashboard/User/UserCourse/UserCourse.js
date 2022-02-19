import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import './UserCourse.css'


const UserCourse = () => {
    const { user } = useAuth({});

    const data = [
        {
            id: 1,
            title: "Private Pilot License (PPL)",
            hours: "45 Hours",
            dec: "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on",
            images:
                "https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: "399.00",
            instracort: "Syde Hasibur"
        },
        {
            id: 2,
            title: "Commercial Pilot License",
            hours: "35 Hours",
            dec: "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s",
            images:
                "https://images.unsplash.com/photo-1529521914207-a330038e35a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: "299.00",
            instracort: "Ali Haydar"
        },
        {
            id: 3,
            title: "Multi-Engine IFR Rating",
            hours: "40 Hours",
            dec: "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats.",
            images:
                "https://images.unsplash.com/photo-1596899223071-723a26d67f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: "499.00",
            instracort: "Raju Molla"
        },
        {
            id: 4,
            title: "Private Pilot License (PPL)",
            hours: "30 Hours",
            dec: "Search the world with ease and transparency.As the only tech-forward private aviation company",
            images:
                "https://images.unsplash.com/photo-1581300907482-9ab70b31b69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: "199.00",
            instracort: "Alif Ahmed"
        },
        {
            id: 5,
            title: "Commercial Pilot License",
            hours: "25 Hours",
            dec: "Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership",
            images:
                "https://images.unsplash.com/photo-1610081206051-a73bc07abf23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: "599.00",
            instracort: "Sajib kumar"
        },
        {
            id: 6,
            title: "Multi-Engine IFR Rating",
            hours: "20 Hours",
            dec: "XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers",
            images:
                "https://images.unsplash.com/photo-1509541206217-cde45c41aa6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: "699.00",
            instracort: "Sohel Rana"
        },
    ];
    return (
        <Container>
            <Box><Typography my={5} variant='h5' style={{ fontWeight: '700' }}>Welcome back <span style={{ color: '#6047EC', fontWeight: '700' }}>{user?.displayName}</span>, ready for your next Course?</Typography></Box>
            <Box style={{ padding: "40px 0px" }}>
                <Grid container spacing={{ xs: 2, md: 2 }}>
                    {data.map((item) => (
                        <Grid item xs={12} sm={12} md={6} key={item.id}>
                            <Card
                                sx={{
                                    maxWidth: "100%",
                                    margin: "10px",
                                    position: "relative",
                                }}
                            >
                                <CardActionArea style={{ display: 'flex' }}>
                                    <Grid xs={12} sm={12} md={5} lg={5} className="courses_imgp">
                                        <CardMedia

                                            component="img"
                                            image={item?.images}
                                            alt="green iguana"
                                        />
                                    </Grid>
                                    <CardContent xs={12} sm={12} md={7} lg={7}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ fontWeight: 600, fontSize: "1.4rem" }}
                                        >
                                            {item?.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                color: "#111",
                                                fontWeight: 500,
                                                py: 1,
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                variant='h6'
                                                sx={{ paddingLeft: "8px", fontWeight: 700 }}
                                            >
                                                {item?.instracort}
                                            </Typography>

                                        </Box>
                                        <Box>
                                            <Typography className="courses_btnp">
                                                <Button>
                                                    Continue Course
                                                </Button>
                                            </Typography>
                                        </Box>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}


export default UserCourse;
















