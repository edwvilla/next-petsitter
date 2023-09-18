import { Box, TextField } from "@mui/material";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

export const Field = styled(TextField)(({ theme }) => ({
  width: "420px",
  backgroundColor: "white",
  borderRadius: "20px",
  marginBottom: "2rem",
  fontSize: "2rem",
  border: "none",
  "& label": {
    color:theme.palette.text.field,
    },

}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10rem",
  backgroundColor: theme.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  color: "white",
  marginBottom: "2rem",
}));

export const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "2rem",
}));

export const ButtonSignup = styled(Button)(({ theme }) => ({
  height: "4.5rem",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 20,
  
  width: 420,
  ":hover": {
    backgroundColor: theme.palette.secondary.light,
    },
}));
