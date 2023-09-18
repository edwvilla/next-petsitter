import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

export const Field = styled(TextField)(({ theme }) => ({
  height: "5rem",
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "0 2rem",
  marginRight: "2rem",
  "& fieldset": {
    border: "none",
  },
  "& input": {
    height: "100%",
  },
  textSizeAdjust: "100%",
}));

export const Container = styled("div")(({ theme }) => ({
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
  height: "3rem",
}));
