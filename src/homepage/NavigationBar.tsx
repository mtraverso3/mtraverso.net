import React from 'react';
import {AppBar, Box, Button, IconButton, Typography} from "@mui/material";
import '@fontsource-variable/inter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import {palette} from "../themes/palette";

const localStyles = {
    header: {
        height: "60px",
        left: "112px",
        right: "112px",
        top: "0px",
        padding: "0px 28px 0px 28px",
        justifyContent: "space-between",

        // alignItems: "center",
        // backgroundColor: palette.white.main,
        // display: "flex",
        // height: "60px",
        // justifyContent: "space-between",
        // padding: "0px 28px",
        // position: "relative",
        // width: "1216px"


    },
    navbar: {
        padding: "0px 28px 0px 28px",
        //should be fill x 60px
        height: "60px",
        width: "100%",
        //should be 112px from left edge and right edge

        justifyContent: "space-between",
        flexDirection: "row",
        // backgroundColor: "green"
    },
    leftText: {
        //centered vertically:
        height: "25px",
        top: "50%",
        transform: "translateY(-50%)",
        position: "relative",
        gap: "8spx",
        // outline: "1px solid black",
        //round the corners:
        borderRadius: "5px",
        //space on the left and right:
        padding: "0px 4px 3px 4px",
    },
    rightBox: {


    },
};


const NavigationBar = () => {
    return (
        <Box sx={localStyles.header}>

        <AppBar position="static" color="transparent" elevation={0} sx={localStyles.navbar}>
        <Typography variant="h6" sx={localStyles.leftText}>
            Marcos
        </Typography>
            <Box sx={{display: "flex", flexDirection: "row", gap: "8px"}}>
                <Button variant="text" color="inherit">Home</Button>
                <Button variant="text" color="inherit">About</Button>
                <Button variant="text" color="inherit">Works</Button>
                <IconButton aria-label="github" color="inherit" href="https://github.com/mtraverso3" target="_blank">
                    <GitHubIcon/>
                </IconButton>
                <IconButton aria-label="dark mode" color="inherit">
                    <LightModeIcon/>
                </IconButton>
                <Button variant="contained" color="primary" href={"mailto:marcostraverso2003@gmail.com"}>Contact me {'\u2192'}</Button>

            </Box>
        </AppBar>
        </Box>
    );
}

export default NavigationBar;