import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";

import SearchFlights from "../../HomePage/PersonalFlight/SearchFlights/SearchFlights";
import Book from "../Book/Book";
import './Booking.css';


function Booking() {
    const [booking, setBooking] = useState([]);
    useEffect( ()=> {
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then((data) => setBooking(data))
    }, [])
   
   
    return (
      <div className="booking">
      <SearchFlights/>
            <div>
            <Container>
            
                <h5>Luxury Charters</h5>
            <h1>Luxury Deals For You</h1>
          <div className="map">
          {
               booking.map(book => <Book book={book}></Book>)
           }
          </div>
          </Container>
        </div>
      </div>
    );
}

export default Booking;