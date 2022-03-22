import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomizePackage from '../CustomizePackage/CustomizePackage';
import './CustomizePackages.css'

const CustomizePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourPackages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <Container>
            <h2>Manage Product</h2>
            <div className='servicesm'>
                {
                    packages.map(packags => <CustomizePackage
                        key={ packags._id }
                        packags={ packags }
                        setPackages={ setPackages }
                        packages={ packages }

                    ></CustomizePackage>)
                }
            </div>
        </Container>
    );
};

export default CustomizePackages;