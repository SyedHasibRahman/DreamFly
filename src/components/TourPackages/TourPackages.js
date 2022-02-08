import Slider from "react-slick";
import { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import package1 from "../../img/package-9.png";
import package2 from "../../img/package-10.png";
import package3 from "../../img/package-11.png";
import "./TourPackages.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const TourPackages = () => {
  const sliderRef = useRef(null);
  const data = [
    {
      id: 1,
      title: "Discover Island the Goods",
      date: "Sunday, Sep 3, 2021",
      person: "4 Adults",
      images: package1,
      price: "110.00",
    },
    {
      id: 2,
      title: "City of the Goods",
      date: "Friday, Dec 7, 2021",
      person: "3 Adults",
      images: package2,
      price: "150.00",
    },
    {
      id: 3,
      title: "Island of the Goods",
      date: "Thursday, Nov 4, 2021",
      person: "2 Adults",
      images: package3,
      price: "400.00",
    },
    {
      id: 4,
      title: "Island of the Goods",
      date: "Thursday, Nov 4, 2021",
      person: "2 Adults",
      images: package3,
      price: "130.00",
    },
  ];
  const settings = {
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className="tour_packages">
      <Container>
        <Box style={{ padding: "40px 0px" }}>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
              <span style={{ color: "#dcbb87" }}>Flynext</span> Package
            </Typography>
            <Typography
              variant="h3"
              sx={{ py: 3, fontWeight: 600, fontSize: "2.5rem", color: "#fff" }}
            >
              Flynext Tour Packages
            </Typography>
          </Box>
          <Slider
            {...settings}
            ref={sliderRef}
            slidesToShow={3}
            slidesToScroll={1}
            customPaging={(i) => (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "-10px",
                  opacity: 0,
                }}
              >
                {i}
              </div>
            )}
          >
            {data.map((item) => (
              <Box style={{}} key={item.id}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    margin: "10px",
                    position: "relative",
                  }}
                >
                  <CardActionArea>
                    <Box className="tour_img">
                      <CardMedia
                        component="img"
                        image={item?.images}
                        alt="green iguana"
                      />
                      <Typography className="tour_price">
                        ${item?.price}
                      </Typography>
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: 600, fontSize: "1.4rem" }}
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        sx={{ color: "#111", fontWeight: 500, py: 1 }}
                      >
                        Date: {item?.date}
                      </Typography>
                      <Typography sx={{ color: "#111", fontWeight: 500 }}>
                        Person: {item?.person}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <span className="airplane">
                          <AirplanemodeActiveIcon />
                        </span>
                        <Button
                          size="small"
                          sx={{ color: "#111", fontWeight: "700" }}
                        >
                          Book Now
                        </Button>
                      </Box>
                      <span className="video_icon">
                        <VideoCameraBackIcon />
                      </span>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              className="arrow_buttons left"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ArrowBackIosNewIcon />
            </Box>
            <Box
              className="arrow_buttons"
              onClick={() => sliderRef.current.slickNext()}
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TourPackages;
