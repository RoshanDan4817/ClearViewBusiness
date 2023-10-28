import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import accounting from "../assets/accounting.png";
import bookkeeping from "../assets/bookkeeping.png";
import debt from "../assets/debt.png";
import accountant from "../assets/accountant.png";
import payment from "../assets/payment.png";
import payrollManagement from "../assets/payroll-management.png";
import accountsServices from "../assets/accounts-services.jpg";
import payrollServices from "../assets/payroll-services.jpg";
import consultingService from "../assets/consulting-service.jpg";
import teamWork from "../assets/team-work.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const services = [
  {
    caption: "Accounting Outsourcing",
    subtitle:
      "Accounting Solutions Tailor-made for Indian and Foreign Businesses.",
    image: accounting,
    link: "/accountingOutsourcing",
  },
  {
    caption: "Bookkeeping",
    subtitle:
      "Bookkeeping services that help enhance efficiency in your business's financial services.",
    image: bookkeeping,
    link: "/bookKeeping",
  },
  {
    caption: "Accounts Receivable",
    subtitle:
      "Know your debtors better with our customized reports and strive for a better outcome.",
    image: debt,
    link: "/accountsRecievable",
  },
  {
    caption: "Hire Virtual Accountant",
    subtitle: "Automate your business finances ith Virtual Accountant service.",
    image: accountant,
    link: "/hireVirtualAssistant",
  },
  {
    caption: "Accounts Payable",
    subtitle:
      "Never default on your payments as we take care of what and when you need to pay.",
    image: payment,
    link: "/accountsPayable",
  },
  {
    caption: "Payroll Management",
    subtitle:
      "Simplify payroll processing and boost employee satisfaction for your business success.",
    image: payrollManagement,
    link: "/payrollManagement",
  },
];

const Services = forwardRef(() => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ my: 4 }} id="Home">
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight={500}>
            We Provide
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            The Best Solution For Your
          </Typography>
          <Typography variant="h4" fontWeight={500}>
            Business Development
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={3}>
          <Typography variant="subtitle1" fontWeight={300}>
            We provide all the services that you need to boost your business
            upto a high level.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={4}>
            <CardMedia
              component="img"
              image={accountsServices}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={4}>
            <CardMedia
              component="img"
              image={payrollServices}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={4}>
            <CardMedia
              component="img"
              image={consultingService}
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ my: 4 }} id="Services">
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight={500}>
            Our Services
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {services.map((eachService, i) => (
          <Grid item xs={12} md={6} lg={4} key={i} sx={{ display: "flex" }}>
            <Card sx={{ display: "flex", height: "100%" }} elevation={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <span onClick={() => navigate(eachService?.link)}>
                    <Typography
                      variant="caption"
                      fontWeight={500}
                      className="link-under"
                    >
                      {eachService.caption}
                    </Typography>
                  </span>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {eachService.subtitle}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ maxWidth: 151 }}
                image={eachService.image}
                alt={eachService.caption}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={12}>
          <Card sx={{ p: 6 }} elevation={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardMedia
                  sx={{ borderRadius: 1 }}
                  component="img"
                  image={teamWork}
                  alt={"Team Work"}
                />
              </Grid>
              <Grid item xs={6} id="AboutUs">
                <CardContent>
                  <Typography variant="h1" fontWeight={600}>
                    We are the top rated agency
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ my: 4 }}
                    fontWeight={300}
                  >
                    In 2018 we established ClearView Business Solutions with a
                    vision. The Vision was to enable business leaders to
                    concentrate on enhancing their organizations core skills. We
                    believe that this could be accomplished by overseeing all of
                    the administrative tasks, including accounting and
                    bookeeping, startup registration, technology, and human
                    resource management.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ my: 4 }}
                    fontWeight={300}
                  >
                    At first, we exclusively provided accounting services to
                    businesses of various sizes. We made care to provide our
                    customers with outstanding service.
                  </Typography>

                  {/* <Button size="large" variant="outlined">
                    Read More
                  </Button> */}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Services;
