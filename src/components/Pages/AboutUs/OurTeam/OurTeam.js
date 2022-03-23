import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/system';
import React from 'react';
import SecondaryButton from '../../../StyledComponent/Buttons/SecondaryButton';
import './OurTeam.css';

const OurTeam = (props) => {
  const { _id, name, role, img, facebook, twitter, instragram, linkedin } = props.ourTeam;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginRight: '10px' }}>
      <Box className="team-member" sx={{ backgroundColor: '#f5f3f1', borderRadius: '5px', width: '350px', position: 'relative' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', borderRadius: '5px 5px 5px 5px' }}
        >
          <Box
            sx={{ width: '100%', height: '370px', backgroundColor: '#DDE6EF', borderRadius: '5px 5px 0 0 ' }}
          >
            <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src={img} alt="" />
          </Box>
        </Box>
        <Typography
          sx={{ backgroundColor: 'transparent', fontFamily: '"Mulish", sans-serif', fontWeight: '800', fontSize: "24px", textAlign: 'center', paddingTop: '16px', margin: '0', color: '#19232d', }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '8px', color: '#19232d' }}
        >
          {role}
        </Typography>
        <Typography
          sx={{ textAlign: 'center', fontFamily: '"Mulish", sans-serif', fontSize: '18px', fontWeight: '700', fontStyle: 'italic', margin: '0', paddingBottom: '10px', color: '#19232d' }}
        >
          <Link to={`/TeamDetails/${_id}`} style={{ textDecoration: 'none' }}><SecondaryButton>Details</SecondaryButton></Link>
        </Typography>
        <Box className="teram-social" sx={{ position: 'absolute', right: '-61px', top: '0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '500px' }}>
            <a href={facebook} className='social-icon-box my-2' target='_blank' rel="noreferrer">
              <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a href={twitter} className='social-icon-box my-2' target='_blank' rel="noreferrer">
              <i className="fab fa-twitter social-icon"></i></a>
            <a href={linkedin} sx={{}} className='social-icon-box my-2' target='_blank' rel="noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
            <a href={instragram} sx={{}} className='social-icon-box my-2' target='_blank' rel="noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurTeam;