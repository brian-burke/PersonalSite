import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { duration, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Collapse, Grow } from "@mui/material";
import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import responsiveImg from "../media/PngItem_6088596.png";
import Image from "next/image";
import Appbar from "../components/Appbar";

export default function contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Appbar />
      <Box>
        <Typography variant={"h1"} color="white">
          Work
        </Typography>
        <Box display={"flex"} sx={{ maxWidth: "800px" }}>
          <Image src={require("../media/PngItem_6088596.png")} alt="fireSpot" />
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <Typography variant={"h4"} color="white">
            Fully responsive custom websites
          </Typography>
          <Button>View Live Site</Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
