import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import heroImage from "../assets/hero-image-hsv-adjusted.png";
import heroImage from "../assets/hero-image.svg";
import { BiRightArrowAlt } from "react-icons/bi";

function HeroSection() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ height: "70vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h1"
              fontWeight={500}
              sx={{ color: "text.main" }}
            >
              Accelerate your
              {/* Business solutions */}
            </Typography>
            <Typography
              variant="h1"
              fontWeight={500}
              sx={{ color: "text.main" }}
            >
              growth with our
              {/* that help you reach */}
            </Typography>
            <Typography variant="h1" fontWeight={500} color="secondary">
              {/* your full potential */}
              expert solutions
            </Typography>
            <Typography variant="caption" component="p" sx={{}}>
              We provide tailored solutions to help you achieve your business
              goals.
            </Typography>
            {/* <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ mx: 2 }}
              >
                Get Started
              </Button>
              <Button endIcon={<BiRightArrowAlt />} color="text" size="medium">
                Explore More
              </Button>
            </Box> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ mr: 2 }}>
            <CardMedia component="img" sx={{ width: "100%" }} src={heroImage} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;
