import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterArea = () => {
  return (
    <Box
      sx={{ backgroundImage: 'url(https://themeim.com/demo/flynext/assets/images/bg/bg-2.png)', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <Box sx={{ backgroundColor: 'rgb(25 35 45 / 88%)' }}>
        <Container sx={{ padding: '100px 0' }}>
          <Box>
            <Box>
              <Grid container spacing={{ xs: 8, md: 5 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{ width: '100%', height: '100%', borderRight: '1px dotted #dcbb87' }}
                  >
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                      >
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp duration={4} end={95} /> : 95}
                          </div>
                        )}
                      </VisibilitySensor>
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      Professional Pilots
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{ width: '100%', height: '100%', borderRight: '1px dotted #dcbb87' }}
                  >
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp duration={4} end={68} /> : 68}
                          </div>
                        )}
                      </VisibilitySensor>
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      Jet Airplanes
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{ width: '100%', height: '100%', borderRight: '1px dotted #dcbb87' }}
                  >
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp duration={4} end={290} /> : 290}
                          </div>
                        )}
                      </VisibilitySensor>
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      World Airports
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box>
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <div>
                            {isVisible ? <CountUp duration={4} end={195} /> : 195}
                          </div>
                        )}
                      </VisibilitySensor>
                    </Typography>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: '#FFFFFF', margin: '0', textAlign: 'center' }}
                    >
                      Directions
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CounterArea;