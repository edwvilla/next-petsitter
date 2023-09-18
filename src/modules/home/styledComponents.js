import { Box, Typography } from "@mui/material";

import {styled} from "@mui/material";

export const TitleText = styled(Typography)(({theme}) => ({
    maxWidth: "40rem",
    fontWeight: "bold",
    fontSize: "4rem",
    color: theme.palette.primary.main,
}));

export const SubtitleText = styled(Typography)(({theme}) => ({
    maxWidth: "40rem",
    fontSize: "2rem",
    color: theme.palette.primary.main,

}));

export const Container = styled('div')(({theme}) => ({
    height: "40rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "0 6rem",
}));

