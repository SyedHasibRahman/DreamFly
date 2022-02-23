import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import "./PersonalFlight.css";
import { useEffect } from "react";

const PersonalFlight = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
        fetch('./flight.JSON')
            .then(res => res.json())
            .then(data => setFlights(data))
    }, []);

    const from = Array.from(flights.reduce((map, obj) => map.set(obj.from, obj),new Map()).values());

    const to = Array.from(flights.reduce((map, obj) => map.set(obj.to, obj),new Map()).values());

  const handleFrom = e => {
    
    // if(flight.from == "Dhaka"){
    //   return(to)
    // }
  };
  
  // const to = flights.filter(flight => flight.from == 'Dhaka');
  // console.log(to)

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <Box
      className="personal_flight_Container"
      sx={ {
        flexGrow: 1,
        py: 10,
      } }
    >
      <Container
        className="personal_flight"
        spacing={ { xs: 2, md: 3 } }
        style={ {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        } }
      >
        <Box
          component="div"
          sx={ { textAlign: "center", color: "#fff", paddingTop: "50px" } }
        >
          <Typography variant="h6" sx={ {color: "white"} }>DreamFly Book</Typography>
          <Typography variant="h4" sx={ { padding: "20px 0", color: "white" } }>
            Book A Personal Flight
          </Typography>
        </Box>
        <Grid
          container
          spacing={ { xs: 2, md: 3, lg: 3 } }
          className="flight_box"
        >
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box for="cars" className="label">
                From
              </Box>
              <select className="selector">
                {
                  from.map((flight) => {
                    const {from} = flight;
                    return (
                    <option onClick={handleFrom} key={flight._id} value={from}>{from}</option>
                  )
                })}
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box className="label">To</Box>
              <select className="selector">
                {
                  to.map((flight) => {
                    const {to} = flight;
                    return (
                    <option  key={flight._id} value={to}>{to}</option>
                  )
                })}
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box for="cars" className="label">
                Date
              </Box>  
                <input
                type="date"
                required
                size="small"
                className="form-control selector"
                id="exampleDatepicker1"
                                        
              />
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box for="cars" className="label">
                Passenger
              </Box>
              <Box className="selector">
                <Box className="passenger">
                  <span className="int" onClick={ () => decrementCounter() }>
                    <i style={{color: "white"}} className="fas fa-minus"></i>
                  </span>
                  <span style={{color: "white"}} className="number">{ counter }</span>
                  <span className="dec" onClick={ () => incrementCounter() }>
                    <i style={{color: "white"}} className="fas fa-plus"></i>
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box className="personal_flight_btn" component="div">
            <button>
              <span className="arrow_plan">
                <AirplanemodeActiveIcon />
              </span>
              Book Now
            </button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalFlight;
