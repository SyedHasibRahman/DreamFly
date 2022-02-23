import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [success, setSuccess] = useState();

    useEffect(() => {
        fetch(`https://intense-plateau-36885.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);

    const removeOrderHandler = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed === true) {
            const url = `https://intense-plateau-36885.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('deleted successfully');
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 5000);
                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    };
    return (
        <Container>
            <div className='row  d-flex justify-content-center mt-2 text-white'>
                <div className='col-12 col-md-10 col-lg-9 '>
                    <h3 className='my-3 heading-main'>All Orders</h3>
                    {success && (
                        <Alert variant='success' className='my-4 py-2'>
                            Deleted successfully
                        </Alert>
                    )}
                    {orders.length === 0 ? (
                        <div className='box-shadow p-5 bg-white'>You have no order</div>
                    ) : (
                        orders.map((order, index) => (
                            <ManageOrder
                                key={order._id}
                                order={order}
                                quantity={index}
                                removeOrderHandler={removeOrderHandler}
                            ></ManageOrder>
                        ))
                    )}
                </div>
            </div>
        </Container>
    );
};

export default ManageOrders;