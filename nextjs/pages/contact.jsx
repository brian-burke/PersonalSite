import React from 'react';
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import {styled} from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography"
import {InquireContainer} from "../components/GlobalStyled/GlobalStyled"
import {AddressContainer} from "../components/GlobalStyled/GlobalStyled"
import {ShadowHeading} from "../components/GlobalStyled/GlobalStyled"
import {useTheme} from '@mui/material/styles';
import Appbar from "../components/Appbar"
import{ init,send } from 'emailjs-com';
import Button from "@mui/material/Button";

const Centered = styled('div', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    height:"100vh",
}));

const Input = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    backgroundColor: theme.palette.background.main,
    borderRadius: "20px",
    width: "100%",
    outline: "none"
}));

const FormLabel = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    paddingBottom: "2px",
    display: 'block',
    width: "100%",
    fontSize: "15px",
    color:"white"
}))


export default function contact() {
    const theme = useTheme()

    useEffect(() => {
        init("user_p5EZAT5Drw2OxW5X60HqT")
    },[]);

    const sendEmail = () => {
        send("default_service", "template_go1ehwa", {}, "user_p5EZAT5Drw2OxW5X60HqT").then(()=>{
            console.log("worked!")
        })
    }

    const [textLocation, setLocation] = useState("-500px")
    return (
        <>
            <Appbar timout={0}/>
                <Centered>
                    <Box>
                        <ShadowHeading variant={'h2'} color="white">
                            CONTACT
                        </ShadowHeading>
                        <FormLabel variant={"p"}>
                            Name
                        </FormLabel>
                        <Input/>
                        <FormLabel variant={"p"}>
                            Email
                        </FormLabel>
                        <Input/>
                        <FormLabel variant={"p"}>
                            Subject
                        </FormLabel>
                        <Input/>
                        <FormLabel variant={"p"}>
                            Message
                        </FormLabel>
                        <Input
                            minRows={4}
                            multiline
                            maxRows={6}
                            ///value={value}
                            //onChange={handleChange}
                        />
                        <Button onClick={()=>{sendEmail()}}>send</Button>
                    </Box>
                </Centered>
        </>
    );
}
