import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Testimonial from "../Testimonial/Testimonial";

const TestimonialSlider = () => {
    // export default class TestimonialSlider extends Component {
    // render() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    
    var settings = {
        dots: true,
        infinite: true,
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
                    dots: false,
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
        <div
            style={{
                backgroundImage: `url(https://themeim.com/demo/flynext/assets/images/client/map.png)`,
                backgroundSize: 'cover',
                objectFit: 'contain',
                padding: '20px 0'
            }}
        >
            <Slider {...settings}>
                {/* { Array.from(Array(10)).map((_, index) => (
                    <Grid item xs={ 12 } key={ index }>
                        <Testimonial />
                    </Grid>
                )) } */}
                {reviews.map((review, index) => (
                    <Grid item xs={12} key={index}>
                        <Testimonial review={review} />
                    </Grid>
                ))}
            </Slider >


        </div >
    );
    // }
}
export default TestimonialSlider;