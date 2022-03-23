import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <Container>
            <h2>Manage Product</h2>
            <div className='servicesm'>
                {
                    packages.map(packags => <ManageService
                        key={ packags._id }
                        packags={ packags }
                        setPackages={ setPackages }
                        packages={ packages }

                    ></ManageService>)
                }
            </div>
        </Container>
    );
};

export default ManageServices;