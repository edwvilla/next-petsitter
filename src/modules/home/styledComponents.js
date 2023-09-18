import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material";

export const TitleText = styled(Typography)(({ theme }) => ({
  maxWidth: "50rem",
  fontWeight: "700",
  fontSize: "4rem",
  lineHeight: "3rem",
  color: theme.palette.primary.main,
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  maxWidth: "50rem",
  fontSize: "1.5rem",
  lineHeight: "27px",
  color: theme.palette.primary.main,
}));

export const Container = styled("div")(({ theme }) => ({
  height: "40rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  padding: "0 6rem",
}));

export const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));
