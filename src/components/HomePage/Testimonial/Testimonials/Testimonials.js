import { Avatar, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonials extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2> Responsive </h2>

                <Container>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 8 } sx={ { padding: '15px' } }>
                            <Slider { ...settings }>
                                <Box sx={ { p: 4 } } >
                                    <h3>1</h3>
                                    <Typography variant="body1" component="h2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, similique!
                                    </Typography>;
                                </Box>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                                <div>
                                    <h3>7</h3>
                                </div>
                                <div>
                                    <h3>8</h3>
                                </div>
                            </Slider>
                        </Grid>
                        <Grid item xs={ 4 }>
                            <img src="https://themeim.com/demo/flynext/assets/images/client/client-big.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}