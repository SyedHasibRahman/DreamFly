import { Box } from '@mui/system';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Grid, Typography } from '@mui/material';
import './OurHistory.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const OurHistory = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,

    });
  }, []);
  return (
    <Box className="paddingY90">
      <Container>
        <Box>
          <Typography
            gutterBottom
            sx={{ color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px', textAlign: 'center' }}
          >
            Our History
          </Typography>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center' }}
          >
            What Make Us Special
          </Typography>
          <Box sx={{ marginTop: '50px', display: { xs: 'none', sm: 'block'} }}>
            <React.Fragment>
              <Timeline position="alternate" style={{ paddingLeft: 0, paddingRight: 0 }}>
                
                {/* timeline component 1 */}
                <TimelineItem sx={{mb: 5}}>
                  <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-1.png" alt=""
                      data-aos='slide-right'
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{ mx: { sm: "20px", md: "35px"}, mt: 15, mb: -20, }} >
                    <TimelineDot
                      variant="outlined"
                      sx={{ my: .5, }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                      <Box
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800s"
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: '#5e35b1' }}
                        >
                          2012
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ my: 1.5 }}
                        >
                          The First Private Jet
                        </Typography>
                        <Typography
                          sx={{ textAlign: 'left' }}
                        >
                          The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust.
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

                {/* timeline component 2 */}
                <TimelineItem sx={{mb: 5}}>
                  <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-2.png" alt=""
                      data-aos='slide-left'
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{  mx: { sm: "20px", md: "35px"}, mt: 15, mb: -20, }} >
                    <TimelineDot
                      variant="outlined"
                      sx={{ my: .5, }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                      <Box
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800s"
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: '#5e35b1' }}
                        >
                          2016
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ my: 1.5 }}
                        >
                          The Gulfstream Era
                        </Typography>
                        <Typography
                          sx={{ textAlign: 'right' }}
                        >
                          The Lockheed JetStar, designed to meet USAF UCX requirements and seating ten passengers and two crew, first flew on 4 September 1957. A total of 204 aircraft (20.2 t)
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

                {/* timeline component 3 */}
                <TimelineItem sx={{mb: 5}}>
                  <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0}}
                  >
                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-3.png" alt=""
                      data-aos='slide-right'
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{  mx: { sm: "20px", md: "35px"}, mt: 15, mb: -20, }} >
                    <TimelineDot
                      variant="outlined"
                      sx={{ my: .5, }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{ paddingLeft: 0, paddingRight: 0}}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                      <Box
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800s"
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: '#5e35b1' }}
                        >
                          2018
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ my: 1.5 }}
                        >
                          The Gulfstream Era
                        </Typography>
                        <Typography
                          sx={{ textAlign: 'left' }}
                        >
                          The smaller, 17,760 pounds (8.06 t) MTOW North American Sabreliner, tailored to the USAF UTX requirement, first flew on 16 September 1958. Powered by two Pratt & Whitney.
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

                {/* timeline component 4 */}
                <TimelineItem>
                  <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-4.png" alt=""
                      data-aos='slide-left'
                    />
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{  mx: { sm: "20px", md: "35px"}, mt: 15, bgcolor: "body" }} >
                    <TimelineDot
                      variant="outlined"
                      sx={{ my: .5, }}
                    />
                  </TimelineSeparator>
                  <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                      <Box
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800s"
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: '#5e35b1' }}
                        >
                          2022
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ my: 1.5 }}
                        >
                          Beyond Earth
                        </Typography>
                        <Typography
                          sx={{ textAlign: 'right' }}
                        >
                          The 25,000 pounds (11 t) MTOW British Aerospace 125 first flew on 13 August 1962 as the de Havilland DH.125, powered by two 3,000 pounds-force (13 kN) Armstrong Siddeley.
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>

              </Timeline>
            </React.Fragment>
          </Box>

          {/* Only show sm device */}
          <Box sx={{ marginTop: '50px', display: { xs: 'block', sm: 'none'} }}>
            <Grid container spacing={6}>

              {/* timeline component 1 */}
              <Grid item>
                <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                  <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-1.png" alt=""
                    // data-aos='slide-right'
                  />
                </TimelineOppositeContent>
                <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box
                      // data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="800s"
                      >
                      <Typography
                        variant="h2"
                        sx={{ color: '#5e35b1' }}
                      >
                        2012
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ my: 1.5 }}
                      >
                        The First Private Jet
                      </Typography>
                      <Typography>
                        The Morane-Saulnier MS.760 Paris had a gross weight of 7,650 pounds (3.47 t), initially powered by two Turboméca Marboré turbojets of 880 pounds-force (3.9 kN) thrust.
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </Grid>

              {/* timeline component 2 */}
              <Grid item>
                <TimelineOppositeContent
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                  <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-2.png" alt=""
                    // data-aos='slide-right'
                  />
                </TimelineOppositeContent>
                <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box
                      // data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="800s"
                    >
                      <Typography
                        variant="h2"
                        sx={{ color: '#5e35b1' }}
                      >
                        2016
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ my: 1.5 }}
                      >
                        The Gulfstream Era
                      </Typography>
                      <Typography>
                        The Lockheed JetStar, designed to meet USAF UCX requirements and seating ten passengers and two crew, first flew on 4 September 1957. A total of 204 aircraft (20.2 t)
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </Grid>

              {/* timeline component 3 */}
              <Grid item>
                <TimelineOppositeContent
                  style={{ paddingLeft: 0, paddingRight: 0}}
                  >
                  <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-3.png" alt=""
                    // data-aos='slide-right'
                  />
                </TimelineOppositeContent>
                <TimelineContent style={{ paddingLeft: 0, paddingRight: 0}}>
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box
                      // data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="800s"
                      >
                      <Typography
                        variant="h2"
                        sx={{ color: '#5e35b1' }}
                      >
                          2018
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ my: 1.5 }}
                      >
                        The Gulfstream Era
                      </Typography>
                      <Typography>
                        The smaller, 17,760 pounds (8.06 t) MTOW North American Sabreliner, tailored to the USAF UTX requirement, first flew on 16 September 1958. Powered by two Pratt & Whitney.
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </Grid>
              
              {/* timeline component 4 */}
              <Grid item>
                <TimelineOppositeContent
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                  <img style={{ width: '100%', height: '100%', objectFit: 'fill' }} src="https://themeim.com/demo/flynext/assets/images/history/history-4.png" alt=""
                    // data-aos='slide-left'
                  />
                </TimelineOppositeContent>
                <TimelineContent style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                      <Box
                        // data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="800s"
                      >
                        <Typography
                          variant="h2"
                          sx={{ color: '#5e35b1'}}
                        >
                          2022
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ my: 1.5 }}
                        >
                          Beyond Earth
                        </Typography>
                        <Typography>
                          The 25,000 pounds (11 t) MTOW British Aerospace 125 first flew on 13 August 1962 as the de Havilland DH.125, powered by two 3,000 pounds-force (13 kN) Armstrong Siddeley.
                        </Typography>
                      </Box>
                    </Box>
                  </TimelineContent>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurHistory;