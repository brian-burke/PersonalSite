import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";
import Slide from "@mui/material/Slide";
import { useState,useEffect } from "react";

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  textDecoration: "none",
  color: theme.palette.background.main,
  padding: "0 10px 0 10px",
}));

export default function ButtonAppBar() {
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCollapse(false);
    }, 4000);
  });
  const theme = useTheme();

  return (
      <AppBar color="transparent" elevation={0}>
        <Toolbar  position="absolute"   sx={{justifyContent:"flex-end",width:"100%"}}>
        <Slide
            direction="down"
            in={!collapse}
            timeout={1000}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <StyledLink href="/">Home</StyledLink>
            </Typography>
          </Slide>
          <Slide
            direction="down"
            in={!collapse}
            timeout={1000}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <StyledLink href="/contact">Contact</StyledLink>
            </Typography>
          </Slide>
          <Slide
            direction="down"
            in={!collapse}
            timeout={1000}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <StyledLink href="/work">Work</StyledLink>
            </Typography>
          </Slide>
          <Slide
            direction="down"
            in={!collapse}
            timeout={1000}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
              <StyledLink href="/about">About</StyledLink>
            </Typography>
          </Slide>

        </Toolbar>
      </AppBar>

  );
}
