import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = () => {
  return (
    <Box sx={{backgroundColor:"rgba(220, 187, 135, 0.5)", borderRadius:'5px'}}>
      <Box sx={{display:'flex', justifyContent:"space-between", alignItems:'center', borderRadius:'5px', backgroundImage:'url(http://themeim.com/demo/flynext/assets/images/element/element-7.png)', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', padding:'20px 30px'}}>
        <Box sx={{fontSize:'24px', fontWeight:'700', lineHeight:'1.3em', color:'#19232d', fontFamily:'"Playfair Display", sans-serif'}}>
          <span style={{marginBottom:'15px', display:'block'}}>Call for book an order</span>
          <span>8-800-10-500</span>
        </Box>
        <Box>
          <Link to="" style={{backgroundColor:'#dcbb87', border:'1px solid #dcbb87', color:'#19232d', padding:'12px 25px', fontSize:'16px', fontWeight:'800', textAlign:'center', transition:'all ease 0.5s', textDecoration:'none', cursor:'pointer', fontFamily:'"Mulish", sans-serif', lineHeight:'1.5em', borderRadius:'9999px'}}>
          <i style={{marginRight:'10px'}} class="fa-solid fa-plane"></i>
          <span>Book Now</span>
          </Link>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default BookingCard;