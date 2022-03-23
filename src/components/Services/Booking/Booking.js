import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import SearchFlights from "../../HomePage/PersonalFlight/SearchFlights/SearchFlights";
import Book from "../Book/Book";
import './Booking.css';


function Booking() {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then((data) => setBooking(data))
  }, [])

  console.log(booking);
  return (
    <div className="booking">
      <SearchFlights />

      <Box sx={ { bgcolor: "#fafafa" } }>
        <Container className="paddingY90">
          <Typography
            sx={ { color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px' } }
          >
            Luxury Charters
          </Typography>
          <Typography
            variant="h2"
            sx={ { marginBottom: '50px' } }
          >
            Luxury Deals For You
          </Typography>
          <Grid container spacing={ { xs: 2, md: 3 } }>
            {
              booking.map(book => <Book key={ book._id } book={ book }></Book>)
            }
          </Grid>
        </Container>
      </Box>

    </div>
  );
}

export default Booking;