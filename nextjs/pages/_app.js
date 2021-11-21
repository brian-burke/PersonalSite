import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import {createTheme} from "@mui/material";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;


    const theme = createTheme({
        typography: {
            textDecoration:"none",
            fontFamily: "barlow",
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: 16,
            lineHeight: "20px",
            color: "#FFFFFF",
        },
        palette: {
            primary: {
                main: '#F4BD0F',
            },
            secondary: {
                main: '#000000',
            },
            blue: {
                main: '#006AAB'
            },
            pink: {
                main: '#DD2310'
            },
            green: {
                main: '#0F3D1D'
            },
            background: {
                main: "#FFFFFF"
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor:'#000000',
                    }
                }
            }
        }
    });

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                    <Component {...pageProps}/>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
