import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Already on home page: scroll to top/home section
      scroll.scrollToTop({ duration: 500 });
    } else {
      // Not on home page: navigate to home page
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        zIndex: 10,
        bgcolor: "#aed8e5",
      }}
    >
      <Stack direction="row" spacing={2} p={1}>
        <Button className="nav-button" onClick={handleHomeClick}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              fontSize: 14,
              // color: 'green',
              bgcolor: "green",
              mr: 1,
            }}
          >
            B
          </Avatar>
          Home
        </Button>

        {location.pathname === "/" ? (
          <>
            {/* Only show ScrollLink on home page */}
            <ScrollLink
              to="professional"
              smooth={true}
              duration={200}
              spy={true}
              offset={-90}
              activeClass="active-link"
            >
              <Button className="nav-button">Professional</Button>
            </ScrollLink>
            <ScrollLink
              to="PORTFOLIO"
              smooth={true}
              duration={200}
              spy={true}
              offset={-90}
              activeClass="active-link"
            >
              <Button className="nav-button">PORTFOLIO</Button>
            </ScrollLink>
            <ScrollLink
              to="EXPERIENCE"
              smooth={true}
              duration={200}
              spy={true}
              offset={-90}
              activeClass="active-link"
            >
              <Button className="nav-button">EXPERIENCE</Button>
            </ScrollLink>
            <ScrollLink
              to="CONTACT"
              smooth={true}
              duration={200}
              spy={true}
              offset={-90}
              activeClass="active-link"
            >
              <Button className="nav-button">CONTACT</Button>
            </ScrollLink>
          </>
        ) : null}
      </Stack>
    </Box>
  );
};

export default Header;
