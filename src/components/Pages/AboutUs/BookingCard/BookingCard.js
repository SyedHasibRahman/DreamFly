import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../StyledComponent/Buttons/PrimaryButton';

const BookingCard = () => {
  return (
    <Box 
      sx={{backgroundColor:"#ede7f6", borderRadius:'5px'}}
      >
      <Box 
        sx={{display:'flex', justifyContent:"space-between", alignItems:'center', borderRadius:'5px', backgroundImage:'url(http://themeim.com/demo/flynext/assets/images/element/element-7.png)', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', padding:'20px 30px'}}
        >
        <Box 
          sx={{fontSize:'24px', fontWeight:'700', color:'#19232d'}}>
          <span style={{marginBottom:'15px', display:'block'}}>
            Call for book an order
          </span>
          <span>8-800-10-500</span>
        </Box>
        <Box>
          <Link to=""
            style={{textDecoration: "none"}}
            >
            <PrimaryButton>
              <i style={{marginRight:'10px', color: "white"}} className="fa-solid fa-plane"></i>
              Book Now
            </PrimaryButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingCard;