import React, { useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import "./PersonalFlight.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addDateAndPass,
  addFilterData,
} from "../../../../Redux/Slice/flightSlice";

import { Link } from "react-router-dom";
import SecondaryButton from "../../../StyledComponent/Buttons/SecondaryButton";


const PersonalFlight = () => {

  const [flights, setFlights] = useState([]);
  const [to, setTo] = useState([]);
  const fromRef = useRef();
  const dateRef = useRef();
  const toRef = useRef();

  useEffect(() => {
    // fetch("https://dashboard.heroku.com/flight")
    fetch("http://localhost:5000/flight")
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, []);

  const handleFrom = () => {
    const e = fromRef.current.value;
    console.log(e);
    // eslint-disable-next-line array-callback-return
    const fillterData = flights.filter((item) => {
      if (item.from === e) {
        return item.to
      }
    });
    const flightTo = fillterData.map((item) => item.to);
    const filterTo = fillterData.filter(
      ({ to }, index) => !flightTo.includes(to, index + 1)
    );
    setTo(filterTo);
    // console.log(fillterData);
  };



  const dispatch = useDispatch();

  const handleSubmit = () => {
    let from = fromRef.current.value;
    let to = toRef.current.value;
    const data = {
      from,
      to,
    };
    if (from && to) {
      axios
        .post("https://agile-lowlands-71900.herokuapp.com/filter", data)
        .then((res) => dispatch(addFilterData(res.data)));
    }
    dispatch(
      addDateAndPass({ date: dateRef.current.value, passanger: counter })
    );
  };

  //remove the duplicate item
  const flightFrom = flights.map((item) => item.from);
  const filterFrom = flights.filter(
    ({ from }, index) => !flightFrom.includes(from, index + 1)
  );

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
        flexGrow: 1
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
          sx={ { textAlign: "center", color: "#fff", paddingTop: "50px", paddingBottom: "40px" } }
        >
          <Typography sx={ { fontWeight: '600', color: "#fff", fontSize: '18px', marginBottom: '10px' } }>
            DreamFly Book
          </Typography>
          <Typography variant="h2" sx={ { color: "#fff", } }>
            Book A Flight
          </Typography>
        </Box>
        <Grid
          container
          spacing={ { xs: 2, md: 3, lg: 3 } }
          className="flight_box"
        >
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box htmlFor="cars" className="label">
                From
              </Box>
              <select
                className="selector"
                ref={ fromRef }
                onChange={ () => handleFrom() }
              >
                <option style={ { color: "black" } } required value="From">From</option>
                { filterFrom.map((flight) => {
                  const { from } = flight;
                  return (
                    <option style={ { color: "black" } } required key={ flight._id } value={ from }>
                      { from }
                    </option>
                  );
                }) }
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box className="label">To</Box>
              <select className="selector" ref={ toRef }>
                <option style={ { color: "black" } } required value="To">To</option>
                { to.map((flight) => {
                  const { to } = flight;
                  return (
                    <option style={ { color: "black" } } required key={ flight._id } value={ to }>
                      { to }
                    </option>
                  );
                }) }
              </select>
            </Box>
          </Grid>
          <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 3 }>
            <Box className="selector_box">
              <Box htmlFor="cars" className="label">
                Date
              </Box>
              <input
                ref={ dateRef }
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
              <Box htmlFor="cars" className="label">
                Passenger
              </Box>
              <Box className="selector">
                <Box className="passenger">
                  <span className="int" onClick={ () => decrementCounter() }>
                    <i style={ { color: "white" } } className="fas fa-minus"></i>
                  </span>
                  <span style={ { color: "white" } } className="number">
                    { counter }
                  </span>
                  <span className="dec" onClick={ () => incrementCounter() }>
                    <i style={ { color: "white" } } className="fas fa-plus"></i>
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box className="personal_flight_btn">
            <Link to="/Services" style={ { textDecoration: "none" } }>
              <SecondaryButton onClick={ handleSubmit }>
                search now
              </SecondaryButton>
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalFlight;
