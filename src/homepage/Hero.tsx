import {Box, darken, Typography} from "@mui/material";
import {palette} from "../themes/palette";
import {
    BiLogoAws,
    BiLogoDocker,
    BiLogoJava,
    BiLogoPython,
    BiLogoReact,
    BiLogoTux,
    BiLogoTypescript
} from "react-icons/bi";
import {PiFileSql} from "react-icons/pi";

const localStyles = {

    heroWrapper: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        border: "0px none",
        width: "100%",
    },
    hero: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        left: 0,
        padding: "92px 320px",
        position: "relative",
        top: 0,
        width: "100%",
    },
    heroText: {
        color: palette.black.main,
        fontFamily: "Inconsolata Variable",
        fontSize: "65px",
        fontWeight: 850,
        letterSpacing: 0,
        lineHeight: "61px",
        marginTop: "-1px",
        position: "relative",
        textAlign: "center",
        width: "fit-content",
    },
    heroInfoText: {
        color: "#898989",
        fontFamily: "Inter Variable",
        fontSize: "24px",
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "31px",
        position: "relative",
        textAlign: "justify",
        width: "800px",
    },
    technologies: {
        alignItems: "center",
        backgroundColor: "transparent",
        display: "flex",
        gap: "16px",
        left: 0,
        padding: "12px 0px",
        position: "relative",
        top: 0,
        width: "797px",
    },
    technology: {
        alignItems: "center",
        backgroundColor: palette.white.dark,
        borderRadius: "3px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        overflow: "hidden",
        padding: "3px 8px",
        position: "relative",
        width: "fit-content",
        cursor: "default",
        transition: "background-color 0.1s ease-in-out, transform 0.1s ease-in-out",
        '&:hover': {
            backgroundColor: darken(palette.white.dark, 0.03),
            transform: "translateY(-0.7px)",
            transition: "background-color 0.1s ease-in-out, transform 0.1s ease-in-out",
        }
    },
    technologyText: {
        color: palette.black.main,
        fontFamily: "Inter Variable",
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: "30px",
        marginTop: "-1px",
        position: "relative",
        whiteSpace: "nowrap",
        width: "fit-content",
    }
}
const Hero = () => {
    return (
        <Box sx={localStyles.heroWrapper}>
            <Box sx={localStyles.hero}>
                <Typography variant="h1" sx={localStyles.heroText}>
                    Hello I'm <br/>
                    Marcos Traverso
                </Typography>
                <Typography variant="h2" sx={localStyles.heroInfoText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                </Typography>
                <Technologies/>
            </Box>
        </Box>);
};

const Technologies = () => {
    return (
        <Box sx={localStyles.technologies}>
            <Box sx={localStyles.technology}>
                <BiLogoTypescript size={"16px"}/>
                <Typography sx={localStyles.technologyText}>Typescript</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoReact size={"16px"}/>
                <Typography sx={localStyles.technologyText}>React</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoJava size={"16px"}/>
                <Typography sx={localStyles.technologyText}>Java</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoPython size={"16px"}/>
                <Typography sx={localStyles.technologyText}>Python</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoAws size={"16px"}/>
                <Typography sx={localStyles.technologyText}>AWS</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoDocker size={"16px"}/>
                <Typography sx={localStyles.technologyText}>Docker</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <PiFileSql size={"16px"}/>
                <Typography sx={localStyles.technologyText}>SQL</Typography>
            </Box>
            <Box sx={localStyles.technology}>
                <BiLogoTux size={"16px"}/>
                <Typography sx={localStyles.technologyText}>Linux</Typography>
            </Box>

        </Box>
    );
}

export default Hero;