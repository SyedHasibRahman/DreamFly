import { Button } from '@mui/material';
import React from 'react';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import './Book.css';

const Book = (props) => {
    const { name, img, seat, title, price } = props.book;
    return (
        <div className='book-card'>
            <div className='book-container'>
                <img src={ img } alt="" />
                <div>
                    <h2 className='name'> { name } </h2>
                    <h5 className='title'>{ title }</h5>
                    <div className='book-price'>
                        <p>{ seat } </p>
                        <p className='detail'>Price: ${ price }/hr</p>

                    </div>
                    <hr />
                    <Button className='btn'><ConnectingAirportsIcon className='icon'></ConnectingAirportsIcon> Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Book;