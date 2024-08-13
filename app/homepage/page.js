"use client";
import { AccountCircle, History, Navigation } from "@mui/icons-material";
import { Grid, IconButton, Container, Icon } from "@mui/material";
import Fab from "@mui/material/Fab";
import React from "react";
import "material-symbols";
import { useRouter } from "next/navigation";

export default function ViewHistory() {
  const router = useRouter();
  const handleviewHistory = (event) => {
    event.preventDefault();
    router.push("/viewhistory");
  };
  const handleAdd = (event) => {
    event.preventDefault();
    router.push("/addbet");
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs>
          <h2 style={{ fontFamily: "Adca" }}>
            Hello <span style={{ color: "#F88E27" }}>UserName</span>
          </h2>
        </Grid>
        <Grid xs="auto" container>
          <Grid item>
            <IconButton aria-label="history" onClick={handleviewHistory}>
              <History />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="account_circle">
              <AccountCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container></Grid>
      <Fab variant="extended" color="primary" onClick={handleAdd}>
        <span class="material-symbols-outlined" sx={{ mr: 2 }}>
          ar_stickers
        </span>
        Place Bets!
      </Fab>
    </Container>
  );
}
