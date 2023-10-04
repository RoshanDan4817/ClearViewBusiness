import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { BiDotsVerticalRounded, BiMenu } from "react-icons/bi";
import ProductLogo from "../assets/logo.png";
import $ from "jquery";

const pages = ["Home", "About Us", "Services"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const TopNav = React.forwardRef((props, ref) => {
  const contactRef = props.contactRef || ref;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (index) => {
    let targetId = "";

    if (index === 0) targetId = "Home";
    else if (index === 1) targetId = "AboutUs";
    else if (index === 2) targetId = "Services";
    // else if (index === 3) targetId = "ContactUs";

    const targetOffset = $(`#${targetId}`).offset().top;
    const scrollSpeed = 500; // Set the scroll speed in milliseconds
    const customY = -130;
    $("html, body").animate({ scrollTop: targetOffset + customY }, scrollSpeed);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const clickContactUs = () => {
    const targetOffset = $(`#ContactUs`).offset().top;
    const scrollSpeed = 500; // Set the scroll speed in milliseconds
    const customY = -130;
    $("html, body").animate({ scrollTop: targetOffset + customY }, scrollSpeed);
  };
  return (
    <AppBar position="sticky" sx={{ m: 0 }} color="background">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={ProductLogo}
            className="product__logo product__logo__a__responsive"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={ProductLogo}
            className="product__logo product__logo__b__responsive"
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(index)}
                variant="text"
                color="text"
              >
                {page}
              </Button>
            ))}
            <Button variant="text" color="text" onClick={clickContactUs}>
              Contact Us
            </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<BiDotsVerticalRounded />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
});
export default TopNav;
