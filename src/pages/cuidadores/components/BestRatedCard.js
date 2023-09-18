import Box from "@mui/material/Box";
import StarRatings from "react-star-ratings";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function BestRatedCard({ cuidador }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "20rem",
        minWidth: "15rem",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        marginLeft: {
          xs: "1rem",
          lg: "0",
        },
        padding: 1,
        paddingRight: 3,
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
            src={cuidador.photo}
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
          <Typography>{"(" + cuidador.age + ") años"}</Typography>
          <StarRatings
            rating={cuidador.rate}
            starRatedColor={theme.palette.rating.main}
            numberOfStars={5}
            starDimension="1rem"
            starSpacing="0.1rem"
          />
        </div>
      </div>

      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: 1,
          margin: 1,
          borderRadius: "20px",
          color: theme.palette.primary.main,
        }}
      >
        <span
          style={{
            maxWidth: "20ch",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </Box>
    </Box>
  );
}
