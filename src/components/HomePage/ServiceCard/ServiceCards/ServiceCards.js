import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';
import './ServiceCards.css'
import AOS from 'aos';
import 'aos/dist/aos.css'



const ServiceCards = () => {
    const [jetservice, setJetservice] = useState([]);


    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,

        });
        fetch("./jetservice.json")
            .then((res) => res.json())
            .then((data) => setJetservice(data));
    }, []);

    return (
        <Box sx={{ bgcolor: "#F5F3F1" }}>
            <Container>
                <Box sx={{ flexGrow: 1, padding: "100px 0" }}>
                    <Box data-aos='zoom-in-down' style={{ textAlign: 'center', marginBottom: "50PX" }}>

                        <Typography
                            gutterBottom
                            sx={{ fontSize: "20px", fontWeight: 700 }}
                        >
                            Discover <span style={{ color: '#4527a0', fontSize: "20px", fontWeight: 700 }}>DreamFly</span> Benefits
                        </Typography>
                        <Typography gutterBottom variant="h2">
                            Discover Private Jet Benefits
                        </Typography>
                    </Box>
                    <Grid container spacing={{xs: 3, sm: 2}} sx={{ mt: "50px" }}>
                        {jetservice.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                <Card className='cardBody' data-aos='zoom-in'>
                                    <>

                                        <img style={{ paddingLeft: '15px' }} width='70' height='70' src={service.icon} alt="" />

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {service.description}
                                            </Typography>
                                        </CardContent>
                                    </>
                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceCards;
