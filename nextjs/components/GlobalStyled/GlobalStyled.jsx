import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/system';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


export const InquireContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    height: "100%",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    '@media (max-width: 780px)': {
        width: "100%",
    },
}));

export const AddressContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    height: "100%",
    width: "50%",
    backgroundColor: theme.palette.blue.main,
    textAlign: "right",
    '@media (max-width: 780px)': {
        width: '100%',
    },
}));

export const ShadowHeading = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'color',
})(({theme, color}) => ({
    color: color,
    textShadow:
        "1px 1px 0 #000000, " +
        "2px 2px 0 #000000, " +
        "3px 3px 0 #000000, " +
        "4px 4px 0 #000000, " +
        "5px 5px 0 #000000, " +
        "6px 6px 0 #000000, " +
        "7px 7px 0 #000000",
    fontWeight: "900",
    textAlign: "center"
}));

export const Column = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'width',
})(({theme, width}) => ({
    width: width,
    textAlign: "center",
    paddingTop: "20px",
}));

export const OutlinedButton = styled('button', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    color: theme.palette.blue.main,
    borderColor: theme.palette.blue.main,
    borderWidth: "7px",
    width: "200px",
    height: "60px",
    borderRadius: "30px",
    borderStyle: "solid",
    fontFamily: "barlow",
    fontSize: "20px",
    cursor: "pointer",
    backgroundClip: "text",
    transition: "background-position 275ms ease",
    background: 'linear-gradient(to right, ' + theme.palette.blue.main +' , ' + theme.palette.blue.main +' 50%, ' + theme.palette.primary.main +' 50%)',
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    backgroundSize: "200% 100%",
    backgroundPosition: "100%",

    '&:hover': {
        backgroundPosition: "0 100%",
        color:theme.palette.primary.main
    }
}));

export const FooterButton = styled('button', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderWidth: "7px",
    width: "200px",
    height: "60px",
    borderRadius: "30px",
    borderStyle: "solid",
    fontFamily: "barlow",
    fontSize: "20px",
    cursor: "pointer",
    backgroundClip: "text",
    transition: "background-position 275ms ease",
    background: 'linear-gradient(to right, ' + theme.palette.primary.main +' , ' + theme.palette.primary.main +' 50%, ' + theme.palette.secondary.main +' 50%)',
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    backgroundSize: "200% 100%",
    backgroundPosition: "100%",

    '&:hover': {
        backgroundPosition: "0 100%",
        color:theme.palette.secondary.main
    }
}));
