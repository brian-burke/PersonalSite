import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTheme} from "@emotion/react";
import Link from "@mui/material/Link";
import {styled} from "@mui/system";
import Slide from "@mui/material/Slide";
import {useState, useEffect} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const StyledLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
    textDecoration: "none",
    color: theme.palette.background.main,
    padding: "10px",
    position: "relative",
    bottom: "0px",
    '&:hover': {
        color: "#761C83",
        bottom: "5px"
    },
    transition: theme.transitions.create(['bottom'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
}));

export default function ButtonAppBar(props) {
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCollapse(false);
        }, props.timeout);
    });
    const theme = useTheme();

    return (
        <AppBar color="transparent" elevation={0} sx={{height: "100%"}}>
            <Toolbar position="absolute" sx={{
                justifyContent: "flex-end",
                width: "100%",
                height: "100%",
                alignItems: "flex-start",
                padding: "20px"
            }}>
                <Slide
                    direction="down"
                    in={!collapse}
                    timeout={1000}
                    style={{
                        transitionDelay: "200ms",
                    }}
                >
                    <Typography variant="h6" component="div" sx={{flexGrow: 0}}>
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
                    <Typography variant="h6" component="div" sx={{flexGrow: 0}}>
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
                    <Typography variant="h6" component="div" sx={{flexGrow: 0}}>
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
                    <Typography variant="h6" component="div" sx={{flexGrow: 0}}>
                        <StyledLink href="/about">About</StyledLink>
                    </Typography>
                </Slide>
            </Toolbar>

            <Toolbar position="absolute" sx={{
                justifyContent: "flex-start",
                width: "100%",
                height: "100%",
                alignItems: "flex-end",
                padding: "20px"
            }}>
              <Box>
                <Slide
                    direction="right"
                    in={!collapse}
                    timeout={1000}
                    style={{
                      transitionDelay: "200ms",
                    }}
                >
                  <Typography variant="h6" component="div" sx={{flexGrow: 0, paddingTop: "10px"}}>
                    <StyledLink href="/about">
                      <GitHubIcon/>
                    </StyledLink>
                  </Typography>

                </Slide>
                <Slide
                    direction="right"
                    in={!collapse}
                    timeout={1000}
                    style={{
                      transitionDelay: "200ms",
                    }}
                >
                  <Typography variant="h6" component="div" sx={{flexGrow: 0, paddingTop: "10px"}}>
                    <StyledLink href="/about">
                      <LinkedInIcon/>
                    </StyledLink>
                  </Typography>
                </Slide>

                  <Slide
                      direction="right"
                      in={!collapse}
                      timeout={1000}
                      style={{
                          transitionDelay: "200ms",
                      }}
                  >
                      <Typography variant="h6" component="div" sx={{flexGrow: 0, paddingTop: "10px"}}>
                          <StyledLink href="/about">
                              <EmailIcon/>
                          </StyledLink>
                      </Typography>
                  </Slide>

              </Box>

            </Toolbar>
        </AppBar>

    );
}
