import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { styled } from "@mui/material";

export const NavBar = styled(AppBar)(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "1.5rem",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "6rem",

  padding: "0 3rem",
}));

export const LinkText = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  fontSize: "1.5rem",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));
