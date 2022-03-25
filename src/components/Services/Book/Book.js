import { Grid, Typography } from '@mui/material';
import React from 'react';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import './Book.css';
import { Box } from '@mui/material/node_modules/@mui/system';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../StyledComponent/Buttons/SecondaryButton';

 
const Book = (props) => {

    const { name, images, person, title, price, _id } = props.book;

    return (
        <Grid  item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } >
            <Box className='book-card'>
                <Box className="book-img">
                    <img  src={ images } alt="" />   
                </Box>
                <Box>
                    <Box sx={ { px: 2, pt: 2 } }>
                        <Typography variant="h3" sx={ {} }>
                            { name }
                        </Typography>
                        <Typography className='title' sx={ { my: 1 } }>
                            { title }
                        </Typography>
                        <div className='book-price'>
                            <p>{ person } </p>
                            <Typography sx={ {} }>
                                Price: ${ price }/hr
                            </Typography>
                        </div>
                    </Box>
                    <hr style={{margin: "10px 0"}}/>
                    <Box sx={{display: "flex",justifyContent: "center", mb: 2}}>
                    <Link className="link-td-none"  to={ `/Book/${_id}` }>
                        <SecondaryButton sx={{mt: 0,}}>
                            <ConnectingAirportsIcon className='icon'>
                            </ConnectingAirportsIcon>
                            Book Now
                        </SecondaryButton>
                    </Link>
                    </Box>
                </Box>
            </Box>           
        </Grid>
    );
};

export default Book;