import * as React from 'react';
import Container from '@mui/material/Container';

;
import {styled} from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography"
import {duration, useTheme} from '@mui/material/styles';
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import {Collapse, Grow} from "@mui/material";
import {useEffect, useState} from "react";
import Slide from "@mui/material/Slide";
import Appbar from "../components/Appbar"


export default function about() {

    return (
        <>
            <Appbar/>
            <Box sx={{height: "100vh", backgroundColor: "black"}}>
                <Box sx={{position: "relative", textAlign: "left", color: "white", padding: "50px", height: "50%"}}>
                    <Typography variant={'h1'} sx={{color:"#761C83"}}>
                        ME
                    </Typography>
                </Box>
                <Box sx={{
                    position: "relative",
                    color: "white",
                    bottom: 0,
                    padding: "50px",
                    height: "50%",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end"
                }}>
                    <Typography variant={'h1'} sx={{color:"#761C83"}}>
                        SKILLS
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
