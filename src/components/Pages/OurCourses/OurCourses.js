import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Navigation from "../../../components/Shared/Navigation/Navigation";
import "./OurCourses.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Footer from "../../Shared/Footer/Footer";
import SecondaryButton from "../../StyledComponent/Buttons/SecondaryButton";
import { Link } from "react-router-dom";

const OurCourses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then((data) => setData(data))
  }, [])
  return (
    <Box>
      <Navigation />
      <Container>
        <Box className="paddingY90">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              gutterBottom
              sx={{ color: '#5e35b1', fontWeight: '700', fontSize: '20px', marginBottom: '10px', textAlign: 'center' }}
            >
              Choose Course
            </Typography>
            <Typography
              variant="h2"
              sx={{ textAlign: 'center' }}
            >
              Find The Right Course For You
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            {data.map((item, _id) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "10px",
                    position: "relative",
                  }}
                >
                  <CardActionArea>
                    <Box className="courses_img">
                      <CardMedia
                        component="img"
                        image={item?.images}
                        alt="green iguana"
                      />
                      <Typography className="courses_price">
                        ${item?.price}
                      </Typography>
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h3"
                      >
                        {item?.title}
                      </Typography>
                      <Box
                        sx={{
                          color: "#111",
                          fontWeight: 500,
                          py: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="clock">
                          <AccessTimeIcon />
                        </span>
                        <Typography
                          sx={{ paddingLeft: "8px", fontWeight: 700 }}
                        >
                          {item?.hours}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#111", fontWeight: 500 }}>
                        {item?.dec}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ pb: 2 }}>
                    <Link 
                      style={{textDecoration: "none", textAlign: "center", cursor: "pointer" }}
                      to={`/Courses/${item._id}`}
                      >
                      <SecondaryButton size="small">
                          Enroll Now &nbsp;
                          <i className="fas fa-arrow-right"></i>
                      </SecondaryButton>
                    </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default OurCourses;
