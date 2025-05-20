import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Box, Button, Stack } from '@mui/material';
import '../App.css';
import Avatar from '@mui/material/Avatar';
const Header = () => {
  return (
    <Box sx={{ position: 'fixed', top: 0,display: "flex",justifyContent: "center",
        alignItems: "center", width: '100%', zIndex: 10, bgcolor: '#aed8e5' }}>
      <Stack direction="row" spacing={2} p={1}>
        <ScrollLink to="home" smooth={true} duration={200} spy={true}  offset={-90}
  activeClass="active-link">
          <Button className="nav-button">   <Avatar
      sx={{
        width: 24,
        height: 24,
        fontSize: 14,
        bgcolor: "#1976d2",
        mr: 5
      }}
    >
      A
    </Avatar>Home</Button>
        </ScrollLink>
        <ScrollLink to="professional" smooth={true} duration={200}  spy={true}  offset={-90}
  activeClass="active-link" >
          <Button className="nav-button">Professional</Button>
        </ScrollLink>
        <ScrollLink to="PORTFOLIO" smooth={true} duration={200} spy={true}  offset={-90}
  activeClass="active-link">
          <Button className="nav-button">PORTFOLIO</Button>
        </ScrollLink>
        <ScrollLink to="EXPERIENCE" smooth={true} duration={200} spy={true}  offset={-90}
  activeClass="active-link">
          <Button className="nav-button">EXPERIENCE</Button>
        </ScrollLink>
        <ScrollLink to="CONTACT" smooth={true} duration={200} spy={true}  offset={-90}
  activeClass="active-link">
          <Button className="nav-button">CONTACT</Button>
        </ScrollLink>
      </Stack>
    </Box>
  );
};
export default Header;
