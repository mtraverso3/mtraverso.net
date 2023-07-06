import React from 'react';
import {AppBar, Box, Button, IconButton, Link, Typography} from "@mui/material";
import '@fontsource-variable/inter';
import GitHubIcon from '@mui/icons-material/GitHub';
import {palette} from "../themes/palette";
import {BiSun} from "react-icons/bi";

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
        boxShadow: "1px 1px 8px 0px rgba(0,0,0,0.1)",
        borderRadius: "0px 0px 8px 8px",
        transition: "box-shadow 0.1s ease-in-out",
        "&:hover": {
            boxShadow: "1px 1px 8px 0px rgba(0,0,0,0.2)",
            transition: "box-shadow 0.1s ease-in-out",
        }
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
        fontSize: "16px",
        gap: "30px",
        position: "relative",
        width: "fit-content",
    },
    navbarLink : {
        color: palette.black.main,
        transition: "transform 0.1s ease-in-out",
        '&:hover': {
            color: palette.primary.main,
            //slide the icon up when hovered and back down when not hovered
            transform: "translateY(-1.5px)",
            transition: "transform 0.1s ease-in-out",
        },
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
        <AppBar color="transparent" elevation={0} sx={localStyles.navbar}>
            <Box sx={localStyles.navbarLeft}>
                {/*<Box component="img" src={"./w.svg"} alt={"logo"} sx={localStyles.logo}/>*/}
                <Typography variant="h6" sx={localStyles.leftText} children={"mtraverso.net"}></Typography>
            </Box>
            <Box sx={localStyles.navbarRight}>
                <Box sx={localStyles.navbarLinks}>
                    <Link href={"#"} underline={"none"} sx={localStyles.navbarLink}>Home</Link>
                    <Link href={"#"} underline={"none"} sx={localStyles.navbarLink}>About</Link>
                    <Link href={"#"} underline={"none"} sx={localStyles.navbarLink}>Works</Link>
                </Box>

                <IconButton aria-label="github" color="inherit" href="https://github.com/mtraverso3" target="_blank">
                    <GitHubIcon/>
                </IconButton>
                <IconButton aria-label="dark mode" color="inherit">
                    <BiSun/>
                </IconButton>
                <Button variant="contained" color="primary" href={"mailto:hello@mtraverso.net"}>Contact
                    me {'\u2192'}</Button>

            </Box>
        </AppBar>
    );
}

export default NavigationBar;