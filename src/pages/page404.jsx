import React, { useRef } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Toolbar,
} from "@mui/material";
import heroImage from "../assets/hero-image.svg";
import { CgUnavailable } from "react-icons/cg";
import maintenance from "../assets/under-maintenance.png";
export default function PageUnderMaintenance() {
  const servicesRef = useRef();
  const homeRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <TopNav />
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent={"center"} sx={{ my: 4 }}>
          <Grid item xs={12}>
            <Typography variant={"h1"} fontWeight={500} align="center">
              PAGE 404
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: "30%", margin: "0 auto" }}
              src={maintenance}
            />
            <Typography
              variant={"h4"}
              // align={"justify"}
              textAlign={"center"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              Uh Oh.... This page is under maintenance...
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
