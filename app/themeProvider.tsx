import { createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#B58851',
        },
        secondary: {
            main: '#E5DBCF',
        }
    }
})

import { ReactNode } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
)
