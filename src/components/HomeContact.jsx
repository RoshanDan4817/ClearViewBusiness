import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { forwardRef } from "react";
import contact from "../assets/contact.jpg";
const HomeContact = forwardRef((props, ref) => {
  const contactRef = ref;
  const [open, setOpen] = React.useState(false); // State to control the dialog visibility
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="xl" ref={contactRef} id="ContactUs">
      <Card elevation={4} sx={{ backgroundColor: "#20252c", p: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <CardMedia
                component="img"
                sx={{ width: "100%", borderRadius: 1 }}
                image={contact}
              />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography
                  variant="h1"
                  fontWeight={600}
                  sx={{ color: "background.default" }}
                >
                  Interested to work with us
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "background.default",
                    color: "text.main",
                    px: 4,
                    py: 2,
                    mt: 6,
                  }}
                  onClick={handleOpenDialog}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogContent>
          {/* Add your contact details here */}
          <Typography variant="h2">Contact Details</Typography>

          <Typography variant="caption">
            {" "}
            <b>Phone:</b> +91 72930 49240, +91 94969 64360
          </Typography>
          <br />
          <Typography variant="caption">
            {" "}
            <b>Email:</b> saramma.bino@clearviewbusinesses.com
          </Typography>
          <br />
          <Typography variant="caption">
            {" "}
            <b>Address:</b> Vazhavila, Priyadarsini Gardens, Karakulam P.O.,
            695564
          </Typography>
          <br />
          {/* <Typography variant="subtitle1">
            <br />
            <br />
            <br />
          </Typography> */}
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "text.main",
            }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
});

export default HomeContact;
