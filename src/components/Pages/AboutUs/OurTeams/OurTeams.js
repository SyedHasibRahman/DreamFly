import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import OurTeam from '../OurTeam/OurTeam';

const OurTeams = () => {
  const [ourTeams, setOurTeams] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/teamsInfo')
      .then(res => res.json())
      .then(data => setOurTeams(data))
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Box>
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
            {
              ourTeams.map(ourTeam => <OurTeam
                key={ourTeam._id}
                ourTeam={ourTeam}
              ></OurTeam>)
            }
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeams;