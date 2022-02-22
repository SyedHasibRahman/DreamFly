import * as React from "react";
import "./OurCoursesDetails.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Container,
  Input,
  InputAdornment,
  Link,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { AccountCircle } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import StarIcon from "@mui/icons-material/Star";
import { NavLink } from "react-router-dom";
import Navigation from "../../../Shared/Navigation/Navigation";
import Footer from "../../../Shared/Footer/Footer";

function createData(Qualification, Length, Code) {
  return { Qualification, Length, Code };
}

const rows = [
  createData("Bachelor of Aviation (Hons)", "9 months full time", "ba1x"),
  createData("Bachelor of Aviation (BSC)", "1 years full time", "ba2x"),
];

const OurCoursesDetails = () => {
  return (
    <Box>
      <Navigation />
      <Box sx={{ flexGrow: 1, py: 10 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", padding: "100px 0px 10px 0px" }}
          >
            Course Single
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "100px",
            }}
          >
            <Typography variant="h6" className="our_course_link">
              <NavLink to={"/"}>Home</NavLink>
            </Typography>
            <Typography variant="h6" sx={{ paddingLeft: "10px" }}>
              / Course Single
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                p: 2,
                width: 250,
                height: 90,
                background: "#FFFFFF",
                boxShadow: "0 5px 25px rgb(0 0 0 / 10%)",
                borderRadius: "5px",
              },
            }}
          >
            <Box component="div">
              <Typography
                variant="h6"
                sx={{ paddingBottom: "5px", fontWeight: 600 }}
              >
                Length
              </Typography>
              <Typography>1 Year</Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ paddingBottom: "5px", fontWeight: 600 }}
              >
                Start From
              </Typography>
              <Typography>Thusday,Nov4,2021</Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ paddingBottom: "5px", fontWeight: 600 }}
              >
                Level
              </Typography>
              <Typography>Basic</Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ paddingBottom: "5px", fontWeight: 600 }}
              >
                Fees/Sem
              </Typography>
              <Typography>$500</Typography>
            </Box>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={12} lg={8}>
              {/* About Commercial Pilot License Course start here */}
              <Box sx={{ margin: "40px 0" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "600", paddingBottom: "20px" }}
                >
                  About Commercial Pilot License Course
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "font-family: Arial, Helvetica, sans-serif",
                    color: "#3d3d3d",
                    lineHeight: "26px",
                  }}
                >
                  Our technology consistently delivers the best pricing for
                  charters – and the unique ability to buy individual seats.
                  Search the world with ease and transparency.As the only
                  tech-forward private aviation company, XO is able to bring you
                  innovative ways to buy and fly. Charter an entire jet, or
                  offer the seats you don’t need through our app. Either way,
                  there’s no longer a need for full or even fractional jet
                  ownership – or rigid, non-refundable jet cards.
                </Typography>
              </Box>
              {/* About Commercial Pilot License Course End Here */}
              {/* Career opportunities Start Here */}
              <Box>
                <Typography variant="h4" sx={{ fontSize: "26px" }}>
                  Career opportunities
                </Typography>
                <Box className="opportunities_text">
                  <Box sx={{ display: "flex" }}>
                    <span>
                      <CheckIcon />
                    </span>
                    <Typography variant="h6">
                      This package trip requires a minimum of 2 people.
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <span>
                      <CheckIcon />
                    </span>
                    <Typography variant="h6">
                      Quality expedition tents & warm sleeping bags all included
                      in the price of the trip
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <span>
                      <CheckIcon />
                    </span>
                    <Typography variant="h6">
                      Can be customized upon request, to meet travelers needs
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <span>
                      <CheckIcon />
                    </span>
                    <Typography variant="h6">
                      This package trip Duration 2 hours+
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <span>
                      <CheckIcon />
                    </span>
                    <Typography variant="h6">
                      Accommodations on Quadra Island the night before you
                      launch at one of Quadra’s beautiful resorts
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Our technology consistently delivers the best pricing for
                      charters – and the unique ability to buy individual seats.
                      Search the world with ease and transparency
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Career opportunities End Here */}
              {/* Study Options start here */}
              <Box>
                <Typography variant="h5" sx={{ padding: "20px 0" }}>
                  Study Options
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            borderRight: 2,
                            borderColor: "rgba(224, 224, 224, 1)",
                            background: "#DCBB87",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#222",
                          }}
                        >
                          Qualification
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: 2,
                            borderColor: "rgba(224, 224, 224, 1)",
                            background: "#DCBB87",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#222",
                          }}
                        >
                          Length
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: 2,
                            borderColor: "rgba(224, 224, 224, 1)",
                            background: "#DCBB87",
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#222",
                          }}
                        >
                          Code
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.Qualification}
                          sx={{
                            "&:last-child td, &:last-child th": {
                              borderRight: 2,
                              borderColor: "rgba(224, 224, 224, 1)",
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              borderRight: 2,
                              borderColor: "rgba(224, 224, 224, 1)",
                              fontSize: "17px",
                              fontWeight: 700,
                              color: "#222",
                            }}
                          >
                            {row.Qualification}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              borderRight: 2,
                              borderColor: "rgba(224, 224, 224, 1)",
                              fontSize: "17px",
                              fontWeight: 700,
                              color: "#222",
                            }}
                          >
                            {row.Length}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              borderRight: 2,
                              borderColor: "rgba(224, 224, 224, 1)",
                              fontSize: "17px",
                              fontWeight: 700,
                              color: "#222",
                            }}
                          >
                            {row.Code}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              {/* Study Options end here */}
              {/* Professional start end here */}
              <Box>
                <Typography variant="h5" sx={{ paddingTop: "30px" }}>
                  Professional experience
                </Typography>
                <Typography
                  sx={{
                    paddingTop: "20px",
                    lineHeight: "27px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Our technology consistently delivers the best pricing for
                  charters – and the unique ability to buy individual seats.
                  Search the world with ease and transparency.As the only
                  tech-forward private aviation company, XO is able to bring you
                  innovative ways to buy and fly. Charter an entire jet, or
                  offer the seats you don’t need through our app. Either way,
                  there’s no longer a need for full or even fractional jet
                  ownership – or rigid, non-refundable jet cards.
                </Typography>
              </Box>
              {/* Professional experience end here */}
              {/* Download full course Module start here */}
              <Box className="courses_download" sx={{ margin: "20px 0" }}>
                <Typography variant="h4" className="courses_download_title">
                  <span className="image_search">
                    <ImageSearchIcon />
                  </span>
                  Download full course Module
                </Typography>
                <button>
                  Download
                  <span className="arrow_right">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </Box>
              {/* Download full course Module end here */}
              {/* Reviews start here */}
              <Box className="review">
                <Typography variant="h5">Reviews</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <Typography>Average Rating</Typography>
                  <Typography>Write a Review</Typography>
                </Box>
                {/* <Box>
                <Box>
                  <Typography variant="h2">5</Typography>
                  <Typography>6 rating</Typography>
                  <Typography>6 rating</Typography>
                </Box>
                <Box>
                  <Skeleton animation={false} />
                </Box>
              </Box> */}
                <Box sx={{ py: 4 }}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={7}
                    placeholder="Write Reply"
                    style={{ width: "100%", border: "1px solid #dcbb87" }}
                  />
                  <button>
                    Comment Now
                    <span
                      className="arrow_right"
                      style={{ paddingLeft: "5px" }}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </Box>
                {/* user review */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  spacing={{ xs: 2, md: 3 }}
                >
                  <Box
                    className="user_review"
                    item
                    xs={12}
                    sm={6}
                    md={12}
                    lg={2}
                  >
                    <Box>
                      <img
                        src="https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </Box>
                  </Box>
                  <Box item xs={12} sm={6} md={12} lg={6}>
                    <Box className="review_main">
                      <Box
                        sx={{ display: "flex" }}
                        className="review_main_text"
                      >
                        <Typography className="review_name">
                          James Rorrigo
                        </Typography>
                        <Typography className="review_icon">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                        </Typography>
                      </Box>
                      <Box className="review_texts">
                        <Typography>
                          Our technology consistently delivers the best pricing
                          for charters – and the unique ability to buy
                          individual seats. Search the world with ease.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Reviews end here */}
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={4}>
              {/* booking start here */}
              <Box
                className="formBook"
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: "100%",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Box className="main_form">
                  <Typography
                    variant="h6"
                    sx={{
                      marginLeft: "-168px",
                      paddingTop: "15px",
                      color: "#fff",
                    }}
                  >
                    Book This Tour
                  </Typography>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment
                        position="start"
                        style={{ color: "#fff" }}
                      >
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                  <br />
                  <button>
                    <span className="arrow_details">
                      <AirplanemodeActiveIcon />
                    </span>
                    Book Now
                  </button>
                </Box>
              </Box>
              {/* booking start here */}
              {/* more courses start*/}
              <Box className="courses_main" sx={{ marginTop: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    margin: "20px",
                    paddingTop: "10px",
                    fontWeight: "600",
                  }}
                >
                  More Courses
                </Typography>
                {/* more courses start*/}
                <Box className="more_courses">
                  <img
                    src="https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <Box sx={{ marginLeft: "25px" }}>
                    <Typography>Aug 23,2021</Typography>
                    <Typography sx={{ fontWeight: 600 }}>
                      Private Pilot License (PPL)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* more courses end*/}
              {/* Instructor start*/}
              <Box className="courses_main" sx={{ marginTop: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    margin: "20px",
                    paddingTop: "10px",
                    fontWeight: "600",
                  }}
                >
                  Course Instructor
                </Typography>
                <Box className="more_courses" sx={{ mr: 5 }}>
                  <img
                    src="https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <Box sx={{ marginLeft: "25px" }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Captain Alex Hundy
                    </Typography>
                    <Typography>Training Captain</Typography>
                    <Typography>5.0 Instruction rating</Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    textAlign: "justify",
                    margin: "20px",
                    marginBottom: 0,
                  }}
                >
                  Our technology consistently delivers the best pricing for
                  charters – and the unique ability to buy individual seats.
                  Search the world with ease and transparency's the only
                  tech-forward private aviation company.
                </Typography>
                <Box sx={{ marginLeft: "20px", pt: 3 }}>
                  <Link href="#" className="courses-icon">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#" className="courses-icon">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#" className="courses-icon">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link href="#" className="courses-icon">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </Box>
              </Box>
              {/* Instructor start*/}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default OurCoursesDetails;
