import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CounterArea = () => {
  return (
    <Box sx={{backgroundImage:'url(https://themeim.com/demo/flynext/assets/images/bg/bg-2.png)', backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
      <Box sx={{backgroundColor:'rgb(25 35 45 / 88%)'}}>
      <Container sx={{padding:'100px 0'}}>
        <Box>
          <Box>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <Box sx={{width:'100%', height:'100%', borderRight:'1px dotted #dcbb87'}}>
              <Typography variant="h2" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'40px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> 95 </Typography>
              <Typography variant="h4" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'20px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> Professional Pilots </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{width:'100%', height:'100%', borderRight:'1px dotted #dcbb87'}}>
              <Typography variant="h2" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'40px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> 95 </Typography>
              <Typography variant="h4" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'20px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> Professional Pilots </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{width:'100%', height:'100%', borderRight:'1px dotted #dcbb87'}}>
              <Typography variant="h2" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'40px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> 95 </Typography>
              <Typography variant="h4" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'20px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> Professional Pilots </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{width:'100%', height:'100%'}}>
              <Typography variant="h2" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'40px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> 95 </Typography>
              <Typography variant="h4" gutterBottom component="div" sx={{fontFamily:'"Mulish", sans-serif', fontSize:'20px', fontWeight:'500', lineHeight:'1.5em', color:'#FFFFFF', margin:'0', textAlign:'center'}}> Professional Pilots </Typography>
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