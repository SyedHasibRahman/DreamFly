import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import './Book.css';
import { Box } from '@mui/material/node_modules/@mui/system';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const { name, images, person, title, price, _id } = props.book;
    return (
        <Grid item sx={ 12 } sm={ 6 } md={ 4 } lg={ 3 } >
            <div className='book-card'>
                <div className='book-container'>
                    <img src={ images } alt="" />
                    <div>
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
                        <hr />
                        <Button className='btn'><ConnectingAirportsIcon className='icon'></ConnectingAirportsIcon>
                            <Link to={ `/Book/${_id}` }>
                                Book Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

export default Book;