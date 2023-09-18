import { Box, Typography } from "@mui/material";

import { ApiClient } from "../../services/client";
import PetTypeIcon from "./components/PetTypeIcon";
import React from "react";
import StarRatings from "react-star-ratings";
import { parseCookies } from "nookies";
import theme from "@/theme";

function DetalleCuidador({ cuidador }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Typography variant="h2">
          {cuidador.name + " " + cuidador.lastname}
        </Typography>

        <StarRatings
          rating={cuidador.rating}
          starRatedColor={theme.palette.primary.main}
          numberOfStars={5}
          starDimension="1rem"
          starSpacing="0.1rem"
        />
      </Box>

      <Typography>Se ubica en:</Typography>
      <Typography>
        {cuidador.address +
          ", " +
          cuidador.city.name +
          ", " +
          cuidador.city.state.name}
      </Typography>

      <Typography>(31) años de experiencia con:</Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        {cuidador.types.map((pet) => {
          const isTheLastPet =
            cuidador.types.indexOf(pet) === cuidador.types.length - 1;
          return (
            <>
              <PetTypeIcon petType={pet.pettype.description} />
              <VerticalDivider hidden={isTheLastPet} />
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  const data = await ApiClient.get("/petsitters/all/" + id, {
    headers: {
      Authorization: token,
    },
  }).catch((err) => {
    console.log(err);
  });

  return {
    props: {
      cuidador: data.data,
    },
  };
}

function VerticalDivider({ hidden }) {
  if (hidden) {
    return <></>;
  }

  return (
    <div
      style={{
        height: "45px",
        width: "1px",
        backgroundColor: "black",
      }}
    />
  );
}

export default DetalleCuidador;
