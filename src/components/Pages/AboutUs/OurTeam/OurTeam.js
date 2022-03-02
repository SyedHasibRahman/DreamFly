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
      <Box sx={{padding:'100px 0', backgroundColor:'#f5f3f1'}}>
        <Container>
          <Box>
            <Typography 
              gutterBottom 
              sx={{color:'#5e35b1', fontWeight:'700', fontSize:'20px',marginBottom:'10px',}}
              > 
              Our team 
            </Typography>
            <Typography variant="h2"> 
              Meet Our Team Members 
            </Typography>
          </Box>
        <Box  sx={{marginTop:'50px'}}>
          <Slider {...settings}>

              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
                  <Box 
                    sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}
                    >
                    <Box 
                      sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}
                      >
                      <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
                    </Box>
                  </Box>
                  <Typography 
                    sx={{backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize: "24px", textAlign:'center', paddingTop:'16px', margin:'0', color:'#19232d',}}
                    > 
                    Alex Moure 
                  </Typography>
                  <Typography 
                    sx={{ textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'18px', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px', color:'#19232d'}}
                    > 
                    Director of Finance 
                  </Typography>
                </Box>
              </Box>
            

            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
                  <Box 
                    sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}
                    >
                    <Box 
                      sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}
                      >
                      <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
                    </Box>
                  </Box>
                  <Typography 
                    sx={{backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize: "24px", textAlign:'center', paddingTop:'16px', margin:'0', color:'#19232d',}}
                    > 
                    Alex Moure 
                  </Typography>
                  <Typography 
                    sx={{ textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'18px', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px', color:'#19232d'}}
                    > 
                    Director of Finance 
                  </Typography>
                </Box>
              </Box>
            

            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
                  <Box 
                    sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}
                    >
                    <Box 
                      sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}
                      >
                      <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
                    </Box>
                  </Box>
                  <Typography 
                    sx={{backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize: "24px", textAlign:'center', paddingTop:'16px', margin:'0', color:'#19232d',}}
                    > 
                    Alex Moure 
                  </Typography>
                  <Typography 
                    sx={{ textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'18px', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px', color:'#19232d'}}
                    > 
                    Director of Finance 
                  </Typography>
                </Box>
              </Box>
           

            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
                  <Box 
                    sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}
                    >
                    <Box 
                      sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}
                      >
                      <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
                    </Box>
                  </Box>
                  <Typography 
                    sx={{backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize: "24px", textAlign:'center', paddingTop:'16px', margin:'0', color:'#19232d',}}
                    > 
                    Alex Moure 
                  </Typography>
                  <Typography 
                    sx={{ textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'18px', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px', color:'#19232d'}}
                    > 
                    Director of Finance 
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