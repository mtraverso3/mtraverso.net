import {Box, Typography} from "@mui/material";

const localStyles = {
    experienceBox: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    experienceWrapper: {
        border: "0px none",
        height: "567px",
        width: "80%"
    },
    experience: {
        alignItems: "flex-start",
        display: "flex",
        left: 0,
        padding: "92px 0px",
        position: "relative",
        top: 0,
        width: "100%",
    },
    label: {
        height: "60px",
        width: "375px",
        fontFamily: "Inconsolata Variable",
        fontSize: "48px",
        fontWeight: 700,
        letterSpacing: 0,
        left: 0,
        top: 0,
        lineHeight: "normal",
        display: "flex",
        flexDirection: "row",

    },
    tabs: {

    }

};
const Experience = () => {
    return (
        // <Box sx={localStyles.experienceBox}>
            <Box sx={localStyles.experienceWrapper}>
                <Box sx={localStyles.experience}>
                    <Typography variant="h1" sx={localStyles.label}>My Experience</Typography>
                </Box>
            </Box>
        // </Box>
    );
};

const Tabs = () => {

}

export default Experience;