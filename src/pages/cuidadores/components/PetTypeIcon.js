import { Box } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function PetTypeIcon({ petType }) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {getImageByPetType(petType)}
      <Typography>{pluralizePetType(petType)}</Typography>
      {boxesRating(3.5)}
    </Box>
  );
}

function pluralizePetType(petType) {
  return petType + "s";
}

function getImageByPetType(petType) {
  const style = {
    margin: "0 2rem",
  };
  switch (petType) {
    case "Perro":
      return (
        <Image
          src="/assets/icons/mascotas/dog.png"
          height={24}
          width={24}
          objectFit="contain"
          style={style}
        />
      );
    case "Gato":
      return (
        <Image
          src="/assets/icons/mascotas/cat.png"
          height={24}
          width={24}
          objectFit="contain"
          style={style}
        />
      );
    case "Ave":
      return (
        <Image
          src="/assets/icons/mascotas/bird.png"
          height={24}
          width={24}
          objectFit="contain"
          style={style}
        />
      );

    default:
      return (
        <Image
          src="/assets/icons/mascotas/dog.png"
          height={24}
          width={24}
          objectFit="contain"
          style={style}
        />
      );
  }
}

function boxesRating(rating) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: theme.palette.primary.main,
          margin: "1px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: theme.palette.primary.main,
          margin: "1px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: theme.palette.primary.main,
          margin: "1px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: theme.palette.primary.main,
          margin: "1px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "10px",
          backgroundColor: theme.palette.primary.main,
          margin: "1px",
        }}
      />
    </Box>
  );
}
