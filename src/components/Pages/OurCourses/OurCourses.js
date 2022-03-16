import * as React from "react";
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

const OurCourses = () => {
  const data = [
    {
      id: 1,
      title: "Private Pilot License (PPL)",
      hours: "45 Hours",
      dec: "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on",
      images:
        "https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "399",
    },
    {
      id: 2,
      title: "Commercial Pilot License",
      hours: "35 Hours",
      dec: "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s",
      images:
        "https://images.unsplash.com/photo-1529521914207-a330038e35a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "299",
    },
    {
      id: 3,
      title: "Multi-Engine IFR Rating",
      hours: "40 Hours",
      dec: "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats.",
      images:
        "https://images.unsplash.com/photo-1596899223071-723a26d67f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "499",
    },
    {
      id: 4,
      title: "Private Pilot License (PPL)",
      hours: "30 Hours",
      dec: "Search the world with ease and transparency.As the only tech-forward private aviation company",
      images:
        "https://images.unsplash.com/photo-1581300907482-9ab70b31b69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "199",
    },
    {
      id: 5,
      title: "Commercial Pilot License",
      hours: "25 Hours",
      dec: "Charter an entire jet, or offer the seats you don’t need through our app a need for full or even fractional jet ownership",
      images:
        "https://images.unsplash.com/photo-1610081206051-a73bc07abf23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "599",
    },
    {
      id: 6,
      title: "Multi-Engine IFR Rating",
      hours: "20 Hours",
      dec: "XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers",
      images:
        "https://images.unsplash.com/photo-1509541206217-cde45c41aa6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBsYW5lJTIwY29ja3BpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "699",
    },
  ];
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
            {data.map((item) => (
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
                      <SecondaryButton>
                        Enroll Now
                        <span className="course_arrow">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </SecondaryButton>
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
