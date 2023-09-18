import Grid from "@mui/material/Grid";
import StarRatings from "react-star-ratings";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function CuidadorTile({ cuidador }) {
  const theme = useTheme();
  console.log("petsitter", cuidador);

  return (
    <Grid
      container
      spacing={2}
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "2rem",
      }}
    >
      <Grid
        item
        xs={2}
        style={{
          display: "grid",
          placeItems: "center",
          marginBottom: "1rem",
        }}
        columnSpacing={2}
        rowSpacing={2}
      >
        <img
          src={cuidador.photourl}
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50%",
            margin: "0 1rem",
          }}
        />
      </Grid>
      <Grid item xs={2} sx={{}}>
        <Typography variant="h6">{cuidador.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">{cuidador.address}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">{cuidador.city.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">{cuidador.city.state.name}</Typography>
      </Grid>

      <Grid item xs={2}>
        <StarRatings
          rating={cuidador.rating}
          starRatedColor={theme.palette.primary.main}
          numberOfStars={5}
          starDimension="1rem"
          starSpacing="0.1rem"
        />
      </Grid>
    </Grid>
  );
}
