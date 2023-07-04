import React from 'react';
import {AppBar, Box, Button, IconButton, Link, Typography} from "@mui/material";
import '@fontsource-variable/inter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import {palette} from "../themes/palette";

const localStyles = {
    navbar: {
        alignItems: "center",
        backgroundColor: "transparent",
        display: "flex",
        height: "60px",
        justifyContent: "space-between",
        padding: "0px 28px",
        position: "relative",
        width: "80%",
        flexDirection: "row",
    },
    navbarLeft: {
        alignItems: "center",
        display: "flex",
        gap: "8px",
        position: "relative",
        width: "fit-content",
    },
    navbarRight: {
        alignItems: "center",
        display: "flex",
        gap: "28px",
        position: "relative",
        width: "fit-content",
    },
    navbarLinks: {
        alignItems: "flex-start",
        display: "flex",
        gap: "30px",
        position: "relative",
        width: "fit-content",
    },
    leftText: {
        color: palette.black.main,
        fontSize: "16px",
        fontWeight: 400,
        letterspacing: 0,
        lineHeight: "24.6px",
        marginTop: "-1px",
        position: "relative",
        whiteSpace: "nowrap",
        width: "fit-content",
    },
    logo: {
        height: "21px",
        minWidth: "12px",
        position: "relative",
    }
};


const NavigationBar = () => {
    return (
        // <Box sx={localStyles.header}>

        <AppBar color="transparent" elevation={0} sx={localStyles.navbar}>
            <Box sx={localStyles.navbarLeft}>
                {/*<Box component="img" src={"./w.svg"} alt={"logo"} sx={localStyles.logo}/>*/}
                <Typography variant="h6" sx={localStyles.leftText} children={"Marcos"}></Typography>
            </Box>
            <Box sx={localStyles.navbarRight}>
                <Box sx={localStyles.navbarLinks}>
                    <Link href={"#"} underline={"none"} color="inherit">Home</Link>
                    <Link href={"#"} underline={"none"} color="inherit">About</Link>
                    <Link href={"#"} underline={"none"} color="inherit">Works</Link>
                </Box>

                <IconButton aria-label="github" color="inherit" href="https://github.com/mtraverso3" target="_blank">
                    <GitHubIcon/>
                </IconButton>
                <IconButton aria-label="dark mode" color="inherit">
                    <LightModeIcon/>
                </IconButton>
                <Button variant="contained" color="primary" href={"mailto:hello@mtraverso.net"}>Contact
                    me {'\u2192'}</Button>

            </Box>
        </AppBar>
        // </Box>
    );
}

export default NavigationBar;