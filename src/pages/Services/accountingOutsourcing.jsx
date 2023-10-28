import React, { useRef } from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";
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
import heroImage from "../../assets/hero-image.svg";
import { BiRightArrowAlt } from "react-icons/bi";
export default function AccountingOutsourcing() {
  const servicesRef = useRef();
  const homeRef = useRef();
  const contactRef = useRef();
  const whyHireUpPoints = [
    {
      title: "Customized for every business need",
      subtitle: "Service tailor-made for the specific need of your business.",
      caption: "Focus on Core",
      value: 36,
      progress: 88,
      color: "primary",
    },
    {
      title: "Competitive Pricing",
      subtitle: "Competitive pricing in comparison to all other alternatives.",
      caption: "Reduce Cost",
      value: 36,
      progress: 88,
      color: "secondary",
    },
    {
      title: "Experienced Professional",
      subtitle: "Highly qualified and experienced accountant at your service.",
      caption: "Improve Quality",
      value: 13,
      progress: 36,
      color: "accent",
    },
    {
      title: "Market Advantage",
      subtitle:
        "Bring scalability to your business providing a competitive advantage.",
      caption: "Conserve Capita",
      value: 10,
      progress: 30,
      color: "text",
    },
    {
      title: "Dedicated Support",
      subtitle:
        "Dedicated support by our experienced professionals for your assistance.",
      caption: "Market Advantage",
      value: 5,
      progress: 20,
      color: "secondary",
    },
    {
      title: "Technology Driven",
      subtitle:
        "Use of technology to its full potential to serve customers across the globe.",
      caption: "Foster Innovation",
      value: 4,
      progress: 15,
      color: "primary",
    },
  ];
  return (
    <>
      <TopNav />
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant={"h4"} fontWeight={500}>
              Why choose us
            </Typography>
            <Typography variant={"subtitle1"} fontWeight={300}>
              As a full service design, we work closely with our clients to
              define, design and develop transformative user experiences across
              all platforms and brand touchpoints.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ my: 4 }}>
          {whyHireUpPoints.map((eachOpt, i) => (
            <Grid item xs={6} md={4} key={i}>
              <Card elevation={4} sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      {eachOpt.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      {eachOpt.subtitle}
                    </Typography>
                  </Box>
                  <Box>
                    {/* <LinearProgress
                      variant="determinate"
                      value={eachOpt.progress}
                      color={eachOpt.color}
                    /> */}
                    <Toolbar disableGutters>
                      <Typography
                        variant="subtitle2"
                        component={"span"}
                        fontWeight={300}
                      >
                        {eachOpt.caption}
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
