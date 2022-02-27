import React, { useEffect, } from 'react';
import { Container, Box, Typography } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { addFilterData } from '../../../../Redux/Slice/flightSlice';

const SearchFlights = () => {

    const date = useSelector((state) => state.flightSlice.addFilterData);
    console.log(date);

    // const [flights, setFlights] = useState([]);
    // console.log(flights);

    const dispatch = useDispatch()
    console.log(dispatch);
    useEffect(() => {
        dispatch(addFilterData)
      }, [dispatch]);

    return (
        <div style={{bgcolor: "#f5f5f5"}}>
            
            <Container>
                <Box sx={{bgcolor: "#5e35b1", p: 5}}>
                    <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                        <Typography sx={{color: "white", fontSize: "20px", fontWeight: 600}}> Barisal to Dhaka </Typography>
                        <Typography sx={{color: "white", fontSize: "20px", fontWeight: 600}}> Mon, 28 February 22 </Typography>
                    </Box>
                    <Box sx={{display: "flex", mt: 3, justifyContent: 'space-between'}}>
                        <Typography sx={{color: "white",}}> AIRLINES </Typography>
                        <Typography sx={{color: "white",}}> DEPARTURE </Typography>
                        <Typography sx={{color: "white",}}> Arrival </Typography>
                        <Typography sx={{color: "white",}}> FARE </Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", mt: 3, justifyContent: 'space-between'}}>
                    <img src="https://bdtickets.com/images/airlines/NOVOAIR.png" width="150px" alt="" />
                    <Box>
                        <Typography sx={{}}> Novo Air </Typography>
                        <Typography sx={{fontSize: "16px"}}> Flight No </Typography>
                    </Box>
                    <Typography sx={{}}> 04:40 PM </Typography>
                    <Typography sx={{}}> 04:40 PM </Typography>
                    <Typography sx={{}}> 21,600 </Typography>
                </Box>
            </Container>
            
        </div>
    );
};

export default SearchFlights;