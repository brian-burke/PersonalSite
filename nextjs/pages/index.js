import * as React from 'react';
import Container from '@mui/material/Container';
import {styled} from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography"
import {duration, useTheme} from '@mui/material/styles';
import Button from "@mui/material/Button"
import Box from "@mui/material/Box";
import {Collapse, Grow} from "@mui/material";
import {useEffect, useState} from "react";
import Slide from "@mui/material/Slide";

const NameContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'left',
})(({theme, left}) => ({
    display: "flex",
    alignItems: "end",
    width: "50%",
    height: "50%",
    justifyContent: "start",
    position: "absolute",
    left: "50%",
    backgroundColor: "black",
    zIndex: "-100",
    padding: "3px 30px",


    ...(left && {
        left: 0,
        justifyContent: "end"
    }),
}));

const NameContainerBottom = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'left',
})(({theme, left}) => ({
    display: "flex",
    alignItems: "start",
    width: "50%",
    height: "50%",
    top: "50%",
    justifyContent: "start",
    position: "absolute",
    left: "50%",
    backgroundColor: "black",
    zIndex: "-100",
    padding: "3px 30px",

    ...(left && {
        left: 0,
        justifyContent: "end"
    }),
}));

export default function Index() {

    const firstnameList = ["B", "R", "I", "A", "N"]
    const lastnameList = ["B", "U", "R", "K", "E"]

    useEffect(() => {
        setTimeout(() => {
            setCollapse(false)
        }, 200);
    })

    const [collapse, setCollapse] = useState(true)
    const containerRef = React.useRef(null);

    const delayIncrement = 700
    const initialDelay = 1000

    return (
        <>
            <Box sx={{height: "100vh", position: "relative"}} >
                <Collapse orientation="horizontal" in={collapse} timeout={200} sx={{
                    backgroundColor: "white",
                    height: "100vh",
                    width: "50%",
                    position: "absolute",
                    zIndex: "100",
                    top: 0,
                    right: "50%"
                }}/>
                <Collapse orientation="horizontal" in={collapse} timeout={200} sx={{
                    backgroundColor: "white",
                    height: "100vh",
                    width: "50%",
                    position: "absolute",
                    zIndex: "100",
                    top: 0,
                    left: "50%"
                }}/>
                <NameContainer left={true} ref={containerRef}>
                    {firstnameList.map((letter, index) => (
                        <Slide direction="right" in={collapse} container={containerRef.current}
                               style={{transitionDelay: collapse ? '500ms' : '0ms'}}>
                            <Typography variant={'h3'} color={"white"}>{letter}</Typography>
                        </Slide>
                    ))}
                </NameContainer>
                <NameContainerBottom left={true}>
                    <Grow
                        in={true}
                        style={{transformOrigin: '0 0 0'}}
                        {...({timeout: 5000})}>
                        <Typography variant={'h3'} color={"white"}>Frontend</Typography>
                    </Grow>
                </NameContainerBottom>

                <NameContainer left={false}>
                    {lastnameList.map((letter, index) => (
                        <Grow
                            in={true}
                            style={{transformOrigin: '0 0 0'}}
                            {...({timeout: initialDelay + index * delayIncrement})}>
                            <Typography variant={'h1'} color={"white"}>{letter}</Typography>
                        </Grow>
                    ))}
                </NameContainer>
                <NameContainerBottom left={false}>
                    <Grow
                        in={true}
                        style={{transformOrigin: '0 0 0'}}
                        {...({timeout: 5000})}>
                        <Typography variant={'h3'} color={"white"}>Developer</Typography>
                    </Grow>

                </NameContainerBottom>

            </Box>
            <Box sx={{height: "100vh", position: "relative"}}>
                test

            </Box>
        </>
    );
}
