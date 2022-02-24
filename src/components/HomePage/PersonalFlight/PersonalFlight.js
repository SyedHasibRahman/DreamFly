import React, { useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import "./PersonalFlight.css";
import { useEffect } from "react";
import axios from "axios";

const PersonalFlight = () => {
  const [flights, setFlights] = useState([]);
  const [to, setTo] = useState([]);
  const fromRef = useRef();
  const dateRef = useRef();
  const toRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/flight")
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, []);

  const handleFrom = () => {
    const e = fromRef.current.value;
    console.log(e);
    const fillterData = flights.filter((item) => {
      if (item.from === e) {
        return item.to;
      }
    });
    const flightTo = fillterData.map((item) => item.to);
    const filterTo = fillterData.filter(
      ({ to }, index) => !flightTo.includes(to, index + 1)
    );
    setTo(filterTo);
    // console.log(fillterData);
  };

  const handleSubmit = () => {
    let from = fromRef.current.value;
    let to = toRef.current.value;
    const data = {
      from,
      to,
    };
    if (from && to) {
      axios
        .post("http://localhost:5000/filter", data)
        .then((res) => console.log(res.data));
    }
  };

  // let newData = [...new Set(flights)];

  // const from = flights.filter((item) => item.from === item.from);
  // console.log(from);
  // const arr = [
  //   { id: 1, name: "one" },
  //   { id: 2, name: "two" },
  //   { id: 1, name: "one" },
  // ];

  const flightFrom = flights.map((item) => item.from);
  const filterFrom = flights.filter(
    ({ from }, index) => !flightFrom.includes(from, index + 1)
  );

  // console.log(filtered);

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <Box
      className="personal_flight_Container"
      sx={{
        flexGrow: 1,
        py: 10,
      }}
    >
      <Container
        className="personal_flight"
        spacing={{ xs: 2, md: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="div"
          sx={{ textAlign: "center", color: "#fff", paddingTop: "50px" }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            DreamFly Book
          </Typography>
          <Typography variant="h4" sx={{ padding: "20px 0", color: "white" }}>
            Book A Personal Flight
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          className="flight_box"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              <Box for="cars" className="label">
                From
              </Box>
              <select
                className="selector"
                ref={fromRef}
                onChange={() => handleFrom()}
              >
                <option value="">From</option>
                {filterFrom.map((flight) => {
                  const { from } = flight;
                  return (
                    <option key={flight._id} value={from}>
                      {from}
                    </option>
                  );
                })}
              </select>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              <Box className="label">To</Box>
              <select className="selector" ref={toRef}>
                <option value="">To</option>
                {to.map((flight) => {
                  const { to } = flight;
                  return (
                    <option key={flight._id} value={to}>
                      {to}
                    </option>
                  );
                })}
              </select>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              <Box for="cars" className="label">
                Date
              </Box>
              <input
                ref={dateRef}
                type="date"
                required
                size="small"
                className="form-control selector"
                id="exampleDatepicker1"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              <Box for="cars" className="label">
                Passenger
              </Box>
              <Box className="selector">
                <Box className="passenger">
                  <span className="int" onClick={() => decrementCounter()}>
                    <i style={{ color: "white" }} className="fas fa-minus"></i>
                  </span>
                  <span style={{ color: "white" }} className="number">
                    {counter}
                  </span>
                  <span className="dec" onClick={() => incrementCounter()}>
                    <i style={{ color: "white" }} className="fas fa-plus"></i>
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box className="personal_flight_btn" component="div">
            <button onClick={handleSubmit}>
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
