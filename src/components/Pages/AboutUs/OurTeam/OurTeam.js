import { Container, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from "react";
import Slider from "react-slick";
import './OurTeam.css';

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
      <Box className="paddingY90" sx={{ backgroundColor: '#FFFFFF' }}>
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

              
                <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:'10px'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:'10px'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:'10px'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:'10px'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:'10px'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position:'relative' }}>
                    <Box 
                      sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
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
                    <Box className="teram-social" sx={{position:'absolute', right:'-40px', top:'0'}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'500px'}}>
                    <Link href='#'><i class="fab fa-facebook-f"></i></Link>
                    <Link href='#'><i class="fab fa-twitter"></i></Link>
                    <Link href='#'><i class="fab fa-youtube"></i></Link>
                    <Link href='#'><i class="fab fa-instagram"></i></Link>
                    </Box>
                </Box>
              </Box>
           </Box>

            </Slider>
          </Box>
        </Container>
      </Box>
    );
  }
}