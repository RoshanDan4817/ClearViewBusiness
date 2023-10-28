import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
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
export default function WhyUs() {
  return (
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
                  {/* <LinearProgress variant="determinate" value={eachOpt.progress} color={eachOpt.color} /> */}
                  <Toolbar disableGutters>
                    <Typography
                      variant="subtitle2"
                      component={"span"}
                      fontWeight={400}
                      style={{ textDecoration: "underline" }}
                    >
                      {eachOpt.caption}
                    </Typography>
                    {/* <Box sx={{ flexGrow: 1 }} />
										<Typography variant="subtitle2" component={"span"} fontWeight={300}>
											{eachOpt.value}%
										</Typography> */}
                  </Toolbar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
