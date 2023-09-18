import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Name = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

export const Email = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.accent.main,
}));
