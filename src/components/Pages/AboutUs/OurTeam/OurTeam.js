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
      <Box sx={{padding:'100px 0'}}>
        <Container>
        <div>
          <Box sx={{marginBottom:'50px'}}>
          <Typography variant="h4" component="h2" sx={{fontWeight:'700', fontSize:'20px', marginBottom:'20px', fontFamily:'"Mulish", sans-serif', color:'#dcbb87', lineHeight:'1.5em'}}> Our team </Typography>
          <Typography variant="h3" component="h2" sx={{fontWeight:'700', fontSize:'40px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif'}}> Meet Our Team Members </Typography>
          </Box>
        <Slider {...settings}>
          <div>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
            <Box sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}>
              <Box sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
              </Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{transition:'all 0.5s', backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize:'24px', lineHeight:'1.3em', textAlign:'center', padding:'16px 0', color:'#19232d', margin:'0'}}> Alex Moure </Typography>
            <Typography variant="h4" component="h2"sx={{color:'#19232d', textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'16px', lineHeight:'1.5em', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px'}}> Director of Finance </Typography>
            </Box>
            </Box>
          </div>
          <div>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
            <Box sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}>
              <Box sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
              </Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{transition:'all 0.5s', backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize:'24px', lineHeight:'1.3em', textAlign:'center', padding:'16px 0', color:'#19232d', margin:'0'}}> Alex Moure </Typography>
            <Typography variant="h4" component="h2"sx={{color:'#19232d', textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'16px', lineHeight:'1.5em', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px'}}> Director of Finance </Typography>
            </Box>
            </Box>
          </div>
          <div>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
            <Box sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}>
              <Box sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
              </Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{transition:'all 0.5s', backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize:'24px', lineHeight:'1.3em', textAlign:'center', padding:'16px 0', color:'#19232d', margin:'0'}}> Alex Moure </Typography>
            <Typography variant="h4" component="h2"sx={{color:'#19232d', textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'16px', lineHeight:'1.5em', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px'}}> Director of Finance </Typography>
            </Box>
            </Box>
          </div>
          <div>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
            <Box sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}>
              <Box sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
              </Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{transition:'all 0.5s', backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize:'24px', lineHeight:'1.3em', textAlign:'center', padding:'16px 0', color:'#19232d', margin:'0'}}> Alex Moure </Typography>
            <Typography variant="h4" component="h2"sx={{color:'#19232d', textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'16px', lineHeight:'1.5em', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px'}}> Director of Finance </Typography>
            </Box>
            </Box>
          </div>
          <div>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{backgroundColor:'#f5f3f1', borderRadius:'5px', width:'360px'}}>
            <Box sx={{display:'flex', justifyContent:'center', borderRadius:'5px 5px 5px 5px '}}>
              <Box sx={{width:'100%', height:'370px', backgroundColor:'#DDE6EF', borderRadius:'5px 5px 0 0 '}}>
                <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/team/team-2.png" alt="" />
              </Box>
            </Box>
            <Typography variant="h3" component="h2" sx={{transition:'all 0.5s', backgroundColor:'transparent', fontFamily:'"Mulish", sans-serif', fontWeight:'800', fontSize:'24px', lineHeight:'1.3em', textAlign:'center', padding:'16px 0', color:'#19232d', margin:'0'}}> Alex Moure </Typography>
            <Typography variant="h4" component="h2"sx={{color:'#19232d', textAlign:'center', fontFamily:'"Mulish", sans-serif', fontSize:'16px', lineHeight:'1.5em', fontWeight:'700', fontStyle:'italic', margin:'0', paddingBottom:'16px'}}> Director of Finance </Typography>
            </Box>
            </Box>
          </div>
        </Slider>
      </div>
        </Container>
      </Box>
    );
  }
}