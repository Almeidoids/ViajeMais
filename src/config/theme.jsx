import { createTheme } from "@mui/material";

//Fontes
import "@fontsource/port-lligat-slab";
import "@fontsource/inter";

// Tematização da fonte
const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "'Port Lligat Slab'",
            fontSize: 50
        },
        h2: {
            fontFamily: "'Port Lligat Slab'",
            fontSize: 40,
        },
        h3: {
            fontFamily: "'Port Lligat Slab'",
            fontSize: 35,
        },
        h6: {
            fontFamily: "'Port Lligat Slab'",
        },
        body1: {
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
        },
        body2: {
            fontFamily: "'Inter', sans-serif",
        }
    }
})

export default theme;