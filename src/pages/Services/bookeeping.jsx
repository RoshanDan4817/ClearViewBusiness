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
export default function Bookeeping() {
  const servicesRef = useRef();
  const homeRef = useRef();
  const contactRef = useRef();
  const whyHireUpPoints = [
    {
      title: "Cost Savings",
      subtitle:
        " Outsourcing accounting can significantly reduce operational costs, as you don't need to hire and train in-house staff or invest in accounting software and infrastructure.",
      caption: "Reduce expenses",
    },
    {
      title: "Access to Expertise",
      subtitle:
        "Accounting firms specialize in financial matters, providing you with access to a team of experienced professionals who stay updated on the latest industry regulations",
      caption: "Access skilled professionals",
    },
    {
      title: "Focus on Core Activities",
      subtitle:
        "Outsourcing allows your business to focus on core activities and strategic goals, freeing up time and resources for growth and development",
      caption: "Concentrate on core business",
    },
    {
      title: "Scalability",
      subtitle:
        "Accounting outsourcing services can be tailored to your business needs. You can scale services up or down as your business evolves",
      caption: "Adapt to growth easily",
    },
    {
      title: "Enhanced Data Security",
      subtitle:
        "Reputable outsourcing providers have robust data security measures in place, ensuring the confidentiality and protection of your financial data",
      caption: "Protect sensitive data",
    },
    {
      title: "Timely Financial Reporting",
      subtitle:
        "Outsourced accountants can help you generate accurate financial reports and statements on time, aiding in decision-making and compliance.",
      caption: "Get faster insights",
    },
    {
      title: "Regulatory Compliance",
      subtitle:
        "Experts in accounting outsourcing are well-versed in local and international regulations, ensuring that your business remains compliant with tax laws and reporting requirements.",
      caption: "Reduce compliance risks",
    },
    {
      title: "Reduced Errors",
      subtitle:
        "Professional accountants are less likely to make errors, reducing the risk of financial mistakes that could harm your business",
      caption: "Efficiency",
    },
    {
      title: "Global Reach",
      subtitle:
        "Outsourcing can provide access to a global talent pool, offering diverse perspectives and solutions for your financial challenges",
      caption: "Leverage global talent",
    },
  ];
  return (
    <>
      <TopNav />
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent={"center"} sx={{ my: 4 }}>
          <Grid item xs={12}>
            <Typography variant={"h2"} fontWeight={500} align="center">
              Accounting Outsourcing
            </Typography>
            <Typography
              variant={"subtitle1"}
              // align={"justify"}
              textAlign={"justify"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              In today's dynamic business landscape, companies face an array of
              challenges, with financial management being a top priority. To
              excel in this aspect, many businesses are turning to Accounting
              Outsourcing as a strategic solution. Accounting Outsourcing offers
              a range of benefits, including cost savings, improved accuracy,
              and access to specialized expertise.
            </Typography>
          </Grid>
        </Grid>
        <Grid container margin={"40px 0px"}>
          <Typography variant={"h5"} fontWeight={400}>
            Key Benefits include:
          </Typography>
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
                      <Toolbar disableGutters>
                        <Typography
                          variant="subtitle1"
                          component={"span"}
                          fontWeight={400}
                          style={{ textDecoration: "underline" }}
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
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
