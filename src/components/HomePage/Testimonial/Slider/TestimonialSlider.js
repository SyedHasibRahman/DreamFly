import { Avatar, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import Testimonial from "../Testimonial/Testimonial";

export default class TestimonialSlider extends Component {
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
            <div style={ {
                backgroundImage: `url(https://themeim.com/demo/flynext/assets/images/client/map.png)`,
                backgroundSize: 'cover',
                objectFit: 'contain',
                padding: '20px 0'

            } }

            >

                <Slider { ...settings }>
                    { Array.from(Array(10)).map((_, index) => (
                        <Grid item xs={ 12 } key={ index }>

                            <Testimonial />
                        </Grid>
                    )) }


                </Slider >
            </div >
        );
    }
}