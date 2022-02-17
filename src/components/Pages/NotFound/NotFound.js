import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container className="page_404">
            <Box className="col-sm-12 ">
                <Box className="four_zero_four_bg">
                    <Typography component="h1" variant="h1">
                        404
                    </Typography>
                </Box>

                <Box className="contant_box_404">
                    <Typography className="h2">
                        Look like you're lost
                    </Typography>

                    <Typography className="h4">the page you are looking for not avaible!</Typography>

                    <a href="/" className="link_404">Go to Home</a>
                </Box>
            </Box>
        </Container>
    );
};

export default NotFound;