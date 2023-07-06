import NavigationBar from "./NavigationBar";
import {Box} from "@mui/material";
import React from "react";
import {palette} from "../themes/palette";
import Hero from "./Hero";
import Experience from "./Experience";

const localStyles = {
    desktopVersion: {
        backgroundColor: palette.white.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }
}
const Homepage = () => {
    return (
        <Box sx={localStyles.desktopVersion}>
            <NavigationBar/>
            <Hero/>
            <Experience/>
        </Box>);
};

export default Homepage;