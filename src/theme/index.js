import { Poppins } from "next/font/google";
import { createBreakpoints } from "@mui/system";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const breakpoints = createBreakpoints({});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1366,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: poppins.fontFamily,
    h2: {
      fontWeight: 700,
      fontSize: 24,
      [breakpoints.down("md")]: {
        fontSize: 21,
      },
    },
    h3: {
      fontWeight: 400,
      fontSize: "1rem",
      [breakpoints.up("md")]: {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      [breakpoints.up("md")]: {
        fontSize: 16,
      },
    },
    span: {
      fontWeight: 400,
      fontSize: 14,
      [breakpoints.up("md")]: {
        fontSize: ".8rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#0c4c5a",
    },
    secondary: {
      main: "#efa609",
    },
    accent: {
      main: "#53c2ac",
    },
    background: {
      default: "#fef5e1",
    },
    text: {
      field: "#616161",
      secondary: "#1E1E1E",
    },
    rating: {
      main: "#EFA60B",
    },
  },

  MuiTableCell: {
    root: {
      padding: "4px 8px",
      backgroundColor: "#eaeaea",
    },
    tableCell: {
      padding: "4px 8px",
      backgroundColor: "#eaeaea",
    },
    row: {
      padding: "4px 8px",
      backgroundColor: "#eaeaea",
    },
    tableRow: {
      padding: "4px 8px",
      backgroundColor: "#eaeaea",
    },
  },
});

export default theme;
