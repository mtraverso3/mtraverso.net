import {PropsWithChildren} from "react";
import {createTheme, CssBaseline, darken, ThemeProvider} from "@mui/material";
import {palette} from "./palette";
import '@fontsource-variable/inconsolata';
import '@fontsource-variable/inter';

export const theme = createTheme({
    typography: {
        fontFamily: ['Inter Variable', 'sans-serif'].join(','),
    },
    palette: palette,
    components: {
        MuiButton: {
            //     use the primary color for the button
            styleOverrides: {
                root: {

                },
                containedPrimary: {
                    color: palette.white.main,
                    alignItems: "flex-start",
                    backgroundColor: palette.primary.main,
                    borderRadius: "6px",
                    padding: "12px 21px",
                    gap: "10px",
                    position: "relative",
                    marginTop: "-1px",
                    lineHeight: "normal",
                    letterSpacing: 0,
                    fontWeight: 400,
                    fontSize: "12px",
                    width: "fit-content",
                    '&:hover': {
                        backgroundColor: darken(palette.primary.main, 0.15)
                    },
                },
                outlined: {
                    // color: palette.white.main,
                    // borderColor: palette.primary.main,
                }
            }
        }

    }
});


const Theming = ({children}: PropsWithChildren<{}>) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    );
}
export default Theming;