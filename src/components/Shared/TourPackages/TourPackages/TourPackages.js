import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import "./TourPackages.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import BookingModal from '../BookingModal/BookingModal';

const TourPackages = () => {

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  const sliderRef = useRef(null);
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tourPackages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, []);

  const settings = {
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className="tour_packages">
        <Container>
          <Box style={ { padding: "40px 0px" } }>
            <Box component="div" sx={ { textAlign: "center" } }>
              <Typography variant="h6" sx={ { fontWeight: 600, color: "#fff" } }>
                <span style={ { color: "#dcbb87" } }>Flynext</span> Package
              </Typography>
              <Typography
                variant="h3"
                sx={ { py: 3, fontWeight: 600, fontSize: "2.5rem", color: "#fff" } }
              >
                DreamFly Tour Packages
              </Typography>
            </Box>
            <Slider
              { ...settings }
              ref={ sliderRef }
              slidesToShow={ 3 }
              slidesToScroll={ 1 }
              customPaging={ (i) => (
                <div
                  style={ {
                    position: "absolute",
                    width: "100%",
                    top: "-10px",
                    opacity: 0,
                  } }
                >
                  { i }
                </div>
              ) }
            >
              { packages.map((item) => (
                <Box style={ {} } key={ item._id }>
                  <Card
                    sx={ {
                      maxWidth: "100%",
                      margin: "10px",
                      position: "relative",
                    } }
                  >
                    <CardActionArea>
                      <Box className="tour_img">
                        <CardMedia
                          component="img"
                          image={ item?.images }
                          alt="green iguana"
                        />
                        <Typography className="tour_price">
                          ${ item?.price }
                        </Typography>
                      </Box>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={ { fontWeight: 600, fontSize: "1.4rem" } }
                        >
                          { item?.title }
                        </Typography>
                        <Typography
                          sx={ { color: "#111", fontWeight: 500, py: 1 } }
                        >
                          Date: { item?.date }
                        </Typography>
                        <Typography sx={ { color: "#111", fontWeight: 500 } }>
                          Person: { item?.person }
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={ { display: "flex", justifyContent: "space-between" } }
                      >
                        <Box>
                          <span className="airplane">
                            <AirplanemodeActiveIcon />
                          </span>
                          <a style={ { textDecoration: "none" } }
                            href={ `/TourPackages/${item._id}` }
                          >
                            <Box sx={ { display: "flex", fontSize: "25px", textAlign: "center", ml: 1 } }>
                              <Typography sx={ { color: '#5e35b1', fontWeight: 600, textTransform: 'capitalize', } }>
                                Book Now
                              </Typography>
                              <Typography sx={ { color: '#5e35b1', fontWeight: 600, ml: 1 } }>
                                {/* <ArrowRightAltIcon/> */ }
                              </Typography>
                            </Box>
                          </a>
                        </Box>
                        <span className="video_icon">
                          <VideoCameraBackIcon />
                        </span>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Box>
              )) }
            </Slider>
          </Box>
          <Box
            style={ {
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            } }
          >
            <Box
              style={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              } }
            >
              <Box
                className="arrow_buttons left"
                onClick={ () => sliderRef.current.slickPrev() }
              >
                <ArrowBackIosNewIcon />
              </Box>
              <Box
                className="arrow_buttons"
                onClick={ () => sliderRef.current.slickNext() }
              >
                <ArrowForwardIosIcon />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <BookingModal
        openBooking={ openBooking }
        handleBookingClose={ handleBookingClose }
      // setBookingSuccess={setBookingSuccess}
      ></BookingModal>

    </>
  );
};

export default TourPackages;
