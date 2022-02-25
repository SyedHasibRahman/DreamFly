import React from 'react';
import { Container, Box, Typography } from "@mui/material";
import PersonalFlight from '../PersonalFlight/PersonalFlight';

const SearchFlights = () => {
    return (
        <div>
            <PersonalFlight/>
            <Container>
                <Box sx={{bgcolor: "#5e35b1"}}>
                    <Box>
                        <Typography> Barisal to Dhaka </Typography>
                        <Typography> Mon, 28 February 22 </Typography>
                    </Box>
                    <Box>
                        <Typography> AIRLINES </Typography>
                        <Typography> DEPARTURE </Typography>
                        <Typography> arrival </Typography>
                        <Typography> FARE </Typography>
                    </Box>
                </Box>
                <Box>
                    <img src="https://bdtickets.com/images/airlines/NOVOAIR.png" width="150px" alt="" />

                </Box>
            </Container>
        </div>
    );
};

export default SearchFlights;