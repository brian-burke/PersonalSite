import * as React from "react";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Collapse, Grow } from "@mui/material";

export default function SlideFromContainer() {
  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);

  const firstnameList = ["B", "R", "I", "A", "N"];
  const lastnameList = ["B", "U", "R", "K", "E"];

  const frontendList = ["F", "R", "O", "N", "T", "E","N","d"];
  const developerList = ["D", "E", "V", "E", "L", "O","P","E","R"];

  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCollapse(false);
    }, 200);

  });

  return (
    <>
      <Box display={"flex"}>
        <Box
          sx={{
            height: "100vh",
            width: "50%",
            display: "flex",
            padding: 2,
            borderRadius: 1,
            backgroundColor: "black",
            overflow: "hidden",
          }}
          ref={leftRef}
        >
          <Collapse
            orientation="horizontal"
            in={collapse}
            timeout={200}
            sx={{
              backgroundColor: "white",
              height: "100vh",
              width: "50%",
              position: "absolute",
              zIndex: "100",
              top: 0,
              right: "50%",
            }}
          />
          <Collapse
            orientation="horizontal"
            in={collapse}
            timeout={200}
            sx={{
              backgroundColor: "white",
              height: "100vh",
              width: "50%",
              position: "absolute",
              zIndex: "100",
              top: 0,
              left: "50%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            {firstnameList.map((letter, index) => (
              <Slide
                direction="left"
                in={!collapse}
                container={leftRef.current}
                timeout={2000}
                style={{
                  transitionDelay: !collapse ? `${300 + (index-3) * 50}ms` : "0ms",
                }}
              >
                <Typography variant={"h1"} color={"white"}>
                  {letter}
                </Typography>
              </Slide>
            ))}
            <Box sx={{flexBasis:"100%"}}/>
            {frontendList.map((letter, index) => (
              <Slide
                direction="left"
                in={!collapse}
                container={leftRef.current}
                timeout={2000}
                style={{
                  transitionDelay: !collapse ? `${2300 + (index-6) * 40}ms` : "0ms",
                }}
              >
                <Typography variant={"h5"} color={"white"}>
                  {letter}
                </Typography>
              </Slide>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "50%",
            display: "flex",
            padding: 2,
            borderRadius: 1,
            backgroundColor: "black",
            overflow: "hidden",
          }}
          ref={rightRef}
        >
          <Collapse
            orientation="horizontal"
            in={collapse}
            timeout={200}
            sx={{
              backgroundColor: "white",
              height: "100vh",
              width: "50%",
              position: "absolute",
              zIndex: "100",
              top: 0,
              right: "50%",
            }}
          />
          <Collapse
            orientation="horizontal"
            in={collapse}
            timeout={200}
            sx={{
              backgroundColor: "white",
              height: "100vh",
              width: "50%",
              position: "absolute",
              zIndex: "100",
              top: 0,
              left: "50%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            {lastnameList.map((letter, index) => (
              <Slide
                direction="right"
                in={!collapse}
                container={rightRef.current}
                timeout={2000}
                style={{
                  transitionDelay: !collapse ? `${200 + (index-3) * 50}ms` : "0ms",
                }}
              >
                <Typography variant={"h1"} color={"white"}>
                  {letter}
                </Typography>
              </Slide>
            ))}
            <Box sx={{flexBasis:"100%"}}/>
            {developerList.map((letter, index) => (
              <Slide
                direction="right"
                in={!collapse}
                container={rightRef.current}
                timeout={2000}
                style={{
                  transitionDelay: !collapse ? `${2000 + (index-6) * 50}ms` : "0ms",
                }}
              >
                <Typography variant={"h5"} color={"white"}>
                  {letter}
                </Typography>
              </Slide>
            ))}

          </Box>
        </Box>
      </Box>
    </>
  );
}
