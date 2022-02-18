import { Box } from '@mui/system';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Typography } from '@mui/material';

const OurHistory = () => {
  return (
    <Box sx={{padding:'100px 0', backgroundColor:'#f5f3f1'}}>
      <Container>
        <Box>
        <Typography variant="subtitle1" gutterBottom component="div" sx={{color:'#dcbb87', fontWeight:'700', fontSize:'20px', fontFamily:'"Mulish", sans-serif', marginBottom:'20px', lineHeight:'1.5em', textAlign:'center'}}> Our History </Typography>
        <Typography variant="h1" component="h2" sx={{fontSize:'40px', fontWeight:'700', color:'#19232d', lineHeight:'1.3em', fontFamily:'"Playfair Display", sans-serif', textAlign:'center'}}> What Make Us Special </Typography>
          <Box sx={{marginTop:'50px'}}>
          <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Box sx={{width:'500px', height:'400px'}}>
              <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-1.png" alt="" />
            </Box>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
          <Box sx={{fontFamily:'"Playfair Display", sans-serif'}}>
            <span style={{color:'#dcbb87', fontWeight:'700', fontSize:'40px', display:'block'}}>201<span style={{fontSize:'45px'}}>2</span></span>
            <Typography variant="h2" component="h2" sx={{marginBottom:'15px', fontWeight:'600', fontSize:'24px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', }}> The First Private Jet </Typography>
            <Typography variant="h6" component="h2" sx={{fontSize:'16px', lineHeight:'1.7em', fontFamily:'"Mulish", sans-serif', fontWeight:'500', color:'#3d3d3d', textAlign:'left'}}> The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust. </Typography>
          </Box>
            </Box></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Box sx={{display:'flex', justifyContent:'flex-start'}}>
            <Box sx={{width:'500px', height:'400px'}}>
              <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-2.png" alt="" />
            </Box>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
            <Box sx={{fontFamily:'"Playfair Display", sans-serif'}}>
            <span style={{color:'#dcbb87', fontWeight:'700', fontSize:'40px', display:'block'}}>201<span style={{fontSize:'45px'}}>2</span></span>
            <Typography variant="h2" component="h2" sx={{marginBottom:'15px', fontWeight:'600', fontSize:'24px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', }}> The First Private Jet </Typography>
            <Typography variant="h6" component="h2" sx={{fontSize:'16px', lineHeight:'1.7em', fontFamily:'"Mulish", sans-serif', fontWeight:'500', color:'#3d3d3d', textAlign:'right'}}> The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust. </Typography>
          </Box>
            </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Box sx={{width:'500px', height:'400px'}}>
              <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-3.png" alt="" />
            </Box>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Box sx={{display:'flex', justifyContent:'flex-start'}}>
            <Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
            <Box sx={{fontFamily:'"Playfair Display", sans-serif'}}>
            <span style={{color:'#dcbb87', fontWeight:'700', fontSize:'40px', display:'block'}}>201<span style={{fontSize:'45px'}}>2</span></span>
            <Typography variant="h2" component="h2" sx={{marginBottom:'15px', fontWeight:'600', fontSize:'24px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', }}> The First Private Jet </Typography>
            <Typography variant="h6" component="h2" sx={{fontSize:'16px', lineHeight:'1.7em', fontFamily:'"Mulish", sans-serif', fontWeight:'500', color:'#3d3d3d', textAlign:'left'}}> The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust. </Typography>
          </Box>
            </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <Box sx={{display:'flex', justifyContent:'flex-start'}}>
            <Box sx={{width:'500px', height:'400px'}}>
              <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-4.png" alt="" />
            </Box>
            </Box>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
            <Box sx={{fontFamily:'"Playfair Display", sans-serif'}}>
            <span style={{color:'#dcbb87', fontWeight:'700', fontSize:'40px', display:'block'}}>201<span style={{fontSize:'45px'}}>2</span></span>
            <Typography variant="h2" component="h2" sx={{marginBottom:'15px', fontWeight:'600', fontSize:'24px', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif', }}> The First Private Jet </Typography>
            <Typography variant="h6" component="h2" sx={{fontSize:'16px', lineHeight:'1.7em', fontFamily:'"Mulish", sans-serif', fontWeight:'500', color:'#3d3d3d', textAlign:'right'}}> The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust. </Typography>
          </Box>
            </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurHistory;