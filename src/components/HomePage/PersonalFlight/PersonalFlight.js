import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import "./PersonalFlight.css";

const PersonalFlight = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <Box
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
          <Typography variant="h6">Flynext Book</Typography>
          <Typography variant="h4" sx={ { padding: "20px 0" } }>
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
              <select name="cars" id="cars" className="selector">
                <option value="dhaka">Dhaka</option>
                <option value="london">London</option>
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box className="label">To</Box>
              <select name="cars" id="cars" className="selector">
                <option value="london">London</option>
                <option value="dhaka">Dhaka</option>
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box for="cars" className="label">
                Date
              </Box>
              <select name="cars" id="cars" className="selector">
                <option value="2/10/2022">2/10/2022</option>
                <option value="2/10/2022">2/29/2022</option>
              </select>
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
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className="number">{ counter }</span>
                  <span className="dec" onClick={ () => incrementCounter() }>
                    <i className="fas fa-plus"></i>
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
