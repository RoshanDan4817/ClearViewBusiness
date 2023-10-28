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
      title: "Accurate financial records",
      subtitle:
        " Bookkeeping provides businesses with accurate and up-to-date financial records. This information can be used to track income and expenses, make informed business decisions, and prepare financial statements for lenders and investors.",
      caption: "Reduce expenses",
    },
    {
      title: "Improved cash flow management",
      subtitle:
        "Bookkeeping can help businesses to improve their cash flow management by tracking income and expenses and identifying areas where costs can be reduced. This information can be used to create budgets and forecasts, and to develop strategies for managing cash flow during slow periods.",
      caption: "Access skilled professionals",
    },
    {
      title: "Reduced tax liability",
      subtitle:
        "Accurate bookkeeping records can help businesses to reduce their tax liability by ensuring that all deductible expenses are claimed and that all taxes are paid on time. Bookkeepers can also help businesses to identify tax planning opportunities.",
      caption: "Concentrate on core business",
    },
    {
      title: "Improved business decision-making",
      subtitle:
        "Bookkeeping provides businesses with the financial information they need to make informed business decisions. For example, businesses can use their financial records to track sales trends, identify new markets, and make decisions about pricing and inventory.",
      caption: "Adapt to growth easily",
    },
    {
      title: "Increased profitability",
      subtitle:
        "Bookkeeping can help businesses to increase their profitability by identifying areas where costs can be reduced and by improving cash flow management. Bookkeepers can also help businesses to develop and implement financial strategies to achieve their profitability goals.",
      caption: "Protect sensitive data",
    },
    {
      title: "Compliance with tax laws",
      subtitle:
        "Businesses are required by law to keep accurate financial records and to file tax returns on time. Bookkeeping can help businesses to comply with these requirements by ensuring that all financial transactions are recorded and that all taxes are calculated and paid correctly.",
      caption: "Get faster insights",
    },
    {
      title: "Peace of mind",
      subtitle:
        "Knowing that your financial records are accurate and up-to-date can give you peace of mind. This can free you up to focus on other aspects of your business and to make better business decisions.",
      caption: "Reduce compliance risks",
    },
    {
      title: "Access to funding",
      subtitle:
        "Lenders and investors are more likely to provide funding to businesses with accurate and up-to-date financial records. Bookkeeping can help you to prepare financial statements and other documents that are required by lenders and investors.",
      caption: "Efficiency",
    },
    {
      title: "Preparation for sale",
      subtitle:
        "If you are ever considering selling your business, accurate and up-to-date financial records will be essential for potential buyers. Bookkeeping can help you to prepare your business for sale by ensuring that your financial records are in order.",
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
              Bookkeeping
            </Typography>
            <Typography
              variant={"subtitle1"}
              // align={"justify"}
              textAlign={"justify"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              Your business finances are the lifeblood of your operation.
              Accurate and up-to-date bookkeeping is essential for making sound
              financial decisions, tracking your progress, and meeting your tax
              obligations. However, bookkeeping can be a time-consuming and
              complex task, especially for small business owners who are already
              juggling multiple responsibilities.
            </Typography>
            <Typography
              variant={"subtitle1"}
              // align={"justify"}
              textAlign={"justify"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              Intro Your business finances are the lifeblood of your operation.
              Accurate and up-to-date bookkeeping is essential for making sound
              financial decisions, tracking your progress, and meeting your tax
              obligations. However, bookkeeping can be a time-consuming and
              complex task, especially for small business owners who are already
              juggling multiple responsibilities. If you're looking for a way to
              save time and hassle, and ensure that your bookkeeping is accurate
              and compliant, consider hiring a professional bookkeeper. A
              bookkeeper can help you with everything from setting up your
              accounting system to recording transactions and preparing
              financial reports.
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
                    {/* <Box>
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
                    </Box> */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent={"center"} sx={{ my: 4 }}>
          <Grid item xs={12}>
            <Typography
              variant={"subtitle1"}
              // align={"justify"}
              textAlign={"justify"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              Bookkeeping is an essential function for businesses of all sizes.
              It provides a number of key benefits, including accurate financial
              records, improved cash flow management, reduced tax liability,
              improved business decision-making, increased profitability,
              compliance with tax laws, peace of mind, access to funding, and
              preparation for sale.
            </Typography>
            <Typography
              variant={"subtitle1"}
              // align={"justify"}
              textAlign={"justify"}
              fontSize={"22px"}
              style={{ margin: "20px 0" }}
            >
              If you are looking for a bookkeeping service that can help you to
              achieve your financial goals, please contact us today.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
