import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from "react";
import Slider from "react-slick";

export default class OurTeam extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
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
      <Box className="paddingY90" sx={{ backgroundColor: '#f5f3f1' }}>
        <Container>
          <Box>
            <Typography
              gutterBottom
              sx={{ color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px', textAlign: "center" }}
            >
              Our team
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h2">
              Meet Our Team Members
            </Typography>
          </Box>
          <Box sx={{ marginTop: '50px' }}>

            <Slider {...settings}>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/sFKDHZy/273198995-1038508826733889-8359221742081174328-n.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Syed Hasib Rahman
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    Mern Stack Developer
                  </Typography>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/xF2bn4z/1642344359559.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Ali Haydar
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    Full Stack Developer
                  </Typography>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/M7rbMS8/273535204-469565924638968-1772298594840346666-n.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Alif Ahmed Nowshad
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    Frontend Developer
                  </Typography>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/Df82dBQ/273619420-1283686172140181-285853505001044674-n.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Md Raju Mollah
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    Product Manager
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/h8NYKSv/272761422-971064016862969-3825357988219787803-n.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Sajeeb Kumar
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    SQA Engineer
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '360px' }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px ' }}
                  >
                    <Box
                      sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
                    >
                      <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://i.ibb.co/GHhQgCx/272914099-490286912457588-8686964581657137105-n.jpg" alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
                  >
                    Md Sohel Rana
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '16px', color: '#19232d' }}
                  >
                    Software Engineer
                  </Typography>
                </Box>
              </Box>


            </Slider>
          </Box>
        </Container>
      </Box>
    );
  }
}