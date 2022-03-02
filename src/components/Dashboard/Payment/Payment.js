
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements, } from '@stripe/react-stripe-js'
import { Container } from '@mui/material';


const stripePromise = loadStripe('pk_test_51JvyS7IHLAYanJsYOO8cV7IrZ9fF8gCyRkhISzmsfbd6GdJngOeIz8buTZ0bs6WDjFJcOQQE0UcL9zGxOBX0m0aF00oRGDEJ0O')

const Payment = () => {
    const { bookedId } = useParams();
    const [booked, setBooked] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${bookedId}`)
            .then(res => res.json())
            .then(data => setBooked(data));

    }, [bookedId]);
    return (
        <div style={ {
            padding: '25px',
            dilsplay: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        } }>
            <h2>Please Pay For Confirm your Booking : { booked.name }</h2>
            <h2>Total Amount : ${ booked.price }</h2>
            <Container
                sx={ { width: '50%' } }
            >
                { booked?.price && <Elements stripe={ stripePromise }>
                    <CheckoutForm
                        booked={ booked }
                    />
                </Elements> }
            </Container>
        </div>
    );
};

export default Payment;