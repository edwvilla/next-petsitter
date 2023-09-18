
import AppBar from '@mui/material/AppBar';

import { styled } from "@mui/material";

export const NavBar = styled(AppBar)(({ theme }) => ({
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "1.5rem",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 110,
    padding: "0 6rem",
}));
