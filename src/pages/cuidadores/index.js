import { Place, Search } from "@mui/icons-material";

import { ApiClient } from "@/services/client";
import BestRated from "./components/BestRated";
import Box from "@mui/system/Box";
import CuidadorTile from "./components/CuidadorTile";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "next/link";
import MobileCuidadorTile from "./components/MobileCuidadorTile";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { authSelector } from "@/store/reducers/authSlice";
import axios from "axios";
import { getPetsitters } from "@/services/petsitterService";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Cuidadores({ petsitters }) {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  function showSearchBars() {
    if (isMd)
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <TextField
            sx={{
              m: 1,
              width: {
                xs: "100%",
                md: "25rem",
              },
              marginRight: {
                xs: 0,
                md: "3rem",
              },
            }}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              style: {
                height: "4rem",
                borderRadius: 20,
                width: "100%",
                paddingLeft: 20,
                backgroundColor: "white",
                border: "1px solid black",
              },

              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            placeholder="Buscar cuidador"
          />
          <TextField
            sx={{
              m: 1,
              width: {
                xs: "100%",
                md: "25rem",
              },
              marginRight: {
                xs: 0,
                md: "3rem",
              },
            }}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
              style: {
                height: "4rem",
                borderRadius: 20,
                width: "100%",
                paddingLeft: 20,
                backgroundColor: "white",
                border: "1px solid black",
              },

              startAdornment: (
                <InputAdornment position="start">
                  <Place
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <Place
                    sx={{
                      color: "grey",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            placeholder="Ubicación, Ciudad, Estado"
          />
        </Box>
      );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          margin: {
            xs: "0px 0px 0px 12px",
            md: "5rem",
          },
          width: {
            xs: "calc(100% - 20px)",
            md: "70%",
          },
        }}
      >
        {showSearchBars()}

        <Typography
          sx={{
            marginBottom: "1rem",
          }}
          variant="h2"
        >
          Cuidador
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isMd && (
            <Grid
              container
              spacing={2}
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              <Grid item xs={2}>
                <Typography variant="h6">Cuidador</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Nombre</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Ubicacion</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Ciudad</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Estado</Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h6">Valoracion</Typography>
              </Grid>
            </Grid>
          )}
          {petsitters.map((p) => {
            return (
              <Link
                href={`/cuidadores/${p.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {!isMd ? (
                  <MobileCuidadorTile cuidador={p} />
                ) : (
                  <CuidadorTile cuidador={p} />
                )}
              </Link>
            );
          })}
        </div>
      </Box>

      <BestRated
        style={{
          width: "30%",
        }}
      />
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies["token"];

  const data = await ApiClient.get("/petsitters/all", {
    headers: {
      Authorization: token,
    },
  }).catch((err) => {
    console.log(err);
  });

  return {
    props: {
      petsitters: data.data,
    },
  };
}
