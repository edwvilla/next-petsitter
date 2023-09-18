import Box from "@mui/material/Box";
import StarRatings from "react-star-ratings";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function MobileCuidadorTile({ cuidador }) {
  const theme = useTheme();
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            src={cuidador.photourl}
            style={{
              height: "4rem",
              width: "4rem",
              borderRadius: "50%",
              margin: "1rem",
            }}
          />
        </div>

        <div>
          <Typography>{cuidador.name}</Typography>
          <Typography>{cuidador.address}</Typography>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          marginRight: "1rem",
          textAlign: "right",
        }}
      >
        <StarRatings
          rating={cuidador.rating}
          starRatedColor={theme.palette.primary.main}
          numberOfStars={5}
          starDimension="1rem"
          starSpacing="0.1rem"
        />

        <Typography>
          {cuidador.city.name + " " + cuidador.city.state.name}
        </Typography>
      </div>
    </Box>
  );
}
