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
import './OurHistory.css'


const OurHistory = () => {
  return (
    <Box sx={{padding:'100px 0'}}>
      <Container>
        <Box>
          <Typography 
            gutterBottom 
            sx={{color:'#5e35b1', fontWeight:'700', fontSize:'20px',marginBottom:'10px', textAlign:'center'}}
            > 
            Our History 
          </Typography>
          <Typography 
            variant="h2"
            sx={{textAlign:'center'}}
            > 
            What Make Us Special 
          </Typography>
          <Box sx={{marginTop:'50px', display: { xs: 'none', sm: 'none', md: 'block' }}}>
            <React.Fragment>
              <Timeline position="alternate" style={{paddingLeft: 0, paddingRight: 0}}>

              <TimelineItem>
                  <TimelineOppositeContent 
                    style={{paddingLeft: 0, paddingRight: 0}}
                    > 
                    <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-1.png" alt="" />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{mx: 5, mt: 15, mb: -15,}} >
                    <TimelineDot 
                      variant="outlined" 
                      sx={{my: .5,}} 
                    />
                    <TimelineConnector  />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <Box sx={{width:'100%', height:'100%', display:'flex',    alignItems:'center'}}>
                      <Box>
                        <Typography 
                          variant="h2" 
                          sx={{color:'#5e35b1'}}
                          > 
                          2012 
                        </Typography>
                        <Typography 
                          variant="h3"
                          sx={{my: 1.5}} 
                          > 
                          The First Private Jet 
                        </Typography>
                        <Typography  
                          sx={{textAlign:'left'}}
                          >
                          The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust. 
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent 
                    style={{paddingLeft: 0, paddingRight: 0}}
                    > 
                    <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-2.png" alt="" />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{mx: 5, mt: 15, mb: -15,}} >
                    <TimelineDot 
                      variant="outlined" 
                      sx={{my: .5,}} 
                    />
                    <TimelineConnector  />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <Box sx={{width:'100%', height:'100%', display:'flex', alignItems:'center'}}>
                      <Box>
                        <Typography 
                          variant="h2" 
                          sx={{color:'#5e35b1'}}
                          > 
                          2016 
                        </Typography>
                        <Typography 
                          variant="h3"
                          sx={{my: 1.5}} 
                          > 
                          The Gulfstream Era 
                        </Typography>
                        <Typography  
                          sx={{textAlign:'right'}}
                          >
                          The Lockheed JetStar, designed to meet USAF UCX requirements and seating ten passengers and two crew, first flew on 4 September 1957. A total of 204 aircraft (20.2 t)
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineOppositeContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-3.png" alt="" /> 
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{mx: 5, mt: 15, mb: -15,}} >
                    <TimelineDot 
                      variant="outlined" 
                      sx={{my: .5,}} 
                    />
                    <TimelineConnector  />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                      <Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
                        <Box>
                          <Typography 
                            variant="h2" 
                            sx={{color:'#5e35b1'}}
                            > 
                            2018 
                          </Typography>
                          <Typography 
                            variant="h3"
                            sx={{my: 1.5}} 
                            > 
                            The Gulfstream Era 
                          </Typography>
                          <Typography  
                            sx={{textAlign:'left'}}
                            >
                            The smaller, 17,760 pounds (8.06 t) MTOW North American Sabreliner, tailored to the USAF UTX requirement, first flew on 16 September 1958. Powered by two Pratt & Whitney. 
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <img style={{width:'100%', height:'100%', objectFit:'fill'}} src="https://themeim.com/demo/flynext/assets/images/history/history-4.png" alt="" />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{mx: 5, mt: 15, bgcolor: "body"}} >
                    <TimelineDot 
                      variant="outlined" 
                      sx={{my: .5,}} 
                    />
                  </TimelineSeparator>
                  <TimelineContent style={{paddingLeft: 0, paddingRight: 0}}>
                    <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                      <Box sx={{width:'500px', height:'400px', display:'flex', alignItems:'center'}}>
                        <Box>
                          <Typography 
                            variant="h2" 
                            sx={{color:'#5e35b1'}}
                            > 
                            2022 
                          </Typography>
                          <Typography 
                            variant="h3"
                            sx={{my: 1.5}} 
                            > 
                            Beyond Earth
                          </Typography>
                          <Typography  
                            sx={{textAlign:'right'}}
                            >
                            The 25,000 pounds (11 t) MTOW British Aerospace 125 first flew on 13 August 1962 as the de Havilland DH.125, powered by two 3,000 pounds-force (13 kN) Armstrong Siddeley. 
                          </Typography>
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