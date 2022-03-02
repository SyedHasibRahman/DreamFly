import React from 'react';
import { Container, Box, Typography } from "@mui/material";
import { useSelector} from "react-redux";
;

const SearchFlights = () => {

    // const [flights, setFlights] = useState([]);
    // console.log(flights);

    const booking = useSelector((state) => state.flightSlice.filterDate);
    const dateAndPass = useSelector((state) => state.flightSlice.dateAndPass);

    const from = booking.map((data) => data.from)
    const to = booking.map((data) => data.to)

    console.log(to );
    console.log(from);

    return (
        <div style={{bgcolor: "#f5f5f5"}}>
            <Container>
            
                <Box sx={{bgcolor: "#5e35b1", p: 5}}>
                    <Box sx={{display: "flex", justifyContent: 'space-between'}}>
                        <Typography sx={{color: "white", fontSize: "20px", fontWeight: 600}}> {from}  {to} </Typography>
                        <Typography sx={{color: "white", fontSize: "20px", fontWeight: 600}}> {dateAndPass.date} </Typography>
                    </Box>
                    {
                        booking.map((data) => {
                        
                        const {from, to, fare, flightName} = data;

                        return(
                            <Box sx={{display: "flex", mt: 3, justifyContent: 'space-between'}}>
                                <Typography sx={{color: "white",}}> {flightName} </Typography>
                                <Typography sx={{color: "white",}}> {from} </Typography>
                                <Typography sx={{color: "white",}}> {to} </Typography>
                                <Typography sx={{color: "white",}}> {fare} </Typography>
                            </Box>
                        )})
                    }
                </Box>
            

            </Container>
            
        </div>
    );
};

export default SearchFlights;

// {/* <Box sx={{display: "flex", mt: 3, justifyContent: 'space-between'}}>
//                     <img src="https://bdtickets.com/images/airlines/NOVOAIR.png" width="150px" alt="" />
//                     <Box>
//                         <Typography sx={{}}> Novo Air </Typography>
//                         <Typography sx={{fontSize: "16px"}}> Flight No </Typography>
//                     </Box>
//                     <Typography sx={{}}> 04:40 PM </Typography>
//                     <Typography sx={{}}> 04:40 PM </Typography>
//                     <Typography sx={{}}> 21,600 </Typography>
//                 </Box> */
//             }