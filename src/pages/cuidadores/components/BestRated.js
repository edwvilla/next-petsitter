import BestRatedCard from "./BestRatedCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import rows from "../mock";
import theme from "@/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function BestRated() {
  const isLg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  if (isLg) {
    return (
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          margin: {
            xs: "0 1rem",
            md: "2rem auto",
          },
          padding: "0 2rem",
        }}
      >
        <Typography
          sx={{
            marginTop: "2rem",
            marginBottom: "1rem",
            color: theme.palette.primary.main,
          }}
          variant="h2"
        >
          Los Mejores Valorados
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {rows.map((row) => {
            return <BestRatedCard cuidador={row} />;
          })}
        </div>
      </Box>
    );
  }

  return (
    <Box>
      <Typography
        sx={{
          marginTop: "2rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
        }}
        variant="h2"
      >
        Los Mejores Valorados
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
        }}
      >
        {rows.map((row) => {
          return <BestRatedCard cuidador={row} />;
        })}
      </div>
    </Box>
  );
}
